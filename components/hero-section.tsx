import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SITE_CONFIG } from "@/src/config/site-config"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <Image
        src={SITE_CONFIG.hero.heroImage}
        alt="Maquina de tornearia CNC em operacao com faiscas de precisao"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-accent/80" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-4 py-32 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 animate-fade-in backdrop-blur-sm" role="status" aria-live="polite">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">
                {SITE_CONFIG.hero.badge}
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl animate-slide-up">
              <span className="text-balance">
                {SITE_CONFIG.hero.title.split(SITE_CONFIG.hero.highlight)[0]}
                <span className="text-primary bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">{SITE_CONFIG.hero.highlight}</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {SITE_CONFIG.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <a
                href={SITE_CONFIG.hero.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-primary to-orange-400 px-8 text-primary-foreground hover:scale-105 hover:shadow-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <Phone className="h-5 w-5" />
                  {SITE_CONFIG.hero.ctaText}
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent hover:scale-105 transition-all duration-300 backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span><strong>{SITE_CONFIG.hero.ctaSecondary}</strong></span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-primary-foreground/10 pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="transition-transform duration-300 hover:scale-110">
                <span className="font-display text-3xl font-bold text-primary bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  {SITE_CONFIG.hero.stats.experience.value}
                </span>
                <p className="text-sm text-primary-foreground/70">
                  {SITE_CONFIG.hero.stats.experience.label}
                </p>
              </div>
              <div className="h-10 w-px bg-primary-foreground/20" />
              <div className="transition-transform duration-300 hover:scale-110">
                <span className="font-display text-3xl font-bold text-primary bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  {SITE_CONFIG.hero.stats.projects.value}
                </span>
                <p className="text-sm text-primary-foreground/70">
                  {SITE_CONFIG.hero.stats.projects.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
