"use client"

import { useEffect, useState, useRef } from "react"
import {
  Monitor,
  TrendingUp,
  DollarSign,
  Heart,
  Palette,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const categories = [
  { name: "Information Technology", icon: Monitor, count: 12450, color: "#7B4FA3", trending: "+15%" },
  { name: "Marketing & Sales", icon: TrendingUp, count: 8230, color: "#2F7BD6", trending: "+8%" },
  { name: "Finance", icon: DollarSign, count: 6890, color: "#1AA8A8", trending: "+12%" },
  { name: "Healthcare", icon: Heart, count: 9120, color: "#F5A623", trending: "+22%" },
  { name: "Design", icon: Palette, count: 4560, color: "#7B4FA3", trending: "+18%" },
  { name: "Engineering", icon: Wrench, count: 7340, color: "#2F7BD6", trending: "+10%" },
  { name: "Data Science", icon: Monitor, count: 3890, color: "#1AA8A8", trending: "+28%" },
  { name: "Operations", icon: Wrench, count: 5120, color: "#F5A623", trending: "+6%" },
]

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    
    let start = 0
    const duration = 1500
    const steps = 40
    const increment = value / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(start))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return <span ref={ref}>{displayValue.toLocaleString()}</span>
}

export function CategoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.8
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#7B4FA3]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#2F7BD6]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <p className="text-xs font-medium text-[#7B4FA3] uppercase tracking-wider mb-2">
            Browse by industry
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Explore Job Categories
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Browse opportunities across various industries and find your perfect career path.
          </p>
        </div>

        <div className="relative">
          {/* Carousel nav buttons */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll categories left"
            className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-card border border-border rounded-full shadow-lg hover:shadow-xl hover:bg-secondary transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll categories right"
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-card border border-border rounded-full shadow-lg hover:shadow-xl hover:bg-secondary transition-all"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Edge fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-secondary/30 to-transparent z-10" />

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={category.name}
                  className="snap-start shrink-0 w-[160px] sm:w-[180px] bg-card rounded-2xl border border-border p-4 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer group relative overflow-hidden text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${category.color}10, ${category.color}03)` }}
                  />

                  {/* Trending badge */}
                  <div className="absolute top-2 right-2 flex items-center gap-0.5 bg-green-500/10 text-green-600 text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                    <TrendingUp className="w-2.5 h-2.5" />
                    {category.trending}
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: category.color }} />
                    </div>

                    <h3 className="font-semibold text-xs sm:text-sm text-foreground mb-1 leading-tight group-hover:text-[#7B4FA3] transition-colors line-clamp-2 min-h-[2.5em]">
                      {category.name}
                    </h3>

                    <p className="text-xs text-muted-foreground">
                      <span className="font-bold text-sm" style={{ color: category.color }}>
                        <AnimatedNumber value={category.count} />
                      </span>
                      <span className="ml-1">jobs</span>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
