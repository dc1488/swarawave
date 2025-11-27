import Navigation from "@/components/navigation"
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-8">
              SDK Capabilities
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Comprehensive features that enable secure, scalable proximity experiences across industries and use cases.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            
            {/* Transaction Controls */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#0D1C3F] mb-6">
                  Transaction Controls
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Define how transactions initiate, validate, and complete across offline and real-time flows using sound-based triggers and rules-based logic.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Proximity-based transaction initiation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Multi-step transaction orchestration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Offline transaction queuing and sync</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Custom transaction rules and workflows</span>
                  </li>
                </ul>
                <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-[#F7F9FC] to-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  <div className="h-4 bg-[#4A5AFF]/20 rounded-full w-3/4"></div>
                  <div className="h-4 bg-[#8692FF]/20 rounded-full w-1/2"></div>
                  <div className="h-4 bg-[#4A5AFF]/20 rounded-full w-2/3"></div>
                  <div className="h-4 bg-[#8692FF]/20 rounded-full w-1/3"></div>
                  <div className="h-4 bg-[#4A5AFF]/20 rounded-full w-3/4"></div>
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
                <h2 className="text-3xl font-bold text-[#0D1C3F] mb-6">
                  Fraud Protection
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Reduce spoofing and misuse with encrypted tokens, time-bound signals, device validation, and multi-layer authentication mechanisms.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Encrypted ultrasonic tokenization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Time-bound signal validation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Device fingerprinting and validation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Multi-layer authentication protocols</span>
                  </li>
                </ul>
                <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Experience (UX) Orchestration */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#0D1C3F] mb-6">
                  Experience (UX) Orchestration
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Design presence-based user journeys such as check-ins, verifications, loyalty activations, and cross-zone engagement, all orchestrated through configurable logic.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Proximity-triggered user journeys</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Cross-zone experience design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Configurable UX rules and logic</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Real-time experience adaptation</span>
                  </li>
                </ul>
                <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-[#F7F9FC] to-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#4A5AFF]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#4A5AFF] rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-[#8692FF]/20 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#8692FF]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#8692FF] rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-[#4A5AFF]/20 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#4A5AFF]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#4A5AFF] rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-[#8692FF]/20 rounded-full w-1/2"></div>
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
                      <div className="h-full bg-[#4A5AFF] rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Activation Points</span>
                      <span className="text-sm font-bold text-[#8692FF]">847K</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#8692FF] rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Conversion Rate</span>
                      <span className="text-sm font-bold text-[#4A5AFF]">34%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4A5AFF] rounded-full" style={{width: '34%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#0D1C3F] mb-6">
                  Data & Analytics Control
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Gain granular insights into presence events, activation points, visit frequency, and experience performance, while preserving customer privacy and device anonymity.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Real-time presence analytics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Experience performance metrics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Privacy-preserving data collection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Custom reporting and dashboards</span>
                  </li>
                </ul>
                <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-8">
            Explore All SDK Capabilities
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover how SwaraWave's comprehensive SDK capabilities can transform your proximity experiences and drive business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
              View Technical Documentation
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