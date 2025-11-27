import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Play, FileText, HelpCircle, Cpu, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-8">
              Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Explore comprehensive resources about SwaraWave's ultrasonic proximity technology, from technical documentation to industry insights and practical guides.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/resources/blog">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">Blog</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Insights on proximity technology and innovation from our team of experts and industry leaders.
                  </p>
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white w-full">
                    Read Articles
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/resources/demos">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mb-6">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">Product Demos</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    See SwaraWave in action with interactive demos showcasing real-world use cases and capabilities.
                  </p>
                  <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white w-full">
                    Watch Demos
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/resources/press">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">News & Press</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Latest announcements, press releases, and media coverage about SwaraWave's innovations and partnerships.
                  </p>
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white w-full">
                    View News
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/resources/technology">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mb-6">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">Technology Overview</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Understanding ultrasonic proximity technology and how SwaraWave leverages sound for secure interactions.
                  </p>
                  <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white w-full">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/resources/support">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-6">
                    <HelpCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">Support / FAQs</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Get help and find answers to common questions about SwaraWave implementation and troubleshooting.
                  </p>
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white w-full">
                    Get Support
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">Developer Community</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Connect with other developers, share experiences, and get help from the SwaraWave community.
                </p>
                <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white w-full">
                  Join Community
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Featured Resources
            </h2>
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0D1C3F] mb-2">The Future of Offline-Ready Identity</h3>
                      <p className="text-muted-foreground mb-3">
                        Explore how ultrasonic proximity technology is revolutionizing identity verification in disconnected environments.
                      </p>
                      <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                        Read Article
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0D1C3F] mb-2">Retail Proximity Demo</h3>
                      <p className="text-muted-foreground mb-3">
                        See how SwaraWave transforms retail experiences with aisle-based engagement and personalized offers.
                      </p>
                      <Button variant="outline" className="border-[#8692FF] text-[#8692FF] hover:bg-[#8692FF] hover:text-white">
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0D1C3F] mb-2">Ultrasonic vs. Traditional Proximity Technologies</h3>
                      <p className="text-muted-foreground mb-3">
                        Compare ultrasonic proximity with Bluetooth, NFC, and QR codes to understand the advantages for your use case.
                      </p>
                      <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                        View Comparison
                      </Button>
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
            Stay Updated with SwaraWave
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get the latest insights, updates, and resources about ultrasonic proximity technology delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              Subscribe to Newsletter
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              Download Resource Kit
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