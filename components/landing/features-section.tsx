"use client"

import { Sparkles, FileText, Bell, Zap, CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "AI Job Recommendations",
    description: "Get personalized job suggestions based on your skills, experience, and career goals.",
    icon: Sparkles,
    gradient: "from-[#7B4FA3] to-[#2F7BD6]",
    benefits: ["Smart matching algorithm", "Updates in real-time", "95% accuracy rate"],
  },
  {
    title: "One-click AI Cover Letters",
    description: "Generate tailored cover letters instantly with our AI writing assistant.",
    icon: FileText,
    gradient: "from-[#2F7BD6] to-[#1AA8A8]",
    benefits: ["Personalized content", "Multiple templates", "ATS optimized"],
  },
  {
    title: "Smart Job Alerts",
    description: "Receive instant notifications when jobs matching your criteria are posted.",
    icon: Bell,
    gradient: "from-[#1AA8A8] to-[#F5A623]",
    benefits: ["Instant notifications", "Custom filters", "Email & push alerts"],
  },
  {
    title: "Fast Applications",
    description: "Apply to multiple jobs quickly with your saved profile and one-click apply.",
    icon: Zap,
    gradient: "from-[#F5A623] to-[#7B4FA3]",
    benefits: ["One-click apply", "Auto-fill forms", "Track applications"],
  },
]

export function FeaturesSection() {
  return (
    <section className="py-14 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7B4FA3]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#2F7BD6]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <p className="text-xs font-medium text-[#7B4FA3] uppercase tracking-wider mb-2">
            Powerful features
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Why Use RootPath
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed to accelerate your job search and help you land your dream role.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-card rounded-2xl border border-border p-5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150`} />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${feature.gradient} shadow-md transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-semibold text-base text-foreground mb-2 group-hover:text-[#7B4FA3] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {feature.description}
                  </p>

                  {/* Benefits list */}
                  <div className="space-y-1.5">
                    {feature.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1AA8A8] shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
