import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { fullName, company, workEmail, message } = body
    
    if (!fullName || !company || !workEmail || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log the form submission
    console.log('Contact form submission:', {
      fullName,
      company,
      workEmail,
      role: body.role || '',
      message,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent')
    })

    // Here you would typically:
    // 1. Send email using a service like SendGrid, Resend, or AWS SES
    // 2. Store in database using Prisma
    // 3. Send to Slack/Teams for notifications
    // 4. Create CRM ticket
    
    // For demo purposes, we'll just return success
    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for your interest. Our team will contact you within 24 hours.',
        submittedAt: new Date().toISOString()
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}