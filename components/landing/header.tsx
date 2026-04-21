"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Find Jobs", href: "#" },
  { name: "Companies", href: "#" },
  { name: "Resources", href: "#" },
  { name: "For Employers", href: "#" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/rootpath-logo.png"
              alt="RootPath - Intelligent Hiring. Instant Results"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7B4FA3] to-[#2F7BD6] group-hover:w-1/2 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-foreground hover:bg-secondary rounded-xl"
            >
              Sign In
            </Button>
            <Button className="bg-[#0096D1] hover:bg-[#0096D1]/90 text-white rounded-xl shadow-lg shadow-[#7B4FA3]/25 hover:shadow-[#7B4FA3]/40 transition-shadow">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="px-4 py-4 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-foreground hover:bg-secondary rounded-xl transition-all hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 space-y-2">
            <Button
              variant="outline"
              className="w-full justify-center rounded-xl"
            >
              Sign In
            </Button>
            <Button className="w-full justify-center bg-[#7B4FA3] hover:bg-[#7B4FA3]/90 text-white rounded-xl">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
