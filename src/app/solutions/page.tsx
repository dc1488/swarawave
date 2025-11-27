import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, ShoppingCart, Car } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-8">
              Industry Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              SwaraWave's ultrasonic proximity technology transforms how businesses interact with customers across multiple industries, enabling secure, seamless experiences without additional hardware.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/solutions/finance">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">Finance</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Secure authentication and proximity-driven transactions for financial institutions, digital wallets, and payment providers.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mr-2"></div>
                      Offline-ready user authentication
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mr-2"></div>
                      Cardless ATM experiences
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mr-2"></div>
                      Wallet-to-wallet transfers
                    </div>
                  </div>
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white w-full">
                    View Solution
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/solutions/retail">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mb-6">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">Retail & FMCG</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Transform physical retail into measurable and interactive environments with aisle-based engagement and loyalty activation.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-[#8692FF] rounded-full mr-2"></div>
                      Aisle-level promotions
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-[#8692FF] rounded-full mr-2"></div>
                      Personalized offers
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-[#8692FF] rounded-full mr-2"></div>
                      Loyalty program activation
                    </div>
                  </div>
                  <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white w-full">
                    View Solution
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/solutions/mobility">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-6">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">Mobility & Transport</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Hardware-free proximity verification for transit operators, mobility platforms, and ticketing ecosystems.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mr-2"></div>
                      Ticketless boarding
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mr-2"></div>
                      Passenger validation
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mr-2"></div>
                      Smart gate entry
                    </div>
                  </div>
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white w-full">
                    View Solution
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Cross-Industry Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Enhanced Security</h3>
                  <p className="text-muted-foreground">
                    Encrypted ultrasonic signaling provides secure proximity detection without the vulnerabilities of Bluetooth or NFC.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Reduced Hardware Costs</h3>
                  <p className="text-muted-foreground">
                    Leverage existing devices with speakers and microphones - no additional beacons or infrastructure required.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Offline Capability</h3>
                  <p className="text-muted-foreground">
                    Enable proximity interactions without network connectivity, perfect for underground transit or remote locations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Scalable Integration</h3>
                  <p className="text-muted-foreground">
                    Deploy across multiple platforms and devices with consistent APIs and minimal integration overhead.
                  </p>
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
            Find Your Industry Solution
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover how SwaraWave can transform your business with secure, proximity-driven experiences tailored to your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              Download Industry Brief
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