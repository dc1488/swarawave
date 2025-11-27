import Navigation from "@/components/navigation"
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
                Retail & FMCG
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              SwaraWave transforms physical retail into a measurable and interactive environment with aisle-based engagement, personalized offers, and loyalty activation.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Aisle-Level Promotions</h3>
                <p className="text-muted-foreground">
                  Trigger targeted promotions and offers when customers spend time in specific aisles or near particular product displays.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Personalized Offers at Shelf or Display Locations</h3>
                <p className="text-muted-foreground">
                  Deliver contextually relevant discounts and recommendations based on customer proximity to products and displays.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Loyalty Enrollment and Activation at Checkout</h3>
                <p className="text-muted-foreground">
                  Automatically enroll customers in loyalty programs and activate rewards during checkout proximity interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Offline Coupon and Voucher Redemption</h3>
                <p className="text-muted-foreground">
                  Enable secure coupon redemption without network connectivity, perfect for high-traffic retail environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Increased Conversion Rates</h3>
                <p className="text-muted-foreground mb-4">
                  Drive higher purchase rates through timely, contextually relevant offers triggered by customer proximity and behavior.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time offer delivery</li>
                  <li>• Behavioral targeting</li>
                  <li>• Cross-selling opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Better Attribution of Store Activity</h3>
                <p className="text-muted-foreground mb-4">
                  Track customer journeys through physical spaces and attribute conversions to specific in-store interactions and zones.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Zone-level analytics</li>
                  <li>• Dwell time tracking</li>
                  <li>• Path analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Stronger Loyalty and Repeat Visits</h3>
                <p className="text-muted-foreground mb-4">
                  Build deeper customer relationships through personalized experiences and rewards that recognize and value customer presence.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automatic loyalty recognition</li>
                  <li>• Personalized rewards</li>
                  <li>• Seamless experience</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Reduced Operational Costs</h3>
                <p className="text-muted-foreground mb-4">
                  Eliminate expensive beacon infrastructure and reduce manual intervention through automated proximity experiences.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• No hardware deployment</li>
                  <li>• Automated experiences</li>
                  <li>• Lower maintenance costs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Implementation Examples
            </h2>
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Smart Supermarket Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    Customers receive personalized offers and recommendations as they move through different store sections, with seamless checkout integration.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm font-mono text-gray-600">
                      <div>1. Customer enters store - welcome message</div>
                      <div>2. Produce section - healthy recipe suggestions</div>
                      <div>3. Dairy aisle - complementary product offers</div>
                      <div>4. Checkout - automatic coupon application</div>
                      <div>5. Loyalty points - instant reward notification</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Fashion Retail Personalization</h3>
                  <p className="text-muted-foreground mb-4">
                    Shoppers receive style recommendations and size availability alerts based on their proximity to displays and fitting rooms.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm font-mono text-gray-600">
                      <div>1. Customer approaches display</div>
                      <div>2. Style preferences detected</div>
                      <div>3. Matching items suggested</div>
                      <div>4. Fitting room availability checked</div>
                      <div>5. Personalized discount offered</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Success Metrics
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#8692FF] mb-2">34%</div>
                  <p className="text-muted-foreground">Increase in Conversion Rate</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#4A5AFF] mb-2">67%</div>
                  <p className="text-muted-foreground">Higher Customer Engagement</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#8692FF] mb-2">45%</div>
                  <p className="text-muted-foreground">Reduction in Infrastructure Costs</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Transform Your Retail Experience
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover how SwaraWave can enhance customer engagement, drive sales, and create memorable shopping experiences in your retail environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#8692FF] hover:bg-gray-100">
              Schedule Retail Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#8692FF]">
              Download Retail Case Study
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