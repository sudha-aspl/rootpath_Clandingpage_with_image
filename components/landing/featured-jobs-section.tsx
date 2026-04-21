"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, DollarSign, Clock, Bookmark, BookmarkCheck, Sparkles, ArrowRight, Zap } from "lucide-react"

const featuredJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Xero",
    companyColor: "#13B5EA",
    location: "Auckland",
    salary: "$120k - $150k",
    experience: "5+ years",
    type: "Full-time",
    tags: ["React", "TypeScript", "Node.js"],
    matchScore: 94,
    urgent: true,
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Trade Me",
    companyColor: "#FF6B00",
    location: "Wellington",
    salary: "$95k - $120k",
    experience: "3+ years",
    type: "Full-time",
    tags: ["Figma", "UX Research", "Design Systems"],
    matchScore: 89,
    urgent: false,
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Fonterra",
    companyColor: "#003D7C",
    location: "Hamilton",
    salary: "$85k - $100k",
    experience: "2+ years",
    type: "Full-time",
    tags: ["SQL", "Python", "Tableau"],
    matchScore: 86,
    urgent: false,
  },
  {
    id: 4,
    title: "Marketing Manager",
    company: "Air New Zealand",
    companyColor: "#000000",
    location: "Auckland",
    salary: "$110k - $130k",
    experience: "4+ years",
    type: "Full-time",
    tags: ["Digital Marketing", "Brand Strategy", "Analytics"],
    matchScore: 91,
    urgent: true,
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Spark NZ",
    companyColor: "#FFD100",
    location: "Remote",
    salary: "$130k - $160k",
    experience: "4+ years",
    type: "Full-time",
    tags: ["AWS", "Kubernetes", "Terraform"],
    matchScore: 88,
    urgent: false,
  },
  {
    id: 6,
    title: "UX Researcher",
    company: "Fisher & Paykel",
    companyColor: "#1E3A5F",
    location: "Auckland",
    salary: "$90k - $115k",
    experience: "3+ years",
    type: "Full-time",
    tags: ["User Testing", "Interviews", "Data Analysis"],
    matchScore: 85,
    urgent: false,
  },
]

export function FeaturedJobsSection() {
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [hoveredJob, setHoveredJob] = useState<number | null>(null)

  const toggleSave = (id: number) => {
    setSavedJobs((prev) =>
      prev.includes(id) ? prev.filter((j) => j !== id) : [...prev, id]
    )
  }

  return (
    <section className="py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 text-[#F5A623] px-3 py-1.5 rounded-full text-xs font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              AI Matched for You
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Featured Jobs
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-1.5">
              Hand-picked opportunities with high match scores
            </p>
          </div>
          <Button 
            variant="outline"
            className="border-[#7B4FA3] text-[#7B4FA3] hover:bg-[#7B4FA3]/10 rounded-xl group self-start sm:self-auto"
          >
            View All Jobs
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredJobs.map((job, index) => (
            <div
              key={job.id}
              className="relative bg-card rounded-2xl border border-border p-4 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredJob(job.id)}
              onMouseLeave={() => setHoveredJob(null)}
            >
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[#7B4FA3]/5 to-[#2F7BD6]/5 transition-opacity duration-500 ${hoveredJob === job.id ? 'opacity-100' : 'opacity-0'}`} />

              {/* Urgent badge */}
              {job.urgent && (
                <div className="absolute top-3 right-3 z-10">
                  <div className="flex items-center gap-1 bg-[#F5A623] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full animate-pulse">
                    <Zap className="w-2.5 h-2.5" />
                    Urgent
                  </div>
                </div>
              )}

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 shrink-0"
                    style={{ backgroundColor: `${job.companyColor}15` }}
                  >
                    <span className="font-bold text-base" style={{ color: job.companyColor }}>
                      {job.company.charAt(0)}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleSave(job.id)}
                    className="p-1.5 rounded-lg hover:bg-secondary transition-all hover:scale-110"
                    aria-label={savedJobs.includes(job.id) ? "Unsave job" : "Save job"}
                  >
                    {savedJobs.includes(job.id) ? (
                      <BookmarkCheck className="w-4 h-4 text-[#7B4FA3]" />
                    ) : (
                      <Bookmark className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-1.5 mb-2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-[#7B4FA3]/10 to-[#1AA8A8]/10 px-2 py-0.5 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7B4FA3] to-[#1AA8A8] animate-pulse" />
                    <span className="text-[11px] font-semibold bg-gradient-to-r from-[#7B4FA3] to-[#1AA8A8] bg-clip-text text-transparent">
                      {job.matchScore}% match
                    </span>
                  </div>
                </div>

                <h3 className="font-semibold text-base text-foreground mb-0.5 group-hover:text-[#7B4FA3] transition-colors line-clamp-1">
                  {job.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{job.company}</p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2F7BD6]" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-[#1AA8A8]" />
                    <span className="font-medium text-foreground">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#F5A623]" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {job.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-[#2F7BD6]/10 text-[#2F7BD6] hover:bg-[#2F7BD6]/20 transition-colors text-[10px] px-2 py-0 font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  size="sm"
                  className="w-full bg-[#7B4FA3] hover:bg-[#7B4FA3]/90 text-white rounded-lg h-9 text-sm group/btn"
                >
                  Apply Now
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
