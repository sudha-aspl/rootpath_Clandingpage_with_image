"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, ArrowRight, Star, ChevronDown, Check } from "lucide-react"

const rotatingTexts = [
  "Software Engineer",
  "Product Designer",
  "Data Scientist",
  "DevOps Engineer",
]

const locations = [
  { value: "auckland", label: "Auckland" },
  { value: "wellington", label: "Wellington" },
  { value: "christchurch", label: "Christchurch" },
  { value: "hamilton", label: "Hamilton" },
  { value: "tauranga", label: "Tauranga" },
  { value: "remote", label: "Remote" },
]

export function HeroSection() {
  const [keyword, setKeyword] = useState("")
  const [location, setLocation] = useState<{ value: string; label: string } | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Rotating text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
        setIsAnimating(false)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-background lg:h-[calc(100vh-4.5rem)] py-8 lg:py-0">
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dot-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes orb-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -40px) scale(1.1); }
        }
        @keyframes orb-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.05); }
        }
        @keyframes orb-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 40px) scale(0.95); }
        }
        @keyframes dropdown-in {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient-text {
          background: linear-gradient(90deg, #7B4FA3, #2F7BD6, #1AA8A8, #F5A623, #7B4FA3);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-fade-up { animation: fade-up 0.7s ease-out forwards; opacity: 0; }
        .animate-dot-pulse { animation: dot-pulse 2s ease-in-out infinite; }
        .shimmer-border {
          background: linear-gradient(90deg, #7B4FA3, #2F7BD6, #1AA8A8, #F5A623, #7B4FA3);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        .orb-1 { animation: orb-drift-1 14s ease-in-out infinite; }
        .orb-2 { animation: orb-drift-2 18s ease-in-out infinite; }
        .orb-3 { animation: orb-drift-3 16s ease-in-out infinite; }
        .mesh-bg {
          background:
            radial-gradient(ellipse 60% 50% at 15% 20%, rgba(0, 150, 209, 0.05), transparent 60%),
            radial-gradient(ellipse 55% 45% at 85% 15%, rgba(0, 150, 209, 0.04), transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 85%, rgba(0, 150, 209, 0.05), transparent 60%),
            radial-gradient(ellipse 50% 40% at 20% 90%, rgba(0, 150, 209, 0.04), transparent 60%);
        }
        .dropdown-animate {
          animation: dropdown-in 0.15s ease-out forwards;
        }
      `}</style>

      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0096D1]/[0.02] via-background to-[#0096D1]/[0.01]" />
      <div className="absolute inset-0 mesh-bg opacity-30" />

      {/* Soft drifting gradient orbs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[420px] h-[420px] rounded-full blur-3xl opacity-[0.08] orb-1 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0096D1, transparent 70%)" }}
      />
      <div
        className="absolute top-[5%] right-[-8%] w-[480px] h-[480px] rounded-full blur-3xl opacity-[0.07] orb-2 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0096D1, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-15%] left-[30%] w-[520px] h-[520px] rounded-full blur-3xl opacity-[0.06] orb-3 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0096D1, transparent 70%)" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 items-center">

          {/* Left: Text + Search */}
          <div className="text-center lg:text-left">

            {/* Heading */}
            <h1
              className="font-outfit text-xl sm:text-2xl lg:text-[48px] font-bold text-foreground mb-6 leading-[1.2] tracking-tight animate-fade-up"
              style={{
                animationDelay: "0.1s",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <span>
                Find your dream{" "}
                <span
                  className={`animate-gradient-text transition-all duration-500 inline-block px-1 ${isAnimating
                    ? "opacity-0 -translate-y-2 blur-sm"
                    : "opacity-100 translate-y-0 blur-0"
                    }`}
                >
                  {rotatingTexts[currentTextIndex]}
                </span>
              </span>
              <br className="hidden lg:block" />
              <span>role faster with AI.</span>
            </h1>

            {/* Subheading */}
            <p
              className="font-outfit text-xs sm:text-sm text-muted-foreground/80 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Discover jobs matched to your skills and career goals at leading
              companies across New Zealand.
            </p>

            {/* ✅ Search Bar — fully custom select, no Radix */}
            <div
              className="relative max-w-2xl mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="absolute -inset-1 rounded-full opacity-60 blur-md shimmer-border" />
              <div className="relative bg-card rounded-full shadow-2xl border border-border/50 p-2">
                <div className="flex flex-col md:flex-row md:items-stretch gap-2">

                  {/* Keyword input */}
                  <div className="flex-1 min-w-0 flex items-center bg-secondary/40 hover:bg-secondary/60 focus-within:bg-secondary/70 focus-within:ring-2 focus-within:ring-primary/20 transition-all rounded-full px-3 group">
                    <Search className="w-4 h-4 shrink-0 transition-colors text-muted-foreground/30 group-focus-within:text-primary" />
                    <Input
                      type="text"
                      placeholder="Job title or keyword"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 h-11 text-sm w-full placeholder:text-muted-foreground/30 placeholder:opacity-100"
                    />
                  </div>

                  {/* Divider on desktop */}
                  <div className="hidden md:block w-px self-stretch bg-border/40 my-2" />

                  {/* ✅ Custom Location Dropdown — full placeholder opacity control */}
                  <div
                    ref={dropdownRef}
                    className="relative w-full md:w-44 lg:w-48 shrink-0"
                  >
                    {/* Trigger button */}
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((o) => !o)}
                      className={`
                        w-full h-11 flex items-center gap-2 px-3 rounded-full text-sm transition-all
                        bg-secondary/40 hover:bg-secondary/60
                        ${dropdownOpen ? "bg-secondary/70 ring-2 ring-primary/20" : ""}
                      `}
                    >
                      <MapPin
                        className={`w-4 h-4 shrink-0 transition-colors ${dropdownOpen ? "text-primary" : "text-muted-foreground/30"
                          }`}
                      />
                      {/* ✅ Placeholder vs selected value — direct color control */}
                      <span
                        className="flex-1 text-left truncate"
                        style={{
                          color: location
                            ? "hsl(var(--foreground))"
                            : "rgba(100, 116, 139, 0.35)",   // same visual weight as input placeholder
                        }}
                      >
                        {location ? location.label : "Location"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 text-muted-foreground/40 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {/* Dropdown list */}
                    {dropdownOpen && (
                      <div className="dropdown-animate absolute top-[calc(100%+6px)] left-0 w-full z-50 bg-card border border-border/60 rounded-xl shadow-xl overflow-hidden">
                        {locations.map((loc) => (
                          <button
                            key={loc.value}
                            type="button"
                            onClick={() => {
                              setLocation(loc)
                              setDropdownOpen(false)
                            }}
                            className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-left hover:bg-secondary/60 transition-colors"
                          >
                            <span className={location?.value === loc.value ? "text-primary font-medium" : "text-foreground"}>
                              {loc.label}
                            </span>
                            {location?.value === loc.value && (
                              <Check className="w-3.5 h-3.5 text-primary" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Search button */}
                  <Button
                    size="lg"
                    className="h-11 w-full md:w-auto px-8 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
                    style={{
                      background: "linear-gradient(90deg, #0096D1, #0096D1, #0096D1)",
                    }}
                  >
                    <Search className="w-4 h-4 md:hidden mr-2" />
                    <span>Search</span>
                    <ArrowRight className="hidden md:inline-block w-4 h-4 ml-2" />
                  </Button>

                </div>
              </div>
            </div>

            {/* Popular searches */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-4 animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="text-sm text-muted-foreground mr-1">Trending:</span>
              {["Remote Dev", "Auckland Tech", "Product Designer", "AI Engineer"].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-card/60 backdrop-blur-sm border border-border/50 rounded-full text-muted-foreground hover:text-[#7B4FA3] hover:border-[#7B4FA3]/30 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-5 animate-fade-up"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-dot-pulse" />
                <span className="text-sm font-medium text-muted-foreground">
                  2,400+ jobs this week
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-background"
                      style={{
                        background: `linear-gradient(135deg, ${["#7B4FA3", "#2F7BD6", "#1AA8A8", "#F5A623"][i - 1]
                          }, ${["#2F7BD6", "#1AA8A8", "#F5A623", "#7B4FA3"][i - 1]
                          })`,
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 ml-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F5A623] text-[#F5A623]" />
                  ))}
                  <span className="text-sm font-semibold text-foreground ml-1">4.9</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Professional Image */}
          <div
            className="relative hidden lg:block animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div
              className="absolute -inset-10 rounded-[3rem] opacity-[0.08] blur-3xl"
              style={{ background: "linear-gradient(135deg, #0096D1, #0096D1, #0096D1)" }}
            />
            <div className="relative aspect-[5/6] max-h-[calc(100vh-8rem)] mx-auto rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 bg-card">
              <Image
                src="/images/hero-professional.jpg"
                alt="Professional using RootPath to find their dream job"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0096D1]/5 via-transparent to-[#0096D1]/5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}