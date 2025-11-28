"use client"

import Navigation from "@/components/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Smartphone,
  Zap,
  Settings,
  ArrowRight,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="container px-4">
          <div className="flex justify-start mb-8">
            <img
              src="/logo-swarawave.png"
              alt="SwaraWave Logo"
              className="h-24 w-auto"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] leading-tight">
                The Ultrasonic Standard for Secure, Seamless Proximity Experiences
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                SwaraWave delivers fast, reliable, hardware-free proximity interactions using
                encrypted audio signals — enabling verification, transactions, and engagement
                across any device with a speaker or microphone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Request a Demo → /contact */}
                <Button
                  asChild
                  size="lg"
                  className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white animate-scale-in"
                >
                  <Link href="/contact">Request a Demo</Link>
                </Button>

                {/* Explore our technology → /products */}
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white animate-scale-in delay-150"
                >
                  <Link href="/products">Explore Our Technology</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by enterprises powering the future of proximity intelligence.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slide-in-right">
              {/* Soft gradient glow behind the image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A5AFF]/30 to-[#8692FF]/30 rounded-3xl blur-3xl opacity-70" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40 bg-white/40 backdrop-blur">
                <img
                  src="/hero-swarawave.jpg"  // your landscape image
                  alt="SwaraWave proximity intelligence in action"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="container px-4">
          <p className="text-center text-lg font-medium text-muted-foreground mb-8">
            Powering proximity intelligence across finance, retail, FMCG, transportation, and digital platforms.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["TechCorp", "FinanceHub", "RetailMax", "TransitPro", "DataFlow"].map(
              (company) => (
                <div key={company} className="text-2xl font-bold text-[#0D1C3F]">
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Why SwaraWave / Value Proposition */}
      <section className="py-20">
        <div className="container px-4 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F]">
            A New Layer of Secure Digital-Physical Interaction
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SwaraWave’s ultrasonic technology creates a secure communication channel that works
            instantly, offline, and across all devices — no Bluetooth, WiFi, NFC, or QR pairing required.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our audio-driven proximity protocol supports complex authentication, payment, and
            engagement flows that remain stable even in noisy retail, transportation, and commercial settings.
          </p>
        </div>
      </section>

      {/* Core Benefits / Value Props */}
      <section className="pb-20">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-up">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Secure by Design
                </h3>
                <p className="text-muted-foreground">
                  Encrypted ultrasonic signaling ensures trusted presence detection, reducing spoofing,
                  fraud, and reliance on network-based verification.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-up delay-150">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Universal Device Compatibility
                </h3>
                <p className="text-muted-foreground">
                  Works on any device with a speaker or microphone — eliminating hardware limitations
                  and expanding your customer reach.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-up delay-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Instant, Frictionless Engagement
                </h3>
                <p className="text-muted-foreground">
                  Trigger contextual actions such as check-ins, loyalty rewards, content delivery,
                  or promotions at the exact moment users interact with your environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-up delay-500">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Enterprise-Grade Control & Governance
                </h3>
                <p className="text-muted-foreground">
                  Flexible SDK tools let you orchestrate authentication steps, validate identity,
                  and manage complex proximity rules with full transparency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What SwaraWave Enables */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-8">
              Unlock Proximity Intelligence Across Every Touchpoint
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              SwaraWave powers device-agnostic identity validation, offline-ready transactions,
              and contextual engagement — enabling enterprises to deliver smarter digital and
              physical experiences.
            </p>

            <div className="max-w-2xl mx-auto text-left space-y-2 text-muted-foreground">
              <p className="font-semibold text-[#0D1C3F] mb-2">
                Built for applications such as:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Wallet &amp; payment authentication</li>
                <li>In-store engagement and conversion</li>
                <li>Ticketless mobility and check-ins</li>
                <li>Connected device experiences</li>
                <li>Secure multi-device orchestration</li>
              </ul>
            </div>

            {/* Learn More → /products */}
            <div className="mt-10">
              <Button
                asChild
                variant="outline"
                className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white"
              >
                <Link href="/products">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20" id="industries">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Built for Real-World Industries
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Finance → /solutions/finance */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#0D1C3F] mb-4">Finance</h3>
                <p className="text-muted-foreground mb-6">
                  Enable secure offline authentication, account verification, and proximity-driven
                  transaction validation with ultrasonic identity signals.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white"
                >
                  <Link href="/solutions/finance">
                    View Solution
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Retail → /solutions/retail */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#0D1C3F] mb-4">
                  Retail &amp; FMCG
                </h3>
                <p className="text-muted-foreground mb-6">
                  Deliver aisle-based engagement, convert intent into purchase, and activate loyalty
                  at shelf or checkout — all without hardware pairing.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white"
                >
                  <Link href="/solutions/retail">
                    View Solution
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Mobility → /solutions/mobility */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#0D1C3F] mb-4">
                  Mobility &amp; Transport
                </h3>
                <p className="text-muted-foreground mb-6">
                  Power ticketless boarding, rider verification, and proximity-based access flows
                  that remain stable across high-traffic environments.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white"
                >
                  <Link href="/solutions/mobility">
                    View Solution
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Enterprises Choose SwaraWave */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-6">
              Why Enterprises Choose SwaraWave
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Designed for real-world scale, SwaraWave is engineered to perform in demanding,
              high-volume environments across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#0D1C3F] mb-3">
                  Offline-Ready &amp; Network Independent
                </h3>
                <p className="text-sm text-muted-foreground">
                  Functions reliably without WiFi or mobile connectivity — ideal for transportation,
                  retail, and remote environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#0D1C3F] mb-3">
                  Fast, Lightweight SDK
                </h3>
                <p className="text-sm text-muted-foreground">
                  Integrates effortlessly into existing apps or POS systems with minimal overhead.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#0D1C3F] mb-3">
                  Scalable &amp; Proven
                </h3>
                <p className="text-sm text-muted-foreground">
                  Designed for high-volume environments across banking, retail, and public
                  transport networks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF]">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Build Secure, Contactless Experiences With Sound
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Let&apos;s unlock the future of proximity intelligence for your business.
          </p>

          {/* Request a Demo → /contact */}
          <Button
            asChild
            size="lg"
            className="bg-white text-[#4A5AFF] hover:bg-gray-100"
          >
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0D1C3F] text-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo-swarawave.png"
                  alt="SwaraWave Logo"
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">SwaraWave</span>
              </div>
              <p className="text-sm text-gray-300">
                Proximity Intelligence Powered by Sound
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Ultrasonic SDK</li>
                <li>Engagement Platform</li>
                <li>SDK Capabilities</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Finance</li>
                <li>Retail &amp; FMCG</li>
                <li>Mobility &amp; Transport</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 SwaraWave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}