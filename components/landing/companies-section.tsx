"use client"

const companies = [
  { name: "Xero", jobs: 124, color: "#13B5EA" },
  { name: "Fisher & Paykel", jobs: 89, color: "#1E3A5F" },
  { name: "Fonterra", jobs: 156, color: "#003D7C" },
  { name: "Air New Zealand", jobs: 67, color: "#000000" },
  { name: "Spark NZ", jobs: 98, color: "#FFD100" },
  { name: "Trade Me", jobs: 45, color: "#FF6B00" },
  { name: "Rocket Lab", jobs: 78, color: "#00AEEF" },
  { name: "Datacom", jobs: 112, color: "#E31837" },
  { name: "ANZ Bank", jobs: 203, color: "#007DBA" },
  { name: "Vodafone NZ", jobs: 87, color: "#E60000" },
  { name: "Genesis Energy", jobs: 54, color: "#00A9CE" },
  { name: "Mainfreight", jobs: 91, color: "#003366" },
]

export function CompaniesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-secondary/30">
      <div className="max-w-6xl mx-auto mb-12">
        <div className="text-center">
          <p className="text-sm font-medium text-[#7B4FA3] uppercase tracking-wider mb-3">
            Trusted by industry leaders
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            Top Companies Hiring Now
          </h2>
        </div>
      </div>

      {/* Infinite scrolling marquee - Row 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-3"
            >
              <div className="bg-card rounded-2xl border border-border px-6 py-4 flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:border-[#7B4FA3]/30 cursor-pointer group min-w-[200px]">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${company.color}15` }}
                >
                  <span className="font-bold text-lg" style={{ color: company.color }}>
                    {company.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-sm">{company.name}</h3>
                  <p className="text-xs text-[#7B4FA3] font-medium">{company.jobs} open roles</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite scrolling marquee - Row 2 (reverse direction) */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
        
        <div className="flex animate-marquee-reverse">
          {[...companies.slice().reverse(), ...companies.slice().reverse()].map((company, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-3"
            >
              <div className="bg-card rounded-2xl border border-border px-6 py-4 flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:border-[#7B4FA3]/30 cursor-pointer group min-w-[200px]">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${company.color}15` }}
                >
                  <span className="font-bold text-lg" style={{ color: company.color }}>
                    {company.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-sm">{company.name}</h3>
                  <p className="text-xs text-[#7B4FA3] font-medium">{company.jobs} open roles</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
