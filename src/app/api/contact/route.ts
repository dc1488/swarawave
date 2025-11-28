import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Extract fields from body
    const { fullName, company, workEmail, message, role } = body;

    // Basic validation
    if (!fullName || !company || !workEmail || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Optional: log submission
    console.log("Contact form submission:", {
      fullName,
      company,
      workEmail,
      role: role || "",
      message,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
    });

    // 👉 SEND EMAIL VIA RESEND
    const from = process.env.EMAIL_FROM;
    const to = process.env.EMAIL_TO;

    if (!process.env.RESEND_API_KEY || !from || !to) {
      console.error("Missing email environment variables");
      return NextResponse.json(
        { error: "Email configuration error" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from,
      to,
      replyTo: workEmail, // so you can reply directly
      subject: `New SwaraWave contact from ${fullName} (${company})`,
      html: `
        <h2>New SwaraWave Website Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Work Email:</strong> ${workEmail}</p>
        ${
          role
            ? `<p><strong>Role / Title:</strong> ${role}</p>`
            : ""
        }
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
        <hr/>
        <p><small>Submitted at: ${new Date().toISOString()}</small></p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your interest. Our team will contact you within 24 hours.",
        submittedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}