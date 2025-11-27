"use client"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, User } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    workEmail: "",
    role: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      
      if (result.success) {
        // Show success message
        alert('Thank you for your inquiry! Our team will contact you within 24 hours.')
        // Reset form
        setFormData({
          fullName: "",
          company: "",
          workEmail: "",
          role: "",
          message: ""
        })
      } else {
        // Show error message
        alert(result.error || 'There was an error submitting the form. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again.')
    }
  }
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D1C3F] mb-8">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's build secure proximity experiences together. Get in touch with our team to learn how SwaraWave can transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0D1C3F] mb-6">
                  Request a Demo
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-medium text-[#0D1C3F]">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-sm font-medium text-[#0D1C3F]">
                      Company *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  <div>
                    <Label htmlFor="workEmail" className="text-sm font-medium text-[#0D1C3F]">
                      Work Email *
                    </Label>
                    <Input
                      id="workEmail"
                      name="workEmail"
                      type="email"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="john@acme.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="role" className="text-sm font-medium text-[#0D1C3F]">
                      Role / Title
                    </Label>
                    <Input
                      id="role"
                      name="role"
                      type="text"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Product Manager"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-[#0D1C3F]">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      rows={4}
                      placeholder="Tell us about your use case and what you'd like to achieve with SwaraWave..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
                  >
                    Request a Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0D1C3F] mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#0D1C3F] mb-2">Email</h3>
                          <p className="text-muted-foreground mb-2">
                            For general inquiries and partnership opportunities
                          </p>
                          <a href="mailto:hello@swarawave.com" className="text-[#4A5AFF] hover:text-[#8692FF] font-medium">
                            hello@swarawave.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#0D1C3F] mb-2">Phone</h3>
                          <p className="text-muted-foreground mb-2">
                            Monday - Friday, 9:00 AM - 6:00 PM PST
                          </p>
                          <a href="tel:+1-555-0123" className="text-[#8692FF] hover:text-[#4A5AFF] font-medium">
                            +1 (555) 0123-4567
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#4A5AFF] rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#0D1C3F] mb-2">Office</h3>
                          <p className="text-muted-foreground">
                            SwaraWave Headquarters<br />
                            123 Tech Street<br />
                            San Francisco, CA 94105<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#8692FF] rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#0D1C3F] mb-2">Live Chat</h3>
                          <p className="text-muted-foreground mb-4">
                            Get instant help from our sales team during business hours
                          </p>
                          <Button variant="outline" className="border-[#8692FF] text-[#8692FF] hover:bg-[#8692FF] hover:text-white">
                            Start Chat
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Sales Regions */}
              <div>
                <h3 className="text-xl font-bold text-[#0D1C3F] mb-4">
                  Sales Regions
                </h3>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[#0D1C3F] mb-1">North America</h4>
                        <p className="text-sm text-muted-foreground">
                          <a href="mailto:na-sales@swarawave.com" className="text-[#4A5AFF] hover:text-[#8692FF]">
                            na-sales@swarawave.com
                          </a>
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0D1C3F] mb-1">Europe</h4>
                        <p className="text-sm text-muted-foreground">
                          <a href="mailto:eu-sales@swarawave.com" className="text-[#4A5AFF] hover:text-[#8692FF]">
                            eu-sales@swarawave.com
                          </a>
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0D1C3F] mb-1">Asia-Pacific</h4>
                        <p className="text-sm text-muted-foreground">
                          <a href="mailto:apac-sales@swarawave.com" className="text-[#4A5AFF] hover:text-[#8692FF]">
                            apac-sales@swarawave.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C3F] text-center mb-12">
              Support & Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Technical Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Get help with implementation, troubleshooting, and technical questions.
                  </p>
                  <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#8692FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Documentation</h3>
                  <p className="text-muted-foreground mb-4">
                    Access comprehensive guides, API references, and integration documentation.
                  </p>
                  <Button variant="outline" className="border-[#8692FF] text-[#8692FF] hover:bg-[#8692FF] hover:text-white">
                    View Docs
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#4A5AFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1C3F] mb-3">Community</h3>
                  <p className="text-muted-foreground mb-4">
                    Join our developer community and connect with other SwaraWave users.
                  </p>
                  <Button variant="outline" className="border-[#4A5AFF] text-[#4A5AFF] hover:bg-[#4A5AFF] hover:text-white">
                    Join Community
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo to see how SwaraWave's ultrasonic proximity technology can solve your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4A5AFF] hover:bg-gray-100">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A5AFF]">
              Download Whitepaper
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