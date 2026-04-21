"use client"

import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Xero",
    content: "RootPath's AI matching found me my dream job in just two weeks. The match score was spot-on - the role aligned perfectly with my skills and career goals.",
    image: "/images/testimonial-sarah.jpg",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Product Manager at Trade Me",
    content: "The one-click cover letter feature saved me hours. I could apply to multiple positions quickly while maintaining quality applications.",
    image: "/images/testimonial-james.jpg",
    rating: 5,
  },
  {
    name: "Emily Thompson",
    role: "Data Analyst at Fonterra",
    content: "I was skeptical about AI job matching, but RootPath proved me wrong. The recommendations were incredibly relevant and helped me transition into data science.",
    image: "/images/testimonial-emily.jpg",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-medium text-[#7B4FA3] uppercase tracking-wider mb-2">
            Real success stories
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 text-balance">
            Professionals Who Found Their Path
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Join thousands who have transformed their careers through RootPath.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-card rounded-2xl border border-border p-5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 hover:border-[#7B4FA3]/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-9 h-9 bg-gradient-to-br from-[#7B4FA3] to-[#2F7BD6] rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                <Quote className="w-4 h-4 text-white" />
              </div>

              <div className="flex items-center gap-0.5 mb-3 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#F5A623] text-[#F5A623]"
                  />
                ))}
              </div>

              <p className="text-sm text-foreground mb-4 leading-relaxed line-clamp-4">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7B4FA3] to-[#2F7BD6] rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={44}
                    height={44}
                    className="relative w-11 h-11 rounded-full object-cover border-2 border-card"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-foreground truncate">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
