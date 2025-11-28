import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Award, Briefcase } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-8">
              Leadership Team
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Meet the leadership team and core innovators driving SwaraWave's vision for the future of proximity intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Executive Leadership
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">MS</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-2">
                    Martin Suharlie
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Chief Executive Officer
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    President Director of (IDX: MCAS), the leading digital infrastructure company in Indonesia
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="inline-flex items-center px-3 py-1 bg-[#F7F9FC] rounded-full text-xs text-[#4A5AFF]">
                      MIT
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-[#F7F9FC] rounded-full text-xs text-[#8692FF]">
                      Stanford
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">RL</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-2">
                    Raymond Loho
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Chief Technology Officer
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    President Director of (IDX: DIVA) Pioneer in ultrasonic signal processing in proximity technology. Raymond leads SwaraWave's technical innovation and product development.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="inline-flex items-center px-3 py-1 bg-[#F7F9FC] rounded-full text-xs text-[#4A5AFF]">
                      Caltech
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-[#F7F9FC] rounded-full text-xs text-[#8692FF]">
                      PhD
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">AT</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-2">
                    Abraham Theofilus
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Chief Operating Officer
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    President Director at (IDX: NFCX) with expertise in scaling retailcompanies. Abraham ensures SwaraWave's operational excellence and customer success.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="inline-flex items-center px-3 py-1 bg-[#F7F9FC] rounded-full text-xs text-[#4A5AFF]">
                      Harvard
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-[#F7F9FC] rounded-full text-xs text-[#8692FF]">
                      MBA
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Core Innovation Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D1C3F] mb-2">
                    Engineering Team
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    World-class audio engineers and developers building the future of proximity technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D1C3F] mb-2">
                    Research & Development
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pushing the boundaries of what's possible with ultrasonic technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8692FF] to-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D1C3F] mb-2">
                    Product & Design
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Creating intuitive experiences that make proximity technology accessible to everyone.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D1C3F] mb-2">
                    Customer Success
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ensuring every customer succeeds with SwaraWave's proximity solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Join Our Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Why Work at SwaraWave?
                  </h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Innovation at the intersection of audio and security</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Solve real-world problems for millions of users</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Work with brilliant minds from diverse backgrounds</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#4A5AFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Build the future of proximity intelligence</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                    Current Openings
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center p-4 bg-[#F7F9FC] rounded-lg">
                      <div>
                        <h4 className="font-semibold text-[#0D1C3F]">Senior Audio Engineer</h4>
                        <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                      </div>
                      <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                        Apply Now
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-[#F7F9FC] rounded-lg">
                      <div>
                        <h4 className="font-semibold text-[#0D1C3F]">Security Engineer</h4>
                        <p className="text-sm text-muted-foreground">Remote</p>
                      </div>
                      <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                        Apply Now
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
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our team of innovators and help build the next generation of proximity intelligence technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              Learn About Our Culture
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