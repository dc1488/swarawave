import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileText, Calendar, ExternalLink } from "lucide-react"

export default function PressPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-8">
              News & Press
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Latest announcements, press releases, and media coverage about SwaraWave's innovations, partnerships, and industry impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Press Release */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Featured Announcement
            </h2>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#4A5AFF] rounded-full flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground mb-2">March 15, 2024</div>
                    <h3 className="text-2xl font-bold text-[#0D1C3F] mb-3">
                      SwaraWave Raises $50M Series B to Expand Ultrasonic Proximity Technology
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      SwaraWave announced today the completion of a $50 million Series B funding round led by TechVentures Partners to accelerate the development and deployment of its ultrasonic proximity technology across global markets.
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The funding will be used to scale SwaraWave's engineering team, expand international partnerships, and enhance the company's SDK and Engagement Platform capabilities. This round brings total funding to $75 million.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                    Read Full Press Release
                  </Button>
                  <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                    Download Media Kit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Press Releases */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Recent Press Releases
            </h2>
            <div className="space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">February 28, 2024</div>
                          <h3 className="text-xl font-bold text-[#0D1C3F] mb-2">
                            Partnership with Global Retail Leader
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        SwaraWave announces strategic partnership with RetailMax, the world's largest retail chain, to implement ultrasonic proximity technology across 5,000 stores globally.
                      </p>
                    </div>
                    <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">February 15, 2024</div>
                          <h3 className="text-xl font-bold text-[#0D1C3F] mb-2">
                            Launch of Engagement Platform 2.0
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        SwaraWave releases major update to its Engagement Platform, featuring enhanced analytics, improved campaign automation, and new proximity-based loyalty tools.
                      </p>
                    </div>
                    <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">February 1, 2024</div>
                          <h3 className="text-xl font-bold text-[#0D1C3F] mb-2">
                            SwaraWave Named Technology Pioneer of 2024
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Industry recognition highlights SwaraWave's innovative approach to ultrasonic proximity technology and its impact across finance, retail, and transportation sectors.
                      </p>
                    </div>
                    <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Media Coverage
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    TechCrunch
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    "SwaraWave's ultrasonic technology could revolutionize how we think about proximity interactions in physical spaces."
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    March 10, 2024 - Feature story on SwaraWave's innovative approach to contactless experiences.
                  </p>
                  <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                    Read Article
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Forbes
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    "How SwaraWave is solving the proximity problem for enterprises without requiring additional hardware."
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    February 28, 2024 - In-depth analysis of SwaraWave's business model and market potential.
                  </p>
                  <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                    Read Article
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    VentureBeat
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    "The future of retail is sound-based: SwaraWave's ultrasonic platform drives customer engagement."
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    March 5, 2024 - Coverage of SwaraWave's impact on retail transformation and customer experience.
                  </p>
                  <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                    Read Article
                    <ExternalLink className="ml-2 w-4 h-4" />
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
            Media Inquiries
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            For press inquiries, interviews, or media resources, please contact our communications team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              Contact Press Team
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              Download Media Kit
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