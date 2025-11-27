import Navigation from "@/components/navigation"
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
              <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F]">
                Mobility & Transport
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              SwaraWave supports transit operators, mobility platforms, and ticketing ecosystems with hardware-free proximity verification for seamless passenger experiences.
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
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Ticketless or Cardless Boarding</h3>
                <p className="text-muted-foreground">
                  Enable passengers to board buses, trains, and other transit vehicles without physical tickets or cards using secure ultrasonic verification.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Proximity-Based Passenger Validation</h3>
                <p className="text-muted-foreground">
                  Automatically validate passenger presence and fare payment status as they enter transit areas or board vehicles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Smart Gate or Zone Entry</h3>
                <p className="text-muted-foreground">
                  Control access to restricted transit zones, platforms, and premium areas through encrypted proximity detection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Multi-Leg Trip Tracking via Sound</h3>
                <p className="text-muted-foreground">
                  Track passenger journeys across multiple transit modes and provide seamless transfers with automatic fare calculation.
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
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Reduced Queues and Friction</h3>
                <p className="text-muted-foreground mb-4">
                  Eliminate boarding queues and reduce passenger processing time with automatic proximity-based validation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Seamless boarding experience</li>
                  <li>• No manual ticket scanning</li>
                  <li>• Faster vehicle dwell times</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Less Dependence on Physical Cards or QR Codes</h3>
                <p className="text-muted-foreground mb-4">
                  Remove the need for physical tickets, smart cards, or QR codes that can be lost, damaged, or forgotten.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Device-based authentication</li>
                  <li>• No physical media required</li>
                  <li>• Reduced replacement costs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Lower Fraud and Misuse</h3>
                <p className="text-muted-foreground mb-4">
                  Implement secure, encrypted proximity verification that prevents ticket sharing and unauthorized access.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Encrypted token validation</li>
                  <li>• Device fingerprinting</li>
                  <li>• Time-bound authentication</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Enhanced Accessibility</h3>
                <p className="text-muted-foreground mb-4">
                  Provide easier access for passengers with disabilities or mobility challenges through proximity-based systems.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hands-free operation</li>
                  <li>• Automatic detection</li>
                  <li>• Reduced physical barriers</li>
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
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Smart Bus Boarding System</h3>
                  <p className="text-muted-foreground mb-4">
                    Passengers board buses seamlessly as their mobile devices automatically communicate with boarding readers for fare validation.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm font-mono text-gray-600">
                      <div>1. Passenger approaches bus door</div>
                      <div>2. Ultrasonic handshake initiated</div>
                      <div>3. Fare payment verified</div>
                      <div>4. Boarding authorized</div>
                      <div>5. Journey tracking begins</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Multi-Modal Transit Hub</h3>
                  <p className="text-muted-foreground mb-4">
                    Commuters move seamlessly between different transit modes with automatic zone detection and fare calculation across the entire journey.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm font-mono text-gray-600">
                      <div>1. Enter subway station - zone detected</div>
                      <div>2. Board train - automatic validation</div>
                      <div>3. Transfer to bus - seamless handoff</div>
                      <div>4. Exit at destination - journey complete</div>
                      <div>5. Single fare calculated and charged</div>
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
            Discover how SwaraWave can modernize your mobility operations, enhance passenger experience, and reduce operational costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              Schedule Mobility Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              Download Transit Whitepaper
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