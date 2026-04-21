import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { AIMatchSection } from "@/components/landing/ai-match-section"
import { CompaniesSection } from "@/components/landing/companies-section"
import { CategoriesSection } from "@/components/landing/categories-section"
import { FeaturedJobsSection } from "@/components/landing/featured-jobs-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { StatsSection } from "@/components/landing/stats-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <AIMatchSection />
        <CompaniesSection />
        <CategoriesSection />
        <FeaturedJobsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <StatsSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
