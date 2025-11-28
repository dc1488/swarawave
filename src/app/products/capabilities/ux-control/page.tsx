"use client"

import Navigation from "@/components/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function UXControlPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Section */}
      <section className="py-20">
        <div className="container px-4 max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#4A5AFF] mb-3">
            SDK Capabilities · UX Control
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0D1C3F] mb-6">
            UX Control & Proximity Interaction Logic
          </h1>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            SwaraWave links your UX flows directly to real-world proximity events — so apps, terminals,
            and devices can respond automatically when someone is truly present. No QR scans, no pairing,
            just responsive, context-aware experiences driven by encrypted ultrasonic signals.
          </p>

          <div className="space-y-8">
            {/* Card 1 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Proximity-Triggered UX States
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Switch screens, surface prompts, guide check-ins, or show next-best actions the moment a
                  device enters or exits a defined proximity range. Build flows that feel instant and
                  contextually aware, without manual taps or scans.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Multi-Step Orchestration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Orchestrate multi-stage experiences — from arrival and identity confirmation to content
                  delivery, upsell, and rewards — using proximity events and callbacks as the backbone of
                  your UX logic.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Seamless App-to-Device Experiences
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Let users simply “walk up and it works.” SwaraWave makes it possible for apps and devices
                  to recognize each other automatically in-range — removing the friction of pairing, typing
                  codes, or scanning QR in every interaction.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Back link / CTA */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white"
            >
              <Link href="/products/capabilities">
                ← Back to SDK Capabilities
              </Link>
            </Button>

            <Button
              asChild
              className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
            >
              <Link href="/contact">
                Talk to Us About UX Control
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}