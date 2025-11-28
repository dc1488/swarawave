"use client"

import Navigation from "@/components/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Smartphone, Zap, Building2 } from "lucide-react"

export default function FinanceSolutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F]">
                Finance
              </h1>
            </div>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Enable secure, seamless, and hardware-free wallet transactions with SwaraWave’s
              ultrasonic verification. SwaraWave connects payments through a single communication
              channel — sound — ensuring instant authentication and transaction confidence even
              in low-connectivity environments.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-6">
            SwaraWave Radius: The Ultrasonic Standard for Financial Transactions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SwaraWave Radius™ transmits encrypted ultrasonic signals between mobile devices,
            terminals, and kiosks to verify identity, authenticate payments, and confirm
            proximity-based interactions with unmatched security and reliability.
            When paired with SwaraWave Quest™, financial services can also reward
            user actions, drive loyalty, and gamify transaction behavior.
          </p>
        </div>
      </section>

      {/* Macro Use Cases */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Macro Use Cases for Financial Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Proximity Verification</h3>
                <p className="text-muted-foreground">
                  Instantly detect when a user or device is near a merchant terminal or peer for
                  quick, secure wallet interactions — even in noisy or crowded environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Authentication</h3>
                <p className="text-muted-foreground">
                  Verify device presence and user identity simultaneously — without relying on QR,
                  Bluetooth, or NFC hardware. Prevent unauthorized payments with sound-based trust.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transaction Validation</h3>
                <p className="text-muted-foreground">
                  Confirm transfers, merchant payments, and wallet transactions securely and
                  instantly. Offline transactions queue automatically until the device reconnects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Targeted Offers & Loyalty</h3>
                <p className="text-muted-foreground">
                  Deliver personalized offers, cashback, and rewards the moment users arrive
                  or transact — powered by SwaraWave Quest™ loyalty intelligence.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Micro Use Cases */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-10">
            Micro Use Cases: Unlock More Once Proximity Is Verified
          </h2>

          <div className="space-y-4 text-muted-foreground text-lg">
            <p>• Offline wallet-to-wallet transfers</p>
            <p>• Secure ATM / kiosk access without cards</p>
            <p>• Transaction-level fraud prevention</p>
            <p>• Real-time consumer presence detection</p>
            <p>• Instant loyalty point issuing</p>
            <p>• Hyper-targeted merchant campaigns</p>
            <p>• Seamless in-branch service and check-in</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0D1C3F]">
            Key Benefits & Advantages
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Higher Security */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Higher Security</h3>
                <p className="text-muted-foreground mb-4">
                  SwaraWave uses encrypted ultrasonic tokens, time-bound validation, and device
                  fingerprinting to reduce fraud across all transaction types.
                </p>
              </CardContent>
            </Card>

            {/* Less Hardware */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Reduced Hardware Dependence</h3>
                <p className="text-muted-foreground mb-4">
                  No NFC, no QR, no Bluetooth, and no special terminals — only speakers and microphones.
                </p>
              </CardContent>
            </Card>

            {/* Lower friction */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Lower Operational Friction</h3>
                <p className="text-muted-foreground mb-4">
                  Automatic presence detection and seamless workflows reduce manual steps, user errors,
                  and support overhead.
                </p>
              </CardContent>
            </Card>

            {/* Unified UX */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Consistent UX Across Channels</h3>
                <p className="text-muted-foreground">
                  Deliver the same secure proximity experience across mobile apps, merchant terminals,
                  self-service kiosks, ATMs, and in-branch systems.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Financial Experience with Sound
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Discover how SwaraWave can secure digital wallets, streamline branch services, and
            unlock proximity-powered payments.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-white text-[#4A5AFF] hover:bg-gray-100"
          >
            <Link href="/contact">Schedule a Finance Demo</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0D1C3F] text-white">
        <div className="container px-4 text-center text-sm text-gray-300">
          © 2024 SwaraWave. All rights reserved.
        </div>
      </footer>
    </div>
  )
}