import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-8">
              SwaraWave Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Insights on proximity technology and innovation from our team of experts and industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Post 1 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground">March 15, 2024</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    The Future of Offline-Ready Identity
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Explore how ultrasonic proximity technology is revolutionizing identity verification in disconnected environments, enabling secure authentication without network dependency.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span>Sarah Chen, CTO</span>
                  </div>
                  <Button
                    asChild
                    className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
                  >
                    {/* 🔗 Replace with your blog post URL on the free platform */}
                    <Link
                      href="https://your-free-blog-platform.com/posts/offline-ready-identity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Post 2 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground">March 10, 2024</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    Ultrasonic Proximity vs. QR, NFC, and Bluetooth
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A comprehensive comparison of proximity technologies, examining the unique advantages of ultrasonic signaling over traditional methods like QR codes, NFC, and Bluetooth.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span>Michael Roberts, Lead Engineer</span>
                  </div>
                  <Button
                    asChild
                    className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white"
                  >
                    {/* 🔗 Replace with your blog post URL */}
                    <Link
                      href="https://your-free-blog-platform.com/posts/ultrasonic-vs-qr-nfc-bluetooth"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Post 3 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground">March 5, 2024</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    Designing Proximity-First Experiences in Physical Spaces
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Best practices and strategies for creating engaging proximity experiences that enhance customer interactions in retail, hospitality, and venue environments.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span>Emily Watson, UX Director</span>
                  </div>
                  <Button
                    asChild
                    className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
                  >
                    {/* 🔗 Replace with your blog post URL */}
                    <Link
                      href="https://your-free-blog-platform.com/posts/proximity-first-experiences"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Post 4 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground">February 28, 2024</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    Security First: Building Trust in Proximity Technology
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    How SwaraWave&apos;s encryption-first approach and multi-layer security protocols ensure trust and reliability in proximity-based transactions and authentication.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span>David Kim, Security Lead</span>
                  </div>
                  <Button
                    asChild
                    className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white"
                  >
                    {/* 🔗 Replace with your blog post URL */}
                    <Link
                      href="https://your-free-blog-platform.com/posts/security-in-proximity-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Post 5 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground">February 20, 2024</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    Case Study: Transforming Retail with Sound-Based Engagement
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    How a leading retail chain implemented SwaraWave&apos;s ultrasonic technology to increase customer engagement and loyalty program participation by 45%.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span>Lisa Park, Solutions Architect</span>
                  </div>
                  <Button
                    asChild
                    className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
                  >
                    {/* 🔗 Replace with your blog post URL */}
                    <Link
                      href="https://your-free-blog-platform.com/posts/retail-sound-engagement-case-study"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Post 6 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground">February 15, 2024</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">
                    The Role of Proximity Intelligence in Smart Cities
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Exploring how ultrasonic proximity technology is enabling smarter urban environments and enhancing public services through contactless interactions.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span>Dr. James Wilson, Urban Tech Strategist</span>
                  </div>
                  <Button
                    asChild
                    className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white"
                  >
                    {/* 🔗 Replace with your blog post URL */}
                    <Link
                      href="https://your-free-blog-platform.com/posts/proximity-intelligence-smart-cities"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] mb-8">
            Stay Updated with SwaraWave Insights
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get the latest articles, case studies, and expert analysis on ultrasonic proximity technology and its applications across industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Subscribe → your newsletter / blog home */}
            <Button
              asChild
              size="lg"
              className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
            >
              <Link
                href="https://your-free-blog-platform.com" // e.g. Medium publication or Substack
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe to Newsletter
              </Link>
            </Button>

            {/* RSS → RSS feed link from the free platform */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white"
            >
              <Link
                href="https://your-free-blog-platform.com/rss" // replace with actual RSS URL
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS Feed
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
            <p>© 2024 SwaraWave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}