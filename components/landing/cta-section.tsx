"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users, Briefcase } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7B4FA3]/5 via-background to-[#2F7BD6]/5" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#7B4FA3]/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#2F7BD6]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#1AA8A8]/10 rounded-full blur-xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-card rounded-3xl border border-border shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Main CTA content */}
            <div className="lg:col-span-3 p-10 lg:p-14">
              <div className="inline-flex items-center gap-2 bg-[#7B4FA3]/10 text-[#7B4FA3] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Join 120,000+ professionals
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Start Your Career Journey Today
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-xl mb-10">
                Join thousands of professionals who have found their dream careers through RootPath. Create your profile and let AI find your perfect match.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button 
                  size="lg" 
                  className="h-14 px-8 bg-[#7B4FA3] hover:bg-[#7B4FA3]/90 text-white rounded-xl text-base font-medium group shadow-lg shadow-[#7B4FA3]/25"
                >
                  Create Profile
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="h-14 px-8 border-[#2F7BD6] text-[#2F7BD6] hover:bg-[#2F7BD6]/10 rounded-xl text-base font-medium"
                >
                  Browse Jobs
                </Button>
              </div>
            </div>
            
            {/* Stats sidebar */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#7B4FA3] to-[#2F7BD6] p-10 lg:p-14 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">50,000+</div>
                    <div className="text-white/80">Active Jobs</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">8,000+</div>
                    <div className="text-white/80">Partner Companies</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">95%</div>
                    <div className="text-white/80">Match Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
