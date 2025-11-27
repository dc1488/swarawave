import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Smartphone, Zap, Building2 } from "lucide-react"

export default function FinanceSolutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F]">
                Finance
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              SwaraWave helps financial institutions, digital wallets, and payment providers enable secure and frictionless proximity experiences without extra hardware.
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
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Offline-Ready User Authentication</h3>
                <p className="text-muted-foreground">
                  Authenticate users securely without network connectivity using encrypted ultrasonic tokens that work across any device.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Cardless ATM or Kiosk Experiences</h3>
                <p className="text-muted-foreground">
                  Enable customers to access ATMs and kiosks using their mobile devices through secure proximity verification.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Wallet-to-Wallet Proximity Transfers</h3>
                <p className="text-muted-foreground">
                  Facilitate secure peer-to-peer transfers when devices are in close proximity without requiring account details or QR codes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Transaction Validation Without Network Dependency</h3>
                <p className="text-muted-foreground">
                  Validate and authorize transactions offline with automatic sync when connectivity is restored.
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
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Higher Security</h3>
                <p className="text-muted-foreground mb-4">
                  Encrypted ultrasonic signaling provides multiple layers of security beyond traditional proximity technologies.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Time-bound token validation</li>
                  <li>• Device fingerprinting</li>
                  <li>• Multi-factor authentication support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Reduced Hardware Deployment</h3>
                <p className="text-muted-foreground mb-4">
                  Eliminate the need for NFC terminals, beacons, or specialized hardware by using existing device capabilities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• No additional infrastructure</li>
                  <li>• Lower capital expenditure</li>
                  <li>• Faster deployment timelines</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Lower Operational Friction</h3>
                <p className="text-muted-foreground mb-4">
                  Streamline customer experiences with seamless proximity interactions that eliminate manual steps and reduce errors.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• No app switching required</li>
                  <li>• Automatic detection and validation</li>
                  <li>• Reduced customer support needs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Consistent User Experience Across Channels</h3>
                <p className="text-muted-foreground mb-4">
                  Provide uniform proximity experiences across mobile apps, web platforms, and physical touchpoints.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cross-platform compatibility</li>
                  <li>• Unified authentication flow</li>
                  <li>• Seamless channel switching</li>
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
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Digital Wallet ATM Access</h3>
                  <p className="text-muted-foreground mb-4">
                    Customers approach an ATM, and their mobile device automatically establishes a secure ultrasonic connection for cardless transactions.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm font-mono text-gray-600">
                      <div>1. Customer approaches ATM</div>
                      <div>2. Ultrasonic handshake initiated</div>
                      <div>3. Identity verified via encrypted token</div>
                      <div>4. Transaction authorized</div>
                      <div>5. Cash dispensed securely</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Branch Check-in and Service</h3>
                  <p className="text-muted-foreground mb-4">
                    Customers are automatically recognized upon entering a bank branch, enabling personalized service and secure teller interactions.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm font-mono text-gray-600">
                      <div>1. Customer enters branch</div>
                      <div>2. Presence detected by branch system</div>
                      <div>3. Customer profile retrieved</div>
                      <div>4. Service preferences loaded</div>
                      <div>5. Secure teller authentication enabled</div>
                    </div>
                  </div>
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
            Transform Your Financial Services
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover how SwaraWave can enhance security, reduce friction, and improve customer experiences in your financial institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              Schedule Finance Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              Download Finance Whitepaper
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