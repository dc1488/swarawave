import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, Smartphone, Shield, Zap } from "lucide-react"

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-8">
              Product Demos
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Explore sample flows showing how SwaraWave works in real environments. Experience the power of ultrasonic proximity technology.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Categories */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D1C3F] mb-4">
                    Presence Detection Demo
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Experience how SwaraWave detects device proximity using encrypted ultrasonic signals. See real-time presence recognition work across different environments and distances.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Real-time proximity detection</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Distance measurement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Multi-device scenarios</span>
                    </li>
                  </ul>
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white w-full">
                    Try Live Demo
                    <Play className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D1C3F] mb-4">
                    Identity Verification Demo
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    See secure user authentication and device verification through encrypted ultrasonic token exchange. Experience enterprise-grade security without additional hardware.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Encrypted token exchange</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Device fingerprinting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Multi-factor authentication</span>
                    </li>
                  </ul>
                  <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white w-full">
                    Try Live Demo
                    <Shield className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demos */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Interactive Demo Scenarios
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    Payment Tokenization Demo
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Secure payment token generation and validation using ultrasonic proximity for contactless transactions.
                  </p>
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                    Launch Demo
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    Retail In-Store Demo
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Experience aisle-based engagement and personalized offers triggered by customer proximity in retail environments.
                  </p>
                  <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white">
                    Launch Demo
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    Transit Boarding Demo
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Ticketless boarding and passenger validation for public transportation using ultrasonic proximity detection.
                  </p>
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                    Launch Demo
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
                    Comprehensive API documentation, integration guides, and code examples for quick implementation.
                  </p>
                  <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                    View Documentation
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Sample Applications
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Ready-to-use sample applications demonstrating SwaraWave integration across different platforms and use cases.
                  </p>
                  <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                    Download Samples
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
            Ready to Experience SwaraWave?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get hands-on experience with our ultrasonic proximity technology. Schedule a personalized demo with our engineering team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              Schedule Live Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              Access SDK
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
            <p>© 2024 SwaraWave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}