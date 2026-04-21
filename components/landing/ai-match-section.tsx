"use client"

import { useEffect, useState, useRef } from "react"
import { User, Cpu, Briefcase, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

const matchingSteps = [
  "Analyzing skills...",
  "Matching experience...",
  "Finding opportunities...",
  "Calculating fit score...",
]

export function AIMatchSection() {
  const [matchScore, setMatchScore] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && matchScore < 92) {
      const timer = setTimeout(() => {
        setMatchScore((prev) => Math.min(prev + 2, 92))
      }, 30)
      return () => clearTimeout(timer)
    }
  }, [isVisible, matchScore])

  useEffect(() => {
    if (isVisible && currentStep < matchingSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [isVisible, currentStep])

  return (
    <section ref={sectionRef} className="py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#7B4FA3]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2F7BD6]/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#7B4FA3]/10 text-[#7B4FA3] px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Powered by AI
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            How Our AI Matches You
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Our intelligent matching engine analyzes your skills, experience, and preferences to find your perfect job fit.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-stretch justify-center gap-6 lg:gap-4">
          {/* Your Profile */}
          <div className={`bg-card rounded-2xl shadow-md border border-border p-6 flex-1 max-w-xs text-center flex flex-col transition-all duration-500 hover:shadow-lg ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="w-14 h-14 bg-[#0096D1]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <User className="w-7 h-7 text-[#0096D1]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base text-foreground mb-1">Your Profile</h3>
              <p className="text-xs text-muted-foreground mb-4">Skills, experience, and career goals</p>
              <div className="flex flex-wrap justify-center gap-1.5 px-2">
                {["React", "TypeScript", "Team Lead"].map((skill, i) => (
                  <div key={skill} className={`text-[11px] bg-secondary/80 rounded-full px-3 py-1 transition-all duration-500 font-medium ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className={`hidden lg:flex flex-col items-center justify-center gap-2 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#0096D1] to-[#0096D1]/60" />
              <ArrowRight className="w-6 h-6 text-[#0096D1] -ml-1" />
            </div>
            <span className="text-[11px] font-medium text-muted-foreground">Processing</span>
          </div>
          <div className="lg:hidden flex justify-center py-2">
            <ArrowRight className="w-8 h-8 text-[#0096D1] rotate-90" />
          </div>

          {/* AI Matching Engine */}
          <div className={`bg-gradient-to-br from-[#0096D1] to-[#0096D1]/80 rounded-2xl shadow-lg p-6 flex-1 max-w-xs text-center flex flex-col transition-all duration-500 hover:shadow-xl animate-pulse-glow ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-7 h-7 text-white animate-pulse" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base text-white mb-1">AI Matching Engine</h3>
              <p className="text-xs text-white/80 mb-4">Intelligent job recommendations</p>

              {/* Processing steps */}
              <div className="space-y-2 px-2">
                {matchingSteps.map((step, i) => (
                  <div
                    key={step}
                    className={`flex items-center justify-center gap-3 text-[11px] transition-all duration-300 ${i < currentStep ? 'text-white' : 'text-white/40'}`}
                  >
                    {i < currentStep ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <div className="w-3 h-3 rounded-full border border-white/40" />
                    )}
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className={`hidden lg:flex flex-col items-center justify-center gap-2 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <div className="flex items-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#0096D1] to-[#0096D1]/60" />
              <ArrowRight className="w-6 h-6 text-[#0096D1] -ml-1" />
            </div>
            <span className="text-[11px] font-medium text-muted-foreground">Matched!</span>
          </div>
          <div className="lg:hidden flex justify-center py-2">
            <ArrowRight className="w-8 h-8 text-[#0096D1] rotate-90" />
          </div>

          {/* Best Match Card */}
          <div className={`bg-card rounded-2xl shadow-md border border-border p-6 flex-1 max-w-xs text-center flex flex-col transition-all duration-500 hover:shadow-lg ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
            <div className="relative w-16 h-16 mx-auto mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8" className="text-secondary" />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#0096D1"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${matchScore * 2.64} 264`}
                  className="transition-all duration-100"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-[#0096D1]">
                  {matchScore}%
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="font-semibold text-base text-foreground mb-1 flex items-center justify-center gap-1.5">
                <Briefcase className="w-4 h-4 text-[#0096D1]" />
                Best Match
              </h3>
              <p className="text-xs text-muted-foreground mb-4">Perfectly suited for you</p>
              <div className="bg-[#0096D1]/5 rounded-xl p-4 mt-auto border border-[#0096D1]/10">
                <p className="text-xs font-bold text-foreground mb-1">Senior Frontend Engineer</p>
                <p className="text-[11px] text-muted-foreground mb-1">Xero · Auckland</p>
                <p className="text-[11px] text-[#0096D1] font-semibold">$130k - $160k NZD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
