import Navigation from "@/components/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Car, MapPin, Clock, Shield } from "lucide-react"

export default function MobilitySolutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#4A5AFF] mb-2">
                  Mobility & Transport
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-[#0D1C3F]">
                  Enhance Passenger Boarding with Ultrasonic Proximity
                </h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              SwaraWave Ultrasonic SDK helps transit operators, mobility platforms, and ticketing ecosystems
              verify passengers and tickets through one communication channel — sound.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              As public transportation modernizes, SwaraWave provides a hardware-light, network-flexible layer
              for proximity verification, contactless ticketing, and real-time presence detection. Every
              boarding, transfer, and check-in becomes seamless, secure, and efficient.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
            >
              <Link href="/contact">
                Schedule a Mobility Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Macro Use Cases / Use Cases */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-4">
              Macro Use Cases for Ultrasonic Mobility
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SwaraWave brings data-over-sound into passenger vehicles and urban mobility systems — enabling
              proximity verification, transaction authentication, and context-aware engagement without relying
              on NFC, BLE beacons, or QR codes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Proximity / Boarding Verification */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Ticketless or Cardless Boarding
                </h3>
                <p className="text-muted-foreground mb-3">
                  Use ultrasonic proximity verification to let passengers board buses, trains, or shuttles
                  without tapping cards, scanning QR codes, or presenting paper tickets.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Faster boarding and shorter queues</li>
                  <li>• Hands-free access for passengers</li>
                  <li>• Real-time validation at doors and gates</li>
                </ul>
              </CardContent>
            </Card>

            {/* Proximity-Based Passenger Validation / Real-time presence */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Proximity-Based Passenger Validation
                </h3>
                <p className="text-muted-foreground mb-3">
                  Confirm who is actually on-board or inside a zone by matching ultrasonic signals between
                  passenger devices and readers or speakers.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Enhanced security and fraud prevention</li>
                  <li>• Accurate rider counts by zone or vehicle</li>
                  <li>• Less reliance on visual inspection</li>
                </ul>
              </CardContent>
            </Card>

            {/* Smart Gate / Zone Entry */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Smart Gate & Zone Entry
                </h3>
                <p className="text-muted-foreground mb-3">
                  Control entry into platforms, paid areas, VIP zones, or staff-only corridors using encrypted
                  ultrasonic tokens instead of cards or RFID tags.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Encrypted access validation</li>
                  <li>• Less dependency on proprietary hardware</li>
                  <li>• Works in low-connectivity environments</li>
                </ul>
              </CardContent>
            </Card>

            {/* Multi-Leg Trip Tracking / Transaction verification */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Multi-Leg Trip Tracking & Fare Validation
                </h3>
                <p className="text-muted-foreground mb-3">
                  Track journeys across multiple modes and legs using sound, then validate fares and
                  synchronize records when connectivity is available.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Offline-first validation with daily sync</li>
                  <li>• End-to-end journey reconstruction</li>
                  <li>• Accurate, auditable fare calculation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits – Comparing to Other Modalities in a SwaraWave Way */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-4">
              Why Ultrasonic for Transit?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SwaraWave operates anywhere there is a speaker and microphone — making it more flexible than
              NFC, BLE beacons, or QR codes, and ideal for mass transit at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Reduced queues & friction */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                  Reduced Queues & Operational Friction
                </h3>
                <p className="text-muted-foreground mb-4">
                  Replace slow scan-and-tap flows with automatic proximity-based validation to keep vehicles
                  moving and dwell times low.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Seamless boarding at doors and gates</li>
                  <li>• No camera aiming or QR alignment</li>
                  <li>• Faster throughput at peak times</li>
                </ul>
              </CardContent>
            </Card>

            {/* Less dependence on hardware */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                  Less Dependence on Specialized Hardware
                </h3>
                <p className="text-muted-foreground mb-4">
                  Use existing speakers, mics, and smart devices instead of rolling out new RFID, NFC, or
                  UWB infrastructure across your network.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Lower capex and rollout complexity</li>
                  <li>• Works with a broad range of devices</li>
                  <li>• Easier to pilot and scale city-wide</li>
                </ul>
              </CardContent>
            </Card>

            {/* Security & fraud */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                  Strong Security & Fraud Protection
                </h3>
                <p className="text-muted-foreground mb-4">
                  SwaraWave tones can be encrypted, time-bound, and tied to device fingerprints to prevent
                  ticket sharing or replay attacks.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Encrypted ultrasonic tokens</li>
                  <li>• Time-limited validation windows</li>
                  <li>• Device-level presence verification</li>
                </ul>
              </CardContent>
            </Card>

            {/* Accessibility & offline */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                  Accessible & Offline-Ready for All Riders
                </h3>
                <p className="text-muted-foreground mb-4">
                  Support riders in low-connectivity areas, or with limited ability to handle cards or
                  phones at gates, using hands-free proximity.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Works with intermittent connectivity</li>
                  <li>• Hands-free boarding options</li>
                  <li>• Inclusive experiences for all riders</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Examples */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Implementation Examples
            </h2>
            <div className="space-y-8">
              {/* Smart Bus Boarding */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Smart Bus Boarding System
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Passengers board buses without presenting tickets. SwaraWave verifies their presence,
                    validates fares, and records the journey using encrypted ultrasonic exchanges.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm font-mono text-gray-600 space-y-1">
                      <div>1. Passenger approaches bus door</div>
                      <div>2. Ultrasonic handshake initiated</div>
                      <div>3. Ticket or pass validated offline</div>
                      <div>4. Boarding authorized automatically</div>
                      <div>5. Journey events synced when online</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Multi-modal hub */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Multi-Modal Transit Hub
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Riders move across subway, rail, and bus networks while SwaraWave tracks zone entries,
                    transfers, and exits — enabling a single continuous fare.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm font-mono text-gray-600 space-y-1">
                      <div>1. Rider enters station – zone detected</div>
                      <div>2. Train boarding – fare state updated</div>
                      <div>3. Transfer to bus – presence confirmed</div>
                      <div>4. Exit at final stop – journey closed</div>
                      <div>5. Single multimodal fare calculated</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Impact Metrics
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#4A5AFF] mb-2">60%</div>
                  <p className="text-muted-foreground">Faster Boarding Times</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#8692FF] mb-2">40%</div>
                  <p className="text-muted-foreground">Reduction in Fare Evasion</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#4A5AFF] mb-2">85%</div>
                  <p className="text-muted-foreground">Passenger Satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Revolutionize Your Transit System
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Explore how SwaraWave can modernize your mobility operations, improve passenger flows, and reduce
            fraud — without overhauling your entire hardware stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#4A5AFF] hover:bg-gray-100"
            >
              <Link href="/contact">
                Talk to Our Mobility Team
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#4A5AFF]"
            >
              <Link href="/contact">
                Schedule a Free Discovery Call
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