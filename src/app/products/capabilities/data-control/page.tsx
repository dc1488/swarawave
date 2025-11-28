"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"

export default function DataControlPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="container px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D1C3F] mb-6">
            Data Control & Proximity Intelligence
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            SwaraWave provides structured, event-level data that helps enterprises understand proximity, 
            engagement, authentication, and device behavior in the real world.
          </p>

          <div className="space-y-8">

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Event-Level Analytics</h3>
                <p className="text-muted-foreground">
                  Capture detailed events such as tone start, completion, presence detection, 
                  and proximity intensity for operational and behavioral insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Device & Proximity Mapping</h3>
                <p className="text-muted-foreground">
                  Understand when and where users interact with your environment through 
                  proximity-driven data flows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Privacy-Respecting Architecture</h3>
                <p className="text-muted-foreground">
                  SwaraWave minimizes personal data requirements and supports strict 
                  governance for regulated industries such as finance.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  )
}