import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Users, Target, BarChart, Settings, Gift } from "lucide-react"

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-8">
              SwaraWave Engagement Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              The SwaraWave Engagement Platform is a no-code control center for designing, launching, and analyzing proximity-driven experiences.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Reward Activation</h3>
                <p className="text-muted-foreground">
                  Trigger personalized rewards and loyalty benefits based on customer presence and behavior patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Targeted Offers</h3>
                <p className="text-muted-foreground">
                  Deliver contextually relevant promotions at specific aisles, zones, or display locations within physical spaces.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Loyalty Campaigns</h3>
                <p className="text-muted-foreground">
                  Launch proximity-triggered loyalty programs that activate based on store visits, check-ins, and repeat engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Table-Based Experiences</h3>
                <p className="text-muted-foreground">
                  Enable seamless F&B experiences with table detection, ordering triggers, and service activation based on guest presence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Commuter Engagement</h3>
                <p className="text-muted-foreground">
                  Drive passenger engagement in mobility networks through proximity-based check-ins, journey tracking, and service notifications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Event Analytics</h3>
                <p className="text-muted-foreground">
                  Track and analyze foot traffic patterns, dwell times, and engagement metrics across physical venues and events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Visual Journey Builder</h3>
                <p className="text-muted-foreground mb-4">
                  Design complex proximity experiences with an intuitive drag-and-drop interface that maps user journeys and interaction flows.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Drag-and-drop workflow designer</li>
                  <li>• Pre-built proximity templates</li>
                  <li>• Real-time journey preview</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Audience Segmentation</h3>
                <p className="text-muted-foreground mb-4">
                  Create dynamic audience segments based on proximity behavior, visit patterns, and engagement history.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Behavioral segmentation</li>
                  <li>• Location-based targeting</li>
                  <li>• Real-time audience updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Reward & Incentive Logic</h3>
                <p className="text-muted-foreground mb-4">
                  Configure sophisticated reward systems with proximity triggers, gamification elements, and tiered incentives.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Proximity-based rewards</li>
                  <li>• Multi-tier loyalty programs</li>
                  <li>• Real-time reward validation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Event-Based Campaign Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Automate campaign execution based on proximity events, customer behavior, and environmental triggers.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Trigger-based automation</li>
                  <li>• Multi-channel campaign execution</li>
                  <li>• A/B testing capabilities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0D1C3F] mb-6">
                  Real-Time Dashboards & Reporting
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Monitor campaign performance, track engagement metrics, and optimize proximity experiences with comprehensive analytics.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Live proximity event monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Campaign performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Customer behavior insights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Custom report builder</span>
                  </li>
                </ul>
                <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                  Explore Analytics
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Active Campaigns</span>
                    <span className="text-2xl font-bold text-[#4A5AFF]">24</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F7F9FC] p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#0D1C3F">156K</div>
                      <div className="text-sm text-gray-600">Total Engagements</div>
                    </div>
                    <div className="bg-[#F7F9FC] p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#8692FF]">89%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Retail Campaigns</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4A5AFF] rounded-full" style={{width: '78%'}}></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Mobility Solutions</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#8692FF] rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Transform Your Customer Engagement
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get started with the SwaraWave Engagement Platform and create seamless, proximity-driven experiences that delight your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              Request Platform Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              View Use Cases
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