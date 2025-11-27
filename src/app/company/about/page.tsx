import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, Target, Lightbulb, Globe } from "lucide-react"

export default function AboutPage() {
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
                About SwaraWave
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              SwaraWave builds secure ultrasonic infrastructure that powers proximity identity, offline transactions, and real-world engagement across multiple industries. Our mission is to make real-world interactions seamless, secure, and universally accessible through sound.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D1C3F] mb-4">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To revolutionize how people interact with the digital world in physical spaces by creating secure, seamless proximity experiences that work on any device, anywhere, anytime.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center mb-6">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D1C3F] mb-4">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where every physical interaction is enhanced by intelligent proximity technology, making everyday experiences more secure, convenient, and meaningful.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Our Story
            </h2>
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">The Beginning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    SwaraWave was founded in 2020 by a team of audio engineers, security experts, and retail technologists who recognized a fundamental gap in how digital and physical worlds connect. Traditional proximity technologies like Bluetooth, NFC, and QR codes required specialized hardware, had security limitations, or couldn't work offline.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">The Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our breakthrough came from leveraging ultrasonic sound waves - a technology that exists on virtually every modern device through speakers and microphones. By developing advanced signal processing algorithms and military-grade encryption, we created a proximity solution that was more secure, universally compatible, and capable of offline operation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">The Growth</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From our initial pilot with retail chains to powering secure authentication for financial institutions and enabling ticketless transit systems, SwaraWave has grown to serve enterprise customers across multiple continents. Our technology now processes millions of proximity interactions monthly, enabling experiences that were previously impossible.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Leadership */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Technology Leadership
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-white">15+</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Patents Filed</h3>
                  <p className="text-muted-foreground">
                    Innovative ultrasonic signaling and security technologies protected by intellectual property.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-white">99.9%</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Uptime</h3>
                  <p className="text-muted-foreground">
                    Enterprise-grade reliability with guaranteed service availability and performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-white">50M+</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Interactions</h3>
                  <p className="text-muted-foreground">
                    Monthly proximity interactions processed across our global customer base.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Global Impact
            </h2>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-6">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D1C3F] mb-4">Worldwide Presence</h3>
                    <p className="text-muted-foreground mb-6">
                      SwaraWave technology is deployed across 25+ countries, serving customers in North America, Europe, Asia-Pacific, and Latin America. Our global infrastructure ensures low-latency performance and compliance with regional data protection regulations.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 25+ countries with active deployments</li>
                      <li>• 12 data centers globally</li>
                      <li>• Support for 15+ languages</li>
                      <li>• GDPR, CCPA, and regional compliance</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-[#F7F9FC] to-white p-8 rounded-2xl">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">North America</span>
                        <span className="text-sm font-bold text-[#4A5AFF]">45%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#4A5AFF] rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Europe</span>
                        <span className="text-sm font-bold text-[#8692FF]">30%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#8692FF] rounded-full" style={{width: '30%'}}></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Asia-Pacific</span>
                        <span className="text-sm font-bold text-[#4A5AFF]">20%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#4A5AFF] rounded-full" style={{width: '20%'}}></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Other Regions</span>
                        <span className="text-sm font-bold text-[#8692FF]">5%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#8692FF] rounded-full" style={{width: '5%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF]">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Partner With Us
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the growing number of enterprises transforming their customer experiences with SwaraWave's ultrasonic proximity technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              Download Company Overview
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