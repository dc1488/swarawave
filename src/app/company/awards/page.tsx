import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Trophy, Star, Award } from "lucide-react"

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-8">
              Awards & Recognition
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Industry awards, innovation recognitions, and certifications that validate SwaraWave's technology leadership and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Major Awards */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Industry Recognition
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D1C3F] mb-4">
                    Technology Pioneer of 2024
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Awarded by Tech Innovation Awards for breakthrough ultrasonic proximity technology that enables secure, offline-ready interactions without additional hardware.
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                    <span className="text-sm text-muted-foreground">Industry Innovation</span>
                  </div>
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D1C3F] mb-4">
                    Best Security Innovation Award
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Recognized by Global Security Summit for enterprise-grade encryption and multi-layer security protocols in proximity technology.
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                    <span className="text-sm text-muted-foreground">Security Excellence</span>
                  </div>
                  <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Certifications & Compliance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    ISO 27001 Certified
                  </h3>
                  <p className="text-muted-foreground">
                    International standard for information security management systems compliance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    SOC 2 Type II Certified
                  </h3>
                  <p className="text-muted-foreground">
                    Service Organization Control 2 compliance for security and availability.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    GDPR Compliant
                  </h3>
                  <p className="text-muted-foreground">
                    Full compliance with European data protection regulations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Industry Leadership
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Gartner Recognition
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Named as "Cool Vendor" in Gartner's Magic Quadrant for Proximity and Engagement Technologies for three consecutive years.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Innovation Leadership</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Market Execution</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Customer Satisfaction</span>
                    </li>
                  </ul>
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                    View Report
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Forbes Technology Council
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Recognized as one of "Top 10 Most Innovative Companies" in enterprise technology for revolutionizing proximity-based interactions.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Disruptive Technology</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#8692FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Market Impact</span>
                    </li>
                  </ul>
                  <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Intellectual Property
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    15+ Patents Filed
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Extensive patent portfolio covering ultrasonic signal processing, encryption methods, and proximity detection algorithms across multiple jurisdictions.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Core Technology Patents</span>
                      <span className="text-sm font-bold text-[#4A5AFF]">8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Security Patents</span>
                      <span className="text-sm font-bold text-[#8692FF]">5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Application Patents</span>
                      <span className="text-sm font-bold text-[#4A5AFF]">2</span>
                    </div>
                  </div>
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                    View Patent Portfolio
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    Trademark Protection
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    SwaraWave brand and technology trademarks protected across 50+ countries, ensuring brand integrity and market exclusivity.
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-[#8692FF] rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground">Global Coverage</span>
                  </div>
                  <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
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
            Innovation Recognized Worldwide
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            SwaraWave's commitment to innovation and excellence has been recognized by leading industry organizations worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              Download Recognition Kit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              Nominate for Awards
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