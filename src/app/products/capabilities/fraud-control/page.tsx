"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"

export default function FraudControlPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="container px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D1C3F] mb-6">
            Fraud Control & Secure Authentication
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            SwaraWave’s ultrasonic proximity signaling provides a secure, tamper-resistant layer 
            for identity validation, device proofing, and transaction assurance — without relying 
            on internet connectivity or traditional network-based verification.
          </p>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Encrypted Ultrasonic Token Exchange</h3>
                <p className="text-muted-foreground">
                  SwaraWave encodes encrypted tokens into ultrasonic signals, ensuring device presence 
                  cannot be spoofed through screenshots, forwarding, or relay attacks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Presence-Based Identity Verification</h3>
                <p className="text-muted-foreground">
                  True physical proximity is required to complete authentication, reducing fraud risks 
                  from remote attackers or compromised networks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Secure Multi-Factor Enhancement</h3>
                <p className="text-muted-foreground">
                  Add ultrasonic presence as an independent factor that strengthens existing PIN, password, 
                  or device authentication flows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}