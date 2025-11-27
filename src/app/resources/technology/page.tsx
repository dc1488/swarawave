import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Cpu, Shield, Zap, Settings, Smartphone } from "lucide-react"

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F]">
                Technology Overview
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Understanding ultrasonic proximity technology and how SwaraWave leverages sound for secure, offline-ready interactions.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            How Ultrasonic Signaling Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  SwaraWave uses ultrasonic sound waves (frequencies above human hearing) to create secure, proximity-based communication channels between devices. These high-frequency signals can transmit data without being audible to humans, making them ideal for background proximity detection and authentication.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Signal Generation</h3>
                    <p className="text-muted-foreground mb-4">
                      Devices generate ultrasonic signals using their built-in speakers, encoding data such as device identity, timestamps, and authentication tokens into the sound waves.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Frequency range: 18-22 kHz</li>
                      <li>• Data encoding: Digital modulation</li>
                      <li>• Signal duration: 50-200ms</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Signal Detection</h3>
                    <p className="text-muted-foreground mb-4">
                      Microphones on receiving devices capture the ultrasonic signals, which are then processed to extract the encoded data and verify proximity and identity.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Sensitivity: Up to 3-5 meters</li>
                      <li>• Processing time: Under 100ms</li>
                      <li>• Noise immunity: Advanced filtering</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Sound */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Why SwaraWave Uses Sound Instead of BLE/NFC/QR
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Enhanced Security</h3>
                <p className="text-muted-foreground mb-4">
                  Ultrasonic signals are harder to intercept and spoof compared to radio-based technologies, providing an additional layer of security.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Line-of-sight requirement</li>
                  <li>• Limited propagation range</li>
                  <li>• Encrypted data transmission</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Universal Compatibility</h3>
                <p className="text-muted-foreground mb-4">
                  Every device with speakers and microphones can use SwaraWave, eliminating the need for specialized hardware or specific radio modules.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• No additional hardware required</li>
                  <li>• Works on all modern devices</li>
                  <li>• Cross-platform compatibility</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Offline & Low-Bandwidth Benefits</h3>
                <p className="text-muted-foreground mb-4">
                  Ultrasonic communication works without network connectivity and requires minimal bandwidth, perfect for disconnected environments.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• No internet connection required</li>
                  <li>• Minimal power consumption</li>
                  <li>• Works in underground/remote areas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Precise Spatial Control</h3>
                <p className="text-muted-foreground mb-4">
                  Sound waves provide more precise spatial boundaries compared to radio signals, enabling accurate zone detection and proximity measurement.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Accurate distance measurement</li>
                  <li>• Defined spatial boundaries</li>
                  <li>• Reduced cross-interference</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Security & Encryption Overview
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#0D1C3F] mb-6">Multi-Layer Security Architecture</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-[#0D1C3F] mb-3">1. Signal Encryption</h4>
                    <p className="text-muted-foreground mb-3">
                      All ultrasonic signals are encrypted using AES-256 encryption, ensuring that even if signals are intercepted, the data remains secure.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• End-to-end encryption</li>
                      <li>• Dynamic key exchange</li>
                      <li>• Perfect forward secrecy</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#0D1C3F] mb-3">2. Time-Bound Authentication</h4>
                    <p className="text-muted-foreground mb-3">
                      Tokens include timestamps and expire after short periods, preventing replay attacks and ensuring freshness of authentication.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Token expiration: 30-60 seconds</li>
                      <li>• Clock synchronization protocols</li>
                      <li>• Nonce-based challenge-response</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#0D1C3F] mb-3">3. Device Fingerprinting</h4>
                    <p className="text-muted-foreground mb-3">
                      Each device has a unique fingerprint based on hardware characteristics, preventing device spoofing and ensuring identity verification.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Hardware-based identifiers</li>
                      <li>• Behavioral pattern analysis</li>
                      <li>• Multi-factor authentication support</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#0D1C3F] mb-3">4. Environmental Validation</h4>
                    <p className="text-muted-foreground mb-3">
                      The system validates the acoustic environment to detect and prevent playback attacks and signal manipulation.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Acoustic signature verification</li>
                      <li>• Signal quality analysis</li>
                      <li>• Anti-recording mechanisms</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Device Types */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Supported Device Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Mobile Devices</h3>
                <p className="text-muted-foreground">
                  iOS and Android smartphones and tablets with standard speakers and microphones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Web Browsers</h3>
                <p className="text-muted-foreground">
                  Modern web browsers with Web Audio API support for desktop and laptop computers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">POS Systems</h3>
                <p className="text-muted-foreground">
                  Point-of-sale terminals and kiosks with audio capabilities for retail and hospitality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">IoT Devices</h3>
                <p className="text-muted-foreground">
                  Internet of Things devices with audio components for smart home and industrial applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Implement SwaraWave Technology?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get access to technical documentation, SDK downloads, and developer resources to start integrating ultrasonic proximity into your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              Access Technical Documentation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              Download SDK
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