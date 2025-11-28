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
  Code,
  Database,
  Lock,
  CreditCard,
  Sparkles,
  BarChart3,
  ArrowRight,
} from "lucide-react"

export default function SDKPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Copy */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#4A5AFF] mb-4">
                SwaraWave Ultrasonic SDK
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-6 leading-tight">
                The Ultrasonic Standard for Secure, Seamless Proximity Experiences
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                SwaraWave Ultrasonic SDK turns speakers and microphones into a secure proximity layer —
                enabling verification, transactions, and engagement through encrypted audio signals on
                any device equipped with a speaker or microphone.
              </p>
              <p className="text-sm text-muted-foreground">
                Trusted by enterprises designing the next generation of proximity intelligence.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative">
              {/* Soft gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4A5AFF]/40 via-[#8692FF]/30 to-transparent rounded-3xl blur-3xl opacity-80" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/30 bg-white/40 backdrop-blur">
                <img
                  src="/sdk-hero-swarawave.jpg" // landscape hero image
                  alt="SwaraWave Ultrasonic SDK powering secure proximity experiences"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div className="space-y-6 max-w-xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#4A5AFF]">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F]">
                The Ultrasonic Standard for Proximity Data
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Built for mobility, retail, and merchant-first businesses, SwaraWave Ultrasonic SDK
                lets every interaction carry trusted proximity data. It seamlessly layers into your
                omni-channel journeys, giving you flexible, secure ways to connect digital workflows
                with what&apos;s happening on-premise.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Devices can send and receive encrypted ultrasonic signals to confirm presence, validate
                identity, and synchronize actions in real time — without relying on Bluetooth, QR scans,
                or network connectivity.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4A5AFF]/25 via-[#8692FF]/20 to-transparent rounded-3xl blur-3xl opacity-80" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/30 bg-white/40 backdrop-blur">
                <img
                  src="/sdk-how-it-works.jpg" // conceptual diagram / flow illustration
                  alt="Diagram showing how SwaraWave ultrasonic signals flow between devices"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases – Macro */}
      <section className="py-20">
        <div className="container px-4">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#4A5AFF] mb-3">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-4">
              Turn Every Interaction Into a Signal
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Secure. Accessible. Versatile. SwaraWave harnesses ultrasonic data to create connected,
              intuitive experiences that solve real operational challenges — whether on-premise,
              in-store, in-transit, or in virtual environments.
            </p>
          </div>

          {/* Macro Use Cases */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Proximity Verification</h3>
                <p className="text-muted-foreground">
                  Quietly confirm that a user, device, or asset is actually present at a specific
                  location — ideal for check-ins, BOPIS, and controlled-area access.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Transaction Verification</h3>
                <p className="text-muted-foreground">
                  Pair transactions to the right person and device with ultrasonic confirmation,
                  strengthening payment flows and reducing disputes or misuse.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Proximity Marketing</h3>
                <p className="text-muted-foreground">
                  Trigger tailored offers, content, and loyalty journeys based on where customers
                  actually are — not just where they clicked.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Micro Use Cases Grid */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-4">
              What Becomes Possible Once Proximity Is Known?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SwaraWave Ultrasonic SDK is engineered to plug proximity awareness into real business
              workflows — from access control and payments to media, loyalty, and AI-driven insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              "Access Control & BOPIS – support in-store pick-up flows",
              "Accessibility On or Offline – deliver services without data coverage",
              "AI Business Intelligence – feed proximity events into analytics & AI models",
              "Contactless Payments – enable tap-free, sound-based payment flows",
              "Contactless Ticketing – BIBO and gate access without physical contact",
              "Dynamic Ad Serving – power retail media and in-venue content in real time",
              "Dynamic Pricing – adjust fares or pricing based on live conditions",
              "Entry Verification – confirm who is entering a space before granting access",
              "Fraud Detection & Prevention – flag and prevent out-of-pattern behaviors",
              "Loyalty & Rewards – trigger tailored rewards at the moment of interaction",
              "Personalized Experiences – shape journeys around context and presence",
              "Real-Time Presence Detection – know when users are nearby, instantly",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Micro Use Cases Image */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white/40 backdrop-blur">
              <img
                src="/sdk-use-cases-grid.jpg" // collage image
                alt="Visual montage of SwaraWave use cases across finance, retail, and mobility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Key Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Encrypted Ultrasonic Signaling
                </h3>
                <p className="text-muted-foreground">
                  Protect proximity data with strong encryption and key-based access controls so
                  signals remain authenticated and tamper-resistant.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Universal Device Compatibility
                </h3>
                <p className="text-muted-foreground">
                  Run on any device equipped with a speaker or microphone — from mobile apps and POS
                  systems to kiosks, IoT hardware, and embedded devices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Offline & Network-Independent
                </h3>
                <p className="text-muted-foreground">
                  Support proximity interactions without WiFi, mobile data, NFC, Bluetooth pairing,
                  or QR codes — ideal for low-connectivity or high-traffic environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Stable in Noisy Environments
                </h3>
                <p className="text-muted-foreground">
                  Signal profiles tuned for busy retail floors, transit hubs, and public venues so
                  experiences stay reliable even with ambient noise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Developer-Friendly Integration
                </h3>
                <p className="text-muted-foreground">
                  Lightweight, modular SDK with clean APIs and event callbacks for tone start, success,
                  failure, and presence — easy to embed into existing journeys.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Scalable Across Environments
                </h3>
                <p className="text-muted-foreground">
                  Built for high-volume interactions in finance, retail, mobility, and connected-device
                  ecosystems, with analytics-ready event streams.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 🔗 SDK Control Capabilities – Links to the 4 detail pages */}
      <section className="py-20 border-t border-slate-100">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#4A5AFF] mb-3">
              SDK Capabilities Suite
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-4">
              Control Every Layer of Proximity Intelligence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dive deeper into how SwaraWave manages fraud, transactions, user experience, and data
              so you can design end-to-end proximity journeys with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Fraud Control */}
            <Link href="/products/capabilities/fraud-control" className="group block">
              <Card className="h-full border-0 shadow-lg transition-all group-hover:-translate-y-1 group-hover:shadow-xl">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-full bg-[#4A5AFF]/10 flex items-center justify-center mb-4">
                    <Lock className="w-5 h-5 text-[#4A5AFF]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D1C3F] mb-2">
                    Fraud Control
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    Detect anomalies, prevent spoofing, and keep proximity-driven journeys protected
                    with layered fraud controls.
                  </p>
                  <div className="flex items-center text-sm font-medium text-[#4A5AFF] group-hover:underline">
                    Explore Fraud Control
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Transaction Control */}
            <Link href="/products/capabilities/transaction-control" className="group block">
              <Card className="h-full border-0 shadow-lg transition-all group-hover:-translate-y-1 group-hover:shadow-xl">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-full bg-[#4A5AFF]/10 flex items-center justify-center mb-4">
                    <CreditCard className="w-5 h-5 text-[#4A5AFF]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D1C3F] mb-2">
                    Transaction Control
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    Tie each transaction to verified presence, identity, and device context to reduce
                    disputes and strengthen payment flows.
                  </p>
                  <div className="flex items-center text-sm font-medium text-[#4A5AFF] group-hover:underline">
                    Explore Transaction Control
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* UX Control */}
            <Link href="/products/capabilities/ux-control" className="group block">
              <Card className="h-full border-0 shadow-lg transition-all group-hover:-translate-y-1 group-hover:shadow-xl">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-full bg-[#4A5AFF]/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5 text-[#4A5AFF]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D1C3F] mb-2">
                    UX Control
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    Orchestrate flows, prompts, and interactions based on real-time proximity signals
                    for smoother, more contextual experiences.
                  </p>
                  <div className="flex items-center text-sm font-medium text-[#4A5AFF] group-hover:underline">
                    Explore UX Control
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Data Control */}
            <Link href="/products/capabilities/data-control" className="group block">
              <Card className="h-full border-0 shadow-lg transition-all group-hover:-translate-y-1 group-hover:shadow-xl">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-full bg-[#4A5AFF]/10 flex items-center justify-center mb-4">
                    <BarChart3 className="w-5 h-5 text-[#4A5AFF]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D1C3F] mb-2">
                    Data Control
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    Capture, route, and govern proximity event data responsibly — ready for analytics,
                    AI, and downstream systems.
                  </p>
                  <div className="flex items-center text-sm font-medium text-[#4A5AFF] group-hover:underline">
                    Explore Data Control
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Where It Can Be Deployed / Compatible Platforms */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#4A5AFF]">
                Compatible Platforms
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F]">
                Deploy SwaraWave Wherever You Need It
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SwaraWave Ultrasonic SDK is designed to fit into your existing stack, not replace it.
                Integrate across mobile apps, terminals, kiosks, and connected devices to unlock a
                consistent proximity layer everywhere your customers interact.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>
                  <span className="font-medium text-[#0D1C3F]">Mobile:</span> Android, iOS, and React Native
                  applications.
                </li>
                <li>
                  <span className="font-medium text-[#0D1C3F]">Desktop & Edge:</span> Windows, Linux, and popular
                  edge devices such as Raspberry Pi.
                </li>
                <li>
                  <span className="font-medium text-[#0D1C3F]">On-Prem & Terminals:</span> POS systems, kiosks, and
                  in-store or in-venue endpoints.
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4A5AFF]/25 via-[#8692FF]/20 to-transparent rounded-3xl blur-3xl opacity-80" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40 bg-white/40 backdrop-blur">
                <img
                  src="/sdk-platforms.jpg" // devices grid – phone, terminal, laptop, kiosk
                  alt="SwaraWave SDK running across mobile, desktop, and edge devices"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Developers Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              For Developers & Product Teams
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Clear APIs & Documentation
                  </h3>
                  <p className="text-muted-foreground">
                    Integrate quickly with well-structured SDKs, implementation guides, and example
                    flows covering identity, payments, and engagement scenarios.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Modular Implementation
                  </h3>
                  <p className="text-muted-foreground">
                    Use SwaraWave as a transmitter, receiver, or full transceiver. Select tone profiles
                    and roles that match your environment and UX goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Sandbox & Testing Support
                  </h3>
                  <p className="text-muted-foreground">
                    Experiment in sandbox environments, simulate signals, and validate proximity flows
                    before rolling out to production devices and locations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Enterprise-Grade Support
                  </h3>
                  <p className="text-muted-foreground">
                    Get help from SwaraWave experts with architecture guidance, best practices, and
                    ongoing support for large-scale deployments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Build Secure, Contactless Experiences With Sound
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            SwaraWave Ultrasonic SDK turns speakers and microphones into a trusted proximity intelligence
            layer — for identity validation, offline transactions, and contextual engagement across
            every touchpoint.
          </p>

          {/* Only button on page: Request a Demo → /contact */}
          <Button
            asChild
            size="lg"
            className="bg-white text-[#4A5AFF] hover:bg-gray-100"
          >
            <Link href="/contact">
              Request a Demo
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0D1C3F] text-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#4A5AFF] to-[#8692FF]" />
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