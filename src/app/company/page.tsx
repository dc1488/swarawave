import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, Users, Trophy, Briefcase } from "lucide-react"
import Link from "next/link"

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-8">
              Company
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Learn about SwaraWave's mission, leadership team, achievements, and career opportunities as we pioneer the future of proximity intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Sections */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/company/about">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">About SwaraWave</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our mission is to make real-world interactions seamless, secure, and universally accessible through sound-based proximity intelligence.
                  </p>
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/company/team">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">Team</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Meet the leadership team and core innovators driving SwaraWave's vision for the future of proximity technology.
                  </p>
                  <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white">
                    Meet the Team
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/company/awards">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mb-6">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">Awards & Recognition</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Industry awards, innovation recognitions, and certifications that validate our technology and impact.
                  </p>
                  <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                    View Awards
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/company/careers">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mb-6">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0D1C3F] mb-4">Careers</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Join our team and help build the next generation of proximity intelligence technology.
                  </p>
                  <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white">
                    View Open Roles
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Innovation First</h3>
                  <p className="text-muted-foreground">
                    We push the boundaries of what's possible with proximity technology, constantly exploring new applications and improving our solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Security by Design</h3>
                  <p className="text-muted-foreground">
                    Security is fundamental to our technology, with encryption and privacy protection built into every layer of our platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Customer Success</h3>
                  <p className="text-muted-foreground">
                    We measure our success by our customers' success, providing comprehensive support and partnership throughout their journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Universal Access</h3>
                  <p className="text-muted-foreground">
                    We believe proximity intelligence should be accessible to everyone, which is why our technology works on any device with speakers and microphones.
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
            Join the SwaraWave Journey
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Whether you're looking to partner with us, join our team, or implement our technology, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              Explore Partnership Opportunities
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