"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection((current) => (current === section ? null : section))
  }

  return (
    <>
      {/* Desktop Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <img
              src="/logo-swarawave.png"
              alt="SwaraWave Logo"
              className="h-8 w-auto"
            />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {/* Products */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-[#4A5AFF]">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/products"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            SwaraWave Products
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Ultrasonic SDK and Engagement Platform for proximity
                            intelligence
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/products/sdk"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Ultrasonic SDK
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Proximity & Identity Engine
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/products/capabilities"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          SDK Capabilities
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Transaction Controls, Fraud Protection, UX
                          Orchestration
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/products/platform"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Engagement Platform
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Experience Orchestration & Loyalty
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industry Solutions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-[#4A5AFF]">
                  Industry Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/solutions/finance"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Finance
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Secure authentication and proximity-driven
                          transactions
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/solutions/retail"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Retail & FMCG
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Aisle-based engagement and loyalty activation
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/solutions/mobility"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Mobility & Transport
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Ticketless boarding and passenger verification
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-[#4A5AFF]">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resources/blog"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Blog
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Insights on proximity technology and innovation
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resources/demos"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Product Demos
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          See SwaraWave in action
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resources/press"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          News & Press
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Latest announcements and coverage
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resources/technology"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Technology Overview
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Understanding ultrasonic proximity
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resources/support"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Support / FAQs
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Get help and find answers
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Company */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-[#4A5AFF]">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/company/about"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          About SwaraWave
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Our mission and vision
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/company/team"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Team
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Leadership and core team
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/company/awards"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Awards & Recognition
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Industry recognition and certifications
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/company/careers"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Careers
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Join our team
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA: Request a Demo → /contact */}
          <Button
            asChild
            className="hidden md:inline-flex bg-[#4A5AFF] hover:bg-[#8692FF] text-white"
          >
            <Link href="/contact">Request a Demo</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center px-4">
                  <img
                    src="/logo-swarawave.png"
                    alt="SwaraWave Logo"
                    className="h-8 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col space-y-4">
                {/* Products section */}
                <MobileSection
                  label="Products"
                  isOpen={openSection === "products"}
                  onToggle={() => toggleSection("products")}
                >
                  <Link
                    href="/products"
                    className="block text-sm font-medium hover:text-[#4A5AFF]"
                  >
                    SwaraWave Products
                  </Link>
                  <Link
                    href="/products/sdk"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    Ultrasonic SDK
                  </Link>
                  <Link
                    href="/products/capabilities"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    SDK Capabilities
                  </Link>
                  <Link
                    href="/products/platform"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    Engagement Platform
                  </Link>
                </MobileSection>

                {/* Industry Solutions section */}
                <MobileSection
                  label="Industry Solutions"
                  isOpen={openSection === "industry"}
                  onToggle={() => toggleSection("industry")}
                >
                  <Link
                    href="/solutions/finance"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    Finance
                  </Link>
                  <Link
                    href="/solutions/retail"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    Retail &amp; FMCG
                  </Link>
                  <Link
                    href="/solutions/mobility"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    Mobility &amp; Transport
                  </Link>
                </MobileSection>

                {/* Resources section */}
                <MobileSection
                  label="Resources"
                  isOpen={openSection === "resources"}
                  onToggle={() => toggleSection("resources")}
                >
                  <Link
                    href="/resources/blog"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/resources/demos"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    Product Demos
                  </Link>
                  <Link
                    href="/resources/press"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    News &amp; Press
                  </Link>
                  <Link
                    href="/resources/technology"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    Technology Overview
                  </Link>
                  <Link
                    href="/resources/support"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    Support / FAQs
                  </Link>
                </MobileSection>

                {/* Company section */}
                <MobileSection
                  label="Company"
                  isOpen={openSection === "company"}
                  onToggle={() => toggleSection("company")}
                >
                  <Link
                    href="/company/about"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    About SwaraWave
                  </Link>
                  <Link
                    href="/company/team"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    Team
                  </Link>
                  <Link
                    href="/company/awards"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    Awards &amp; Recognition
                  </Link>
                  <Link
                    href="/company/careers"
                    className="block text-sm hover:text-[#4A5AFF]"
                  >
                    Careers
                  </Link>
                </MobileSection>

                {/* Contact + CTA (not collapsible) */}
                <Link
                  href="/contact"
                  className="text-lg font-semibold hover:text-[#4A5AFF]"
                >
                  Contact
                </Link>

                {/* Mobile CTA: Request a Demo → /contact */}
                <Button
                  asChild
                  className="bg-[#4A5AFF] hover:bg-[#8692FF] text-white mt-2"
                >
                  <Link href="/contact">Request a Demo</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}

type MobileSectionProps = {
  label: string
  isOpen: boolean
  onToggle: () => void
  children: ReactNode
}

function MobileSection({
  label,
  isOpen,
  onToggle,
  children,
}: MobileSectionProps) {
  return (
    <div className="border-b pb-2">
      <button
        type="button"
        className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold hover:text-[#4A5AFF]"
        onClick={onToggle}
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-4 w-4 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="mt-2 space-y-2 pl-2">{children}</div>}
    </div>
  )
}