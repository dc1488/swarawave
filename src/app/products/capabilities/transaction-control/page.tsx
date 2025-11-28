"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"

export default function TransactionControlPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="container px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D1C3F] mb-6">
            Transaction Control & Proximity Validation
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            SwaraWave ensures every transaction originates from a verified device within a verified 
            proximity — enabling secure payment approvals, wallet authentication, and device binding.
          </p>

          <div className="space-y-8">

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Proximity-Based Transaction Approval</h3>
                <p className="text-muted-foreground">
                  Require real-time ultrasonic presence checks to confirm that a user is physically 
                  present before authorizing sensitive actions or payments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Device & App Binding</h3>
                <p className="text-muted-foreground">
                  Bind a wallet, app, or POS session to a specific device through ultrasonic signaling, 
                  ensuring no other device can hijack the transaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Offline Transaction Validation</h3>
                <p className="text-muted-foreground">
                  Authenticate transactions in offline environments where network-based verification 
                  is slow, unreliable, or unavailable.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  )
}