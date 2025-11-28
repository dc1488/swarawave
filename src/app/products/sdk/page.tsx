"use client"

import Navigation from "@/components/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Smartphone, Zap, Settings, Code, Database } from "lucide-react"

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
                enabling verification, transactions, and engagement using encrypted audio signals across
                any device with a speaker or microphone.
              </p>
              <p className="text-sm text-muted-foreground">
                Trusted by enterprises powering the future of proximity intelligence.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative">
              {/* Soft gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4A5AFF]/40 via-[#8692FF]/30 to-transparent rounded-3xl blur-3xl opacity-80" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/30 bg-white/40 backdrop-blur">
                <img
                  src="/sdk-hero-swarawave.jpg" // put your landscape image file here
                  alt="Visualization of SwaraWave Ultrasonic SDK in real-world environments"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-[#F7F9FC]">
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
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Encrypted Ultrasonic Signaling</h3>
                <p className="text-muted-foreground">
                  Use AES-grade encryption and access controls to keep proximity data authenticated, tamper-resistant,
                  and secure by design.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Universal Device Compatibility</h3>
                <p className="text-muted-foreground">
                  Run on any device with a speaker or microphone — from mobile and POS to kiosks, IoT, and embedded systems,
                  without extra hardware.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Offline & Network-Independent</h3>
                <p className="text-muted-foreground">
                  Enable proximity interactions without WiFi, mobile data, NFC, Bluetooth pairing, or QR codes —
                  ideal for low-connectivity environments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Stable in Noisy Environments</h3>
                <p className="text-muted-foreground">
                  Optimized signal profiles for retail, transit hubs, and busy public spaces ensure consistent performance
                  even with background noise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Developer-Friendly Integration</h3>
                <p className="text-muted-foreground">
                  Lightweight, modular SDK with clear APIs and event callbacks for tone start, success, failure, and
                  presence — easy to plug into existing flows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Scalable Across Environments</h3>
                <p className="text-muted-foreground">
                  Designed for high-volume interactions in finance, retail, mobility, and connected-device ecosystems,
                  with analytics-ready event data.
                </p>
              </CardContent>
            </Card>
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
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Clear APIs & Documentation</h3>
                  <p className="text-muted-foreground">
                    Integrate quickly with well-structured SDKs, implementation guides, and sample flows covering
                    common identity, payment, and engagement scenarios.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Modular Implementation</h3>
                  <p className="text-muted-foreground">
                    Choose only what you need: transmitter, receiver, or full transceiver roles, with flexible tone
                    profiles for your environment and UX.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Sandbox & Testing Support</h3>
                  <p className="text-muted-foreground">
                    Experiment in controlled environments, simulate signals, and validate proximity flows before
                    rolling out to production devices.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Enterprise-Grade Support</h3>
                  <p className="text-muted-foreground">
                    SwaraWave provides dedicated technical support, architecture guidance, and best practices for
                    high-volume deployments.
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
            Let&apos;s unlock the future of proximity intelligence for your business with SwaraWave Ultrasonic SDK —
            from identity validation and offline transactions to contextual engagement across every touchpoint.
          </p>

          {/* ✅ Only button on page: Request a Demo → /contact */}
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
                <li>Retail & FMCG</li>
                <li>Mobility & Transport</li>
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