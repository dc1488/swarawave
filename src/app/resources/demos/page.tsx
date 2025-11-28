import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, Smartphone, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-4">
              Product Demos
            </h1>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#4A5AFF] mb-4">
              Explore real-world experiences powered by SwaraWave
            </p>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              See how SwaraWave’s ultrasonic proximity technology powers secure, contactless experiences
              in drive-thrus, retail, mobility, and connected devices — all using speakers and microphones.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Highlight List */}
      <section className="pb-4 -mt-10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground">
            <p className="mb-2">
              Drive-Thru Experience · Interactive Ad Experience · Proximity Engagement In-Transit ·
              Grocery Store In-Aisle · Passing Secure Credentials
            </p>
          </div>
        </div>
      </section>

      {/* Drive-Thru & Interactive Ad Demos */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Drive-Thru Experience */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D1C3F] mb-3 text-center">
                  Drive-Thru Identification & Loyalty
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  SwaraWave enables contactless identification at range — ideal for drive-thru lanes where
                  shouting names and loyalty numbers leads to errors and friction. Customers broadcast a
                  secure ultrasonic tone from the app, and the drive-thru system instantly recognizes who
                  they are.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  Once identified, staff can greet customers by name and automatically apply loyalty points
                  and offers. Orders placed in-app can be paid using card-on-file and verified with sound,
                  turning the entire drive-thru into a hands-off, hardware-light flow.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  In a typical implementation, the SwaraWave SDK runs inside the consumer app and the
                  drive-thru kiosk. The phone broadcasts a short encrypted payload (like a customer ID),
                  the kiosk receives it through its microphone, and backend systems match the ID to the
                  customer profile and payment method.
                </p>
                <Button
                  asChild
                  className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white w-full"
                >
                  <Link href="/contact">
                    Watch Drive-Thru Demo
                    <Play className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Interactive Ad Experience */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D1C3F] mb-3 text-center">
                  Interactive Audio & Connected Screens
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  SwaraWave tones sit above the range of human hearing and can be embedded into TV, radio,
                  or streaming audio without affecting the listening experience. When an ad plays, the
                  viewer’s app listens for the ultrasonic tone and translates it into an action — such as
                  unlocking a reward or opening a deep link.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  This turns passive ads into two-way interactions. Brands can finally connect on the
                  “second screen,” attribute exposure to real devices, and reward viewers in real time
                  across broadcast, OTT, and live events.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  The same pattern works across TV, radio, online streams, and DOOH. Anywhere a speaker
                  can play sound, SwaraWave can quietly transmit data to nearby devices.
                </p>
                <Button
                  asChild
                  className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white w-full"
                >
                  <Link href="/contact">
                    Watch Interactive Ad Demo
                    <Play className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* In-Transit, In-Aisle, and Secure Credentials */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Real-World Proximity Engagement Scenarios
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Proximity Engagement In-Transit */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3 text-center">
                    Proximity Engagement In-Transit
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Use existing vehicle or station speakers to broadcast ultrasonic tones that identify
                    which riders are present and deliver real-time promotions, travel updates, or loyalty
                    rewards directly to their phones — even in crowded or noisy environments.
                  </p>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    SwaraWave helps operators understand who is on board, drive engagement during dwell
                    time, and issue location-specific coupons or offers.
                  </p>
                  <Button
                    asChild
                    className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
                  >
                    <Link href="/contact">
                      See In-Transit Demo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Grocery Store In-Aisle */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3 text-center">
                    Grocery Store In-Aisle
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Broadcast different SwaraWave tones in separate zones of a store to know exactly where
                    a shopper is — snacks aisle, dairy, beverages, and more. As customers move, their app
                    picks up the relevant tone and triggers promotions tied to that specific aisle or
                    display.
                  </p>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    Once a shopper is identified, retailers can unlock gamified quests, help with
                    wayfinding, and optimize in-store merchandising with real proximity data.
                  </p>
                  <Button
                    asChild
                    className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white"
                  >
                    <Link href="/contact">
                      See In-Store Demo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Passing Secure Credentials */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3 text-center">
                    Passing Secure Credentials
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    SwaraWave can securely pass credentials between a personal device and a shared device —
                    such as car infotainment systems, kiosks, classroom screens, or employee terminals —
                    without exposing passwords, QR codes, or visible tokens.
                  </p>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    Using protections like AES-256 encryption and ToneLock, only intended devices can
                    decode the payload, enabling flows like Wi-Fi pairing, driver recognition, or
                    clock-in/clock-out with a single ultrasonic handshake.
                  </p>
                  <Button
                    asChild
                    className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
                  >
                    <Link href="/contact">
                      See Credentials Demo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Developer Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    SDK Documentation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Browse API references, integration guides, and example flows for payments, ticketing,
                    loyalty, and access control.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white"
                  >
                    <Link href="/products/sdk">
                      View Documentation
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Sample Applications
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Download starter apps that show SwaraWave embedded in mobile, web, and device
                    ecosystems for rapid prototyping.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white"
                  >
                    <Link href="/products/sdk">
                      Download Samples
                    </Link>
                  </Button>
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
            Ready to Experience SwaraWave Live?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Schedule a personalized walkthrough of our drive-thru, retail, mobility, and secure
            credential demos with the SwaraWave team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#4A5AFF] hover:bg-gray-100"
            >
              <Link href="/contact">
                Schedule Live Demo
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#4A5AFF]"
            >
              <Link href="/products/sdk">
                Access SDK
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
            <p>© 2024 SwaraWave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}