import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Zap } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-8">
              SwaraWave Products
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              SwaraWave offers a modular stack combining an ultrasonic SDK and an engagement platform. Together, they enable secure, offline-ready proximity experiences across applications, devices, and environments.
            </p>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">
                  SwaraWave Ultrasonic SDK – Proximity & Identity Engine
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The core ultrasonic SDK that enables encrypted proximity detection, identity verification, and offline-ready communication between devices without additional hardware.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Encrypted ultrasonic signaling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Cross-platform support (iOS, Android, Web, POS)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Lightweight integration footprint</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Offline-ready communication</span>
                  </li>
                </ul>
                <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">
                  SwaraWave Engagement Platform – Experience Orchestration & Loyalty
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A no-code control center for designing, launching, and analyzing proximity-driven experiences, campaigns, and loyalty programs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Visual journey builder</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Audience segmentation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Reward & incentive logic</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Real-time dashboards & reporting</span>
                  </li>
                </ul>
                <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-8">
            Ready to Transform Your Proximity Experiences?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get started with SwaraWave's modular stack and build secure, seamless proximity intelligence into your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
              View Documentation
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
            <p>&copy; 2024 SwaraWave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}