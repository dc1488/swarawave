import Navigation from "@/components/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ShoppingCart, Target, Users, Gift } from "lucide-react"

export default function RetailSolutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F]">
                Retail &amp; FMCG
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Drive seamless shopping journeys and boost engagement by connecting every stage
              of the in-store experience through one proximity layer — sound.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              SwaraWave Ultrasonic SDK transforms how retailers identify, engage, and serve
              shoppers before, during, and after checkout. Combined with the SwaraWave
              Engagement Platform, brands can unlock gamified, personalized experiences that
              increase basket size, conversion, and long-term loyalty.
            </p>
          </div>
        </div>
      </section>

      {/* Radius + Quest → SwaraWave Retail Proximity Solution */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-4">
              SwaraWave Retail Proximity Engagement Solution
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              SwaraWave establishes a direct ultrasonic communication channel between your
              in-store speakers and shoppers’ devices. By detecting real-time proximity,
              retailers can enable frictionless presence detection, personalized promotions,
              mobile checkout, and unified loyalty.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With the SwaraWave Engagement Platform, stores can design gamified quests,
              rewards, and offers that live inside the retailer&apos;s own ecosystem — no
              extra hardware, beacons, or NFC required.
            </p>
          </div>
        </div>
      </section>

      {/* Macro Use Cases / Use Cases */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Macro Use Cases for Retail Proximity
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Proximity Verification */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Proximity Verification at Entry
                </h3>
                <p className="text-muted-foreground">
                  Identify and greet customers the moment they enter your store to trigger
                  tailored experiences — from welcome offers and loyalty perks to staff
                  alerts for VIP service and streamlined BOPIS pick-ups.
                </p>
              </CardContent>
            </Card>

            {/* Authentication */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Secure Shopper &amp; Associate Authentication
                </h3>
                <p className="text-muted-foreground">
                  Confirm shopper or staff presence for BOPIS, locker pick-ups, returns, and
                  staff-only workflows — without barcodes, QR codes, or network dependency.
                  Protect high-value transactions while reducing friction at the counter.
                </p>
              </CardContent>
            </Card>

            {/* Mobile Checkout */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Mobile Checkout &amp; Coupon Automation
                </h3>
                <p className="text-muted-foreground">
                  Let customers collect offers as they shop, then automatically apply all
                  qualified promotions at checkout. Ensure secure, real-time validation of
                  payments and loyalty, even mid-aisle or with limited connectivity.
                </p>
              </CardContent>
            </Card>

            {/* Proximity Marketing */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                  Proximity Marketing &amp; Gamified Loyalty
                </h3>
                <p className="text-muted-foreground">
                  Deliver context-aware promotions and gamified rewards at entry, in aisle,
                  or in key departments. Run scavenger hunts, challenge-based campaigns, and
                  targeted boosts — powered by ultrasonic detection instead of beacons.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Benefits for Retail &amp; FMCG Leaders
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Increased Revenue */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                  Increased Revenue per Visit
                </h3>
                <p className="text-muted-foreground mb-4">
                  Turn proximity moments into revenue by authenticating presence while
                  delivering relevant offers, receipts, and post-purchase actions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Higher conversion from in-aisle offers</li>
                  <li>• Larger basket size from contextual upsell</li>
                  <li>• Stronger impact from loyalty campaigns</li>
                </ul>
              </CardContent>
            </Card>

            {/* Up-to-date analytics / Attribution */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                  Better In-Store Analytics &amp; Attribution
                </h3>
                <p className="text-muted-foreground mb-4">
                  Understand how shoppers move, dwell, and convert across zones to optimize
                  layouts, merchandising, and campaigns.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Zone-level and aisle-level analytics</li>
                  <li>• Dwell time and path analysis</li>
                  <li>• Offer and campaign performance tracking</li>
                </ul>
              </CardContent>
            </Card>

            {/* Gamified loyalty / Repeat visits */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                  Gamified Loyalty &amp; Repeat Visits
                </h3>
                <p className="text-muted-foreground mb-4">
                  Use the SwaraWave Engagement Platform to reward visits, actions, and
                  specific department interactions — not just transactions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Unified customer profiles across online &amp; offline</li>
                  <li>• Quest-style challenges and rewards</li>
                  <li>• Incentives for the most impactful behaviors</li>
                </ul>
              </CardContent>
            </Card>

            {/* Offline & lower infra cost */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                  Offline-Ready &amp; Lower Infrastructure Costs
                </h3>
                <p className="text-muted-foreground mb-4">
                  Run engagement and transactions with limited connectivity (data sync as
                  needed) while avoiding beacon or NFC roll-outs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Uses existing speakers and microphones</li>
                  <li>• Works in high-traffic or low-signal environments</li>
                  <li>• No extra hardware or maintenance burden</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Examples */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Implementation Examples
            </h2>
            <div className="space-y-8">
              {/* Smart Supermarket */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Smart Supermarket Journey
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Connect entry, aisle engagement, and checkout into a single, ultrasonic-
                    powered journey that feels personal and effortless.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm font-mono text-gray-600 space-y-1">
                      <div>1. Customer enters store – welcome message &amp; entry perk</div>
                      <div>2. Produce aisle – healthy bundle recommendations</div>
                      <div>3. Dairy aisle – complementary product discounts</div>
                      <div>4. Checkout – automatic coupon &amp; loyalty application</div>
                      <div>5. Post-purchase – instant reward &amp; visit recap</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fashion Retail */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Fashion Retail Personalization
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Use proximity to power styling assistance, fitting-room experiences, and
                    targeted incentives without installing new hardware.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm font-mono text-gray-600 space-y-1">
                      <div>1. Customer approaches display – style theme detected</div>
                      <div>2. Similar looks &amp; accessories suggested in-app</div>
                      <div>3. Fitting room proximity triggers size &amp; stock alerts</div>
                      <div>4. At checkout – personalized discount or bundle offer</div>
                      <div>5. Loyalty – points and challenges updated instantly</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Measuring Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#8692FF] mb-2">34%</div>
                  <p className="text-muted-foreground">
                    Lift in Conversion from Proximity Offers
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#4A5AFF] mb-2">67%</div>
                  <p className="text-muted-foreground">
                    Higher Engagement in Gamified Journeys
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#8692FF] mb-2">45%</div>
                  <p className="text-muted-foreground">
                    Reduction in Hardware &amp; Infra Costs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section → Contact */}
      <section className="py-20 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Transform Your Retail Experience with SwaraWave
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Ready to connect entry, aisle, and checkout with ultrasonic proximity? Talk to
            the SwaraWave team about pilots, integrations, and retail use cases tailored to
            your environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* All relevant CTAs → /contact */}
            <Button
              asChild
              size="lg"
              className="bg-white text-[#8692FF] hover:bg-gray-100"
            >
              <Link href="/contact">
                Schedule Retail Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#8692FF]"
            >
              <Link href="/contact">
                Request Retail Case Study
                <ArrowRight className="ml-2 w-4 h-4" />
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