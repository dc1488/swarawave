import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Cpu, Shield, Zap, Settings, Smartphone } from "lucide-react"
import Link from "next/link"

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
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              No internet connectivity. No custom hardware. Just sound.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The SwaraWave&reg; Ultrasonic SDK lets you securely exchange data between devices
              using only standard speakers and microphones. No network, no camera, no cables —
              turning everyday devices into proximity-aware endpoints.
            </p>
            <Button
              asChild
              className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
            >
              <Link href="/products/sdk">
                Meet the SwaraWave SDK
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            How SwaraWave Ultrasonic Communication Works
          </h2>
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  SwaraWave encodes small data payloads into ultrasonic sound waves
                  (frequencies above human hearing) and broadcasts them through a device’s
                  speaker. Nearby devices with microphones and the SwaraWave SDK decode these
                  tones, enabling secure proximity communication without relying on internet
                  connectivity or custom RF hardware.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                      Signal Generation (Transmitter)
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      A transmitting device uses the SwaraWave SDK to turn structured data
                      (like IDs, tokens, or session keys) into ultrasonic tones.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Uses standard built-in speakers</li>
                      <li>• Encodes payloads into ultrasonic tones</li>
                      <li>• Works fully offline and in real time</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                      Signal Detection (Receiver)
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      On the receiving side, SwaraWave listens through the microphone, detects
                      the tone, and demodulates it back into the original payload.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Uses standard device microphones</li>
                      <li>• Decodes ultrasonic tones into data</li>
                      <li>• Validates proximity and integrity</li>
                    </ul>
                  </div>
                </div>

                {/* Components of Ultrasonic Data Transmission */}
                <div className="grid md:grid-cols-4 gap-6 pt-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[#0D1C3F] mb-2 uppercase tracking-wide">
                      Transmitter
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      A device or app with the SwaraWave SDK that broadcasts an ultrasonic tone
                      through its speakers. It can also play mp3/wav tones generated via the
                      SwaraWave Tone Service API.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0D1C3F] mb-2 uppercase tracking-wide">
                      Receiver
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      A device or app with the SwaraWave SDK that listens via the microphone,
                      detects the tone, and demodulates the embedded payload.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0D1C3F] mb-2 uppercase tracking-wide">
                      Transceiver
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      An app or device integrated with SwaraWave that can send and receive
                      tones simultaneously for two-way, presence-aware communication.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0D1C3F] mb-2 uppercase tracking-wide">
                      Payload
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The structured data carried in each ultrasonic transaction (IDs, tokens,
                      session keys, offer codes, or any small message exchanged between devices).
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground pt-4">
                  SwaraWave can transmit and receive payloads offline and requires no additional
                  hardware beyond what is already embedded in most connected devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Sound */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Why SwaraWave Uses Sound Instead of BLE / NFC / QR
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Enhanced Security</h3>
                <p className="text-muted-foreground mb-4">
                  Ultrasonic channels are directional and range-bounded, making them harder to
                  scan and spoof than broad radio-based signals.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Short, controllable range</li>
                  <li>• No visible QR codes to copy</li>
                  <li>• Encrypted ultrasonic payloads</li>
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
                  If a device has a speaker and microphone, it can speak SwaraWave. No NFC chip,
                  no BLE module, no special terminal required.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Works on most smartphones &amp; tablets</li>
                  <li>• Compatible with TVs, kiosks, POS, IoT</li>
                  <li>• Leverages existing audio hardware</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Offline & Low-Bandwidth</h3>
                <p className="text-muted-foreground mb-4">
                  SwaraWave is designed for environments with limited or no connectivity, where
                  traditional network-dependent methods struggle.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Works fully offline (data sync as needed)</li>
                  <li>• Ideal for transit, offline retail, events</li>
                  <li>• Minimal impact on battery and CPU</li>
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
                  Carefully chosen tone profiles allow SwaraWave to target zones, aisles, gates,
                  counters, or even specific devices.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Zone-based and point-based profiles</li>
                  <li>• Fine-grained control of range and motion</li>
                  <li>• Reduced cross-talk between experiences</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Architecture & Platform Availability */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Built for Interoperability Across the Connected Ecosystem
            </h2>
            <Card className="border-0 shadow-lg mb-10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#0D1C3F] mb-4">
                  Core Architecture
                </h3>
                <p className="text-muted-foreground mb-4">
                  At its core, the SwaraWave SDK is a lightweight, high-performance audio
                  engine designed to plug into your existing stack — mobile apps, web apps,
                  POS, kiosks, and IoT devices.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#0D1C3F] mb-2 uppercase tracking-wide">
                      Portability
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Compact audio library architecture that travels with your app, from
                      edge devices to mobile clients.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0D1C3F] mb-2 uppercase tracking-wide">
                      Interoperability
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Works across major platforms and runtimes, making it simple to integrate
                      SwaraWave into existing journeys.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0D1C3F] mb-2 uppercase tracking-wide">
                      Accessibility
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Uses standard speaker/microphone hardware already present in consumer
                      and enterprise devices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#0D1C3F] mb-4">
                  Platform Availability
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-[#0D1C3F] mb-2">Mobile</p>
                    <p>• Native iOS &amp; Android SDKs</p>
                    <p>• Hybrid frameworks (e.g., React Native)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1C3F] mb-2">Desktop &amp; Web</p>
                    <p>• Windows, macOS, Linux via audio APIs</p>
                    <p>• Modern browsers via Web Audio (beta)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1C3F] mb-2">Embedded &amp; IoT</p>
                    <p>• Single-board computers &amp; IoT devices</p>
                    <p>• Smart signage, kiosks, terminals</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1C3F] mb-2">Tone Service</p>
                    <p>• Generate mp3/wav ultrasonic tones</p>
                    <p>• Drop into any speaker-enabled system</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white"
                  >
                    <Link href="/products/sdk">
                      View SDK Platforms
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Security &amp; Encryption Overview
          </h2>
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-8">
                <h3 className="text-2xl font-bold text-[#0D1C3F] mb-2">
                  Two Layers of Transmission Security
                </h3>
                <p className="text-muted-foreground">
                  SwaraWave provides multiple layers of protection for data-in-flight during
                  ultrasonic transactions, combining tone-level access control with strong
                  encryption.
                </p>

                {/* ToneLock-style controls */}
                <div>
                  <h4 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    1. Tone Access Controls (Tone Locking)
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    SwaraWave lets you restrict which applications and devices can decode a
                    tone by applying lock values to each payload. Only receivers with the
                    correct lock can demodulate the data.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Custom value locks to bind tones to specific devices or sessions</li>
                    <li>• Account-based locks to keep tones within a given SwaraWave project</li>
                    <li>• Time-based locks that limit demodulation to a short time window</li>
                  </ul>
                </div>

                {/* AES-256 style encryption */}
                <div>
                  <h4 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    2. AES-256 Encryption
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    SwaraWave integrates AES-256 encryption directly into the SDK to secure
                    every ultrasonic payload. Encryption and decryption can happen entirely
                    offline, making it ideal for critical environments.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• End-to-end encrypted payloads</li>
                    <li>• Works with all tone profiles</li>
                    <li>• Optional encrypted mp3/wav tone generation</li>
                  </ul>
                </div>

                {/* Real-world audio controls */}
                <div>
                  <h4 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    Designed for Real-World Audio Environments
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    SwaraWave tones are inaudible to humans and engineered to be resilient in
                    noisy environments such as stores, transit hubs, and drive-thrus.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Configurable transmit volume with automatic reset</li>
                    <li>• Microphone permission handling at runtime</li>
                    <li>• Designed to work alongside audible chimes and announcements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Device Types */}
      <section className="py-20 bg-[#F7F9FC]">
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
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Web &amp; Desktop</h3>
                <p className="text-muted-foreground">
                  Modern web browsers and desktop OSs with audio APIs and standard audio devices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">POS &amp; Terminals</h3>
                <p className="text-muted-foreground">
                  Checkout counters, kiosks, and terminals with speakers and microphones for
                  payments and loyalty.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">IoT &amp; Edge Devices</h3>
                <p className="text-muted-foreground">
                  Smart screens, in-store speakers, vehicles, and connected devices in retail,
                  mobility, and venues.
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
            Access technical documentation, SDK downloads, and developer resources — or talk
            with our team about your proximity roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#4A5AFF] hover:bg-gray-100"
            >
              <Link href="/products/sdk">
                Access Technical Documentation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#4A5AFF]"
            >
              <Link href="/contact">
                Talk to Our Team
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