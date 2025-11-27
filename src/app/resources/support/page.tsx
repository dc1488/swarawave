import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, HelpCircle, MessageCircle, Mail, Phone } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4A5AFF] to-[#8692FF] rounded-full flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F]">
                Support & FAQs
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Get help and find answers to common questions about SwaraWave implementation, troubleshooting, and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-0 shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0D1C3F]">What is ultrasonic proximity?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    Ultrasonic proximity is a technology that uses high-frequency sound waves (above human hearing) to detect when devices are near each other and enable secure communication. SwaraWave leverages this technology to create proximity-based experiences without requiring additional hardware like Bluetooth beacons or NFC readers.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-0 shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0D1C3F]">Does SwaraWave require special hardware?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    No, SwaraWave does not require special hardware. The technology works with any device that has speakers and microphones - which includes virtually all modern smartphones, tablets, computers, and many IoT devices. This universal compatibility makes implementation much easier and more cost-effective than solutions requiring specialized hardware.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-0 shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0D1C3F]">How secure is the signaling?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    SwaraWave uses multiple layers of security including AES-256 encryption, time-bound tokens, device fingerprinting, and environmental validation. The ultrasonic signals themselves are harder to intercept than radio-based technologies, and our security protocols prevent replay attacks, spoofing, and unauthorized access. All communications are encrypted end-to-end.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-0 shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0D1C3F]">Does it work offline?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    Yes, SwaraWave is designed to work completely offline. The ultrasonic communication happens directly between devices without requiring internet connectivity. This makes it ideal for environments with poor or no network coverage, such as underground transit systems, remote areas, or during network outages. Data can be queued and synced when connectivity is restored.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-0 shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0D1C3F]">What platforms does the SDK support?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    SwaraWave provides native SDKs for iOS (Swift/Objective-C), Android (Kotlin/Java), Web (JavaScript with Web Audio API), and various embedded platforms. We also offer React Native, Flutter, and Cordova plugins for cross-platform development. The APIs are consistent across all platforms, making it easy to maintain codebases.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-0 shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0D1C3F]">How do we get started integrating SwaraWave?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    Getting started is easy. First, sign up for a developer account to access the SDK and documentation. Then, integrate the SDK into your application using our comprehensive guides and sample code. We offer sandbox environments for testing, and our support team is available to help with implementation. Most customers can complete basic integration within a few days.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-0 shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0D1C3F]">What is the range of ultrasonic detection?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    The effective range depends on the environment and device capabilities, but typically ranges from 10cm to 3-5 meters. The technology is designed for close-proximity interactions, which provides better security and precision than long-range technologies. Range can be adjusted based on your specific use case requirements.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-0 shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0D1C3F]">How does SwaraWave handle noisy environments?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    SwaraWave uses advanced signal processing algorithms, noise filtering, and error correction to work reliably in various acoustic environments. The technology can distinguish ultrasonic signals from background noise and adapt to different acoustic conditions. We also provide configuration options to optimize performance for specific environments.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border-0 shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0D1C3F]">Can SwaraWave work alongside other audio applications?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    Yes, SwaraWave is designed to coexist with other audio applications. The SDK includes intelligent audio management that coordinates with the device's audio system to minimize conflicts. Users can typically continue playing music, making calls, or using other audio features while SwaraWave operates in the background.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border-0 shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0D1C3F]">What kind of support and maintenance is required?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    SwaraWave is designed for minimal maintenance. The cloud components are managed and updated automatically, while the device SDKs receive regular updates with improvements and security patches. We offer different support tiers ranging from community support to enterprise-grade SLAs. Most customers find the system requires very little ongoing maintenance beyond standard app updates.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
            Still Need Help?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Live Chat</h3>
                <p className="text-muted-foreground mb-4">
                  Get instant help from our support team during business hours.
                </p>
                <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Email Support</h3>
                <p className="text-muted-foreground mb-4">
                  Send us detailed questions and receive a response within 24 hours.
                </p>
                <Button className="bg-[#8692FF] hover:bg-[#4A5AFF] text-white">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Phone Support</h3>
                <p className="text-muted-foreground mb-4">
                  For enterprise customers with priority support agreements.
                </p>
                <Button className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white">
                  Call Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Developer Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Documentation</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive API documentation, integration guides, and best practices for developers.
                  </p>
                  <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                    View Documentation
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Code Samples</h3>
                  <p className="text-muted-foreground mb-4">
                    Ready-to-use code examples and sample applications for different platforms and use cases.
                  </p>
                  <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                    Browse Examples
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Community Forum</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with other developers, share experiences, and get help from the community.
                  </p>
                  <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                    Join Forum
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">Status Page</h3>
                  <p className="text-muted-foreground mb-4">
                    Check the current status of SwaraWave services and view incident history.
                  </p>
                  <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                    Check Status
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
            Need Custom Support?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Enterprise customers can access premium support with dedicated account managers, priority response times, and custom integration assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              Contact Enterprise Sales
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              View Support Plans
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