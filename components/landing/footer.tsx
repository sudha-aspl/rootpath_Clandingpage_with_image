"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

const footerLinks = {
  forCandidates: [
    { name: "Browse Jobs", href: "#" },
    { name: "Create Profile", href: "#" },
    { name: "Job Alerts", href: "#" },
    { name: "Career Resources", href: "#" },
  ],
  forEmployers: [
    { name: "Post a Job", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Talent Search", href: "#" },
    { name: "Employer Resources", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white rounded-xl px-4 py-2 mb-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src="/images/rootpath-logo.png"
                alt="RootPath - Intelligent Hiring. Instant Results"
                width={140}
                height={42}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-background/70 text-sm mb-4">
              AI-powered job matching for New Zealand professionals.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-[#7B4FA3] transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* For Candidates */}
          <div>
            <h4 className="font-semibold mb-4">For Candidates</h4>
            <ul className="space-y-3">
              {footerLinks.forCandidates.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="font-semibold mb-4">For Employers</h4>
            <ul className="space-y-3">
              {footerLinks.forEmployers.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <p className="text-background/50 text-sm text-center">
            © {new Date().getFullYear()} RootPath. All rights reserved. Made with care in New Zealand.
          </p>
        </div>
      </div>
    </footer>
  )
}
