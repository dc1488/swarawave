import Navigation from "@/components/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Zap, Settings, Database } from "lucide-react"

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-6">
                Unlock True Loyalty
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                SwaraWave’s engagement and proximity platform transforms every visit, tap, and interaction 
                into a meaningful moment — helping you build loyalty, not just run a points program.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Create gamified, personalized journeys that reward the behaviors that matter most for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* Request a Demo → contact */}
                <Button
                  asChild
                  size="lg"
                  className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
                >
                  <Link href="/contact">
                    Schedule a Free Demo
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4A5AFF]/35 via-[#8692FF]/25 to-transparent rounded-3xl blur-3xl opacity-80" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/30 bg-white/40 backdrop-blur">
                <img
                  src="/quest-hero-swarawave.jpg" // hero: shopper seeing a loyalty notification / app
                  alt="Customer receiving a SwaraWave-powered loyalty notification in store"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Loyalty Beyond Discounts */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-4">
              Drive Revenue Through Loyalty, Not Discounts
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Customers today expect more than generic reward tiers. They want to be seen, recognized, 
              and rewarded for the actions that matter — across channels and touchpoints.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              SwaraWave ingests behavioral and proximity signals so you can encourage high-value actions, 
              unlock new revenue streams, and strengthen long-term relationships — without eroding your brand 
              with constant price cuts.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-10">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40 bg-white/40 backdrop-blur">
              <img
                src="/quest-loyalty-store.jpg" // image: shopper in store, phone showing points/offer
                alt="Shopper engaging with SwaraWave-powered loyalty experience at the shelf"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits & Controls (Mapped to SDK Capabilities pages) */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-4">
              Key Benefits & Experience Controls
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Personalization at scale requires real-time control over engagement, transactions, journeys, 
              and data. SwaraWave’s capabilities give you those levers, powered by proximity and behavioral signals.
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {/* Transaction Controls */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#0D1C3F] mb-4">
                  Transaction Controls
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Track and influence the full purchase journey — not just the final payment. Configure how 
                  events, intents, and transactions are captured, validated, and tied to loyalty outcomes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Capture purchase and non-purchase events as part of a unified customer journey.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Link transactions to loyalty rewards, quests, or achievements in real time.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Support both on-prem and virtual events with the same control layer.
                    </span>
                  </li>
                </ul>
                {/* 🔗 Link to transaction-control page */}
                <Button
                  asChild
                  className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
                >
                  <Link href="/products/capabilities/transaction-control">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-[#F7F9FC] to-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  <div className="h-4 bg-[#4A5AFF]/20 rounded-full w-3/4" />
                  <div className="h-4 bg-[#8692FF]/20 rounded-full w-1/2" />
                  <div className="h-4 bg-[#4A5AFF]/20 rounded-full w-2/3" />
                  <div className="h-4 bg-[#8692FF]/20 rounded-full w-1/3" />
                  <div className="h-4 bg-[#4A5AFF]/20 rounded-full w-3/4" />
                </div>
              </div>
            </div>

            {/* Fraud Protection */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-[#F7F9FC] to-white p-8 rounded-2xl shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-[#4A5AFF]/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-8 h-8 text-[#4A5AFF]" />
                    </div>
                    <div className="h-20 bg-[#8692FF]/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-8 h-8 text-[#8692FF]" />
                    </div>
                    <div className="h-20 bg-[#4A5AFF]/20 rounded-lg flex items-center justify-center">
                      <Settings className="w-8 h-8 text-[#4A5AFF]" />
                    </div>
                    <div className="h-20 bg-[#8692FF]/20 rounded-lg flex items-center justify-center">
                      <Database className="w-8 h-8 text-[#8692FF]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#0D1C3F] mb-4">
                  Fraud Protection
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Protect your loyalty budget and offers from abuse. Use proximity, device signals, and 
                  time-bound logic to ensure rewards go to real customers, in real places, at the right time.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Encrypted ultrasonic tokens for secure recognition.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Time- and location-aware validation of events.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Device fingerprinting to reduce fake or repeated claims.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Multi-layer defenses across engagement and payments.</span>
                  </li>
                </ul>
                {/* 🔗 Link to fraud-control page */}
                <Button
                  asChild
                  className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white"
                >
                  <Link href="/products/capabilities/fraud-control">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* UX / Journey Control */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#0D1C3F] mb-4">
                  UX / Journey Control
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Use SwaraWave’s APIs to bring loyalty and quests directly into your own app or interface, 
                  controlling how each step appears, feels, and responds to proximity and behavior.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Design gamified challenges, streaks, and achievements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Trigger experiences automatically at entry, shelf, or checkout.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Keep full control of your front-end while SwaraWave powers logic.</span>
                  </li>
                </ul>
                {/* 🔗 Link to ux-control page */}
                <Button
                  asChild
                  className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
                >
                  <Link href="/products/capabilities/ux-control">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-[#F7F9FC] to-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#4A5AFF]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#4A5AFF] rounded-full" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-[#8692FF]/20 rounded-full w-full" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#8692FF]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#8692FF] rounded-full" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-[#4A5AFF]/20 rounded-full w-3/4" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#4A5AFF]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#4A5AFF] rounded-full" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-[#8692FF]/20 rounded-full w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data & Analytics Control */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-[#F7F9FC] to-white p-8 rounded-2xl shadow-lg">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Presence Events</span>
                      <span className="text-sm font-bold text-[#4A5AFF]">2.3M</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4A5AFF] rounded-full" style={{ width: "75%" }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Activation Points</span>
                      <span className="text-sm font-bold text-[#8692FF]">847K</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#8692FF] rounded-full" style={{ width: "60%" }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Conversion Rate</span>
                      <span className="text-sm font-bold text-[#4A5AFF]">34%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4A5AFF] rounded-full" style={{ width: "34%" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#0D1C3F] mb-4">
                  Data & Analytics Control
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Unite behavioral, transactional, and proximity data into a single view of the customer. 
                  Feed this into your BI and AI models to power smarter recommendations and campaigns.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Real-time visibility into engagement and visit frequency.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Measure performance of quests, offers, and experiences.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Privacy-first design with pseudonymous identifiers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Structured data exports and custom dashboard hooks.</span>
                  </li>
                </ul>
                {/* 🔗 Link to data-control page */}
                <Button
                  asChild
                  className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white"
                >
                  <Link href="/products/capabilities/data-control">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Macro Use Cases – Proximity Engagement */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-4">
              Macro Use Cases for Proximity Engagement
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Combine SwaraWave’s engagement platform with ultrasonic SDK capabilities to activate 
              customers at the most important moments in their journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#0D1C3F] mb-3">
                  Proximity Verification
                </h3>
                <p className="text-muted-foreground">
                  Recognize and welcome customers when they arrive — at the store entrance, gate, or 
                  venue — not just at the moment of payment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#0D1C3F] mb-3">
                  Proximity Marketing
                </h3>
                <p className="text-muted-foreground">
                  Deliver offers, quests, and content when decisions are made — at shelf, queue, or 
                  seating — turning intent into action.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Micro Use Cases */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-4">
              Micro Use Cases Once the Customer Is Identified
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When SwaraWave knows who is present, where they are, and what they are doing, 
              you can move from simple “points per purchase” into rich, dynamic engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              "Access Control & BOPIS – pick up orders and update loyalty in one flow",
              "AI Business Intelligence – feed data into AI/ML models for personalization",
              "Contactless Payments – apply rewards and offers as part of the payment step",
              "Dynamic Ad Serving – power targeted in-store and in-app media dynamically",
              "Personalized Experiences – adapt views, offers, and quests per profile",
              "Structured Data – unify behavior across the entire customer journey",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white/40 backdrop-blur">
              <img
                src="/quest-use-cases-grid.jpg" // collage: stadium, store, transit, mobile app
                alt="SwaraWave engagement use cases across retail, mobility, events, and fintech"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty Management Portal */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F]">
                SwaraWave Loyalty Management Portal
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Launch and update gamified programs in minutes. The SwaraWave portal lets your teams build 
                quests, achievements, tiers, and rewards — without heavy engineering effort.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                For deeper integration, the SwaraWave API exposes the same capabilities as a RESTful interface, 
                so you can embed quests, progress tracking, and rewards directly into your own consumer apps and experiences.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Create and manage campaigns, quests, and missions.</li>
                <li>Configure reward logic tied to spend, visits, and proximity events.</li>
                <li>Monitor performance and tweak experiences in near real time.</li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4A5AFF]/25 via-[#8692FF]/20 to-transparent rounded-3xl blur-3xl opacity-80" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40 bg-white/40 backdrop-blur">
                <img
                  src="/quest-portal-dashboard.jpg" // dashboard: quests, charts, customer segments
                  alt="SwaraWave Loyalty Management Portal showing quests, rewards, and analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-6">
            Personalized, Gamified Consumer Engagement
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Leverage unified customer records, proximity intelligence, and gamified experiences to 
            grow repeat business and unlock new revenue — without racing to the bottom on discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Request a Demo → contact */}
            <Button
              asChild
              size="lg"
              className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
            >
              <Link href="/contact">
                Request a Demo
              </Link>
            </Button>

            {/* Secondary CTA – could link to SDK / platform docs */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white"
            >
              <Link href="/products/platform">
                Explore Platform Overview
              </Link>
            </Button>
          </div>
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