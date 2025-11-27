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
                The Audio Layer for Secure, Contactless Proximity Intelligence
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                SwaraWave enables ultrasonic-based presence detection, identity verification, engagement, and transaction orchestration — delivered through a lightweight SDK built for real-world environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                
                {/* Request a Demo → /contact */}
                <Button asChild size="lg" className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white animate-scale-in">
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
                Works across finance, retail, FMCG, mobility, and more.
              </p>
            </div>

            {/* Hero Animation */}
            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="relative bg-gradient-to-br from-[#F7F9FC] to-white p-8 rounded-2xl shadow-xl animate-float">
                <div className="space-y-4">
                  <div className="flex justify-center space-x-2">
                    <div className="h-2 w-2 bg-[#4A5AFF] rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-[#8692FF] rounded-full animate-pulse delay-75"></div>
                    <div className="h-2 w-2 bg-[#4A5AFF] rounded-full animate-pulse delay-150"></div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-[#4A5AFF]/20 to-[#8692FF]/20 rounded-lg flex items-center justify-center">
                    <div className="text-2xl font-bold text-[#0D1C3F]">Sound Waves</div>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="h-2 w-2 bg-[#8692FF] rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-[#4A5AFF] rounded-full animate-pulse delay-75"></div>
                    <div className="h-2 w-2 bg-[#8692FF] rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="container px-4">
          <p className="text-center text-lg font-medium text-muted-foreground mb-8">
            Powering seamless proximity experiences across finance, retail, FMCG, transportation, and digital platforms.
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

      {/* Value Props */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-up">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Secure Proximity Detection
                </h3>
                <p className="text-muted-foreground">
                  Instant presence recognition using encrypted ultrasonic signaling.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-up delay-150">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Device-Agnostic Identity
                </h3>
                <p className="text-muted-foreground">
                  Authenticate users without Bluetooth, NFC, QR, or hardware beacons.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-up delay-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Frictionless Engagement
                </h3>
                <p className="text-muted-foreground">
                  Trigger personalized experiences, promotions, and loyalty rewards based on real-world movement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-up delay-500">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Enterprise-Grade Controls
                </h3>
                <p className="text-muted-foreground">
                  Full-stack transaction logic, UX orchestration, fraud prevention, and data governance.
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
              What SwaraWave Enables
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              SwaraWave's ultrasonic infrastructure powers fully offline-ready identity and proximity logic that works across any device equipped with a speaker or microphone.
            </p>

            {/* Learn More → /products */}
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
                  Offline authentication, wallet verification, and secure proximity-driven transactions.
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
                  Retail & FMCG
                </h3>
                <p className="text-muted-foreground mb-6">
                  Aisle-based engagement, in-store promotions, and loyalty activation at checkout.
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
                  Mobility & Transport
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ticketless boarding, passenger verification, and proximity-based check-ins.
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

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Build Secure, Seamless Proximity Experiences With Sound
          </h2>

          {/* Get Started → /contact */}
          <Button asChild size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
            <Link href="/contact">Get Started With SwaraWave</Link>
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
