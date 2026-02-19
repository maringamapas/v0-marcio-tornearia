import Image from "next/image"
import { Sparkles, Activity, Gauge, Cog, Plus, Monitor, Smartphone, Globe, MessageCircle, Users, Zap } from "lucide-react"

export function Section2() {
  const projects = [
    {
      title: "Peças CNC",
      category: "Precisão",
      image: "/images/project-1.jpg",
      icon: Sparkles,
    },
    {
      title: "Tornearia",
      category: "Industrial",
      image: "/images/project-2.jpg",
      icon: Gauge,
    },
    {
      title: "Controle de Qualidade",
      category: "Inspeção",
      image: "/images/project-3.jpg",
      icon: Activity,
    },
    {
      title: "Fresagem CNC",
      category: "Automação",
      image: "/images/project-4.jpg",
      icon: Cog,
    },
  ]

  const services = [
    "Usinagem de Precisão",
    "Tornearia CNC",
    "Fresagem e Retifica",
  ]

  return (
    <section
      id="approach"
      className="sm:p-8 bg-secondary/30 border-border border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 max-w-6xl mx-auto"
    >
      {/* Background dividers */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">
        {/* Left: Heading + copy */}
        <div className="flex flex-col justify-between min-h-full">
          <div>
            <span className="inline-block px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
              ✨ MODELO DEMONSTRATIVO
            </span>
            <h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-foreground mt-2 tracking-tight font-display">
              Este é um <span className="text-primary">Modelo de Site</span> para Tornearias
            </h2>

            {/* subtle plus markers with divider */}
            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-border via-border to-border" />
              </div>
              <div className="hidden sm:grid grid-cols-3 gap-6 text-muted-foreground bg-secondary/30 px-4 relative">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Plus className="h-4 w-4" strokeWidth={1.5} />
                    <span className="text-sm font-normal">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full mt-10">
            <h3 className="text-lg font-bold text-foreground mb-6">
              O que você recebe neste modelo:
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 group animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-orange-400/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-primary group-hover:to-orange-400">
                    <Monitor className="w-5 h-5 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">Design Moderno</h4>
                  <p className="text-sm text-muted-foreground">Visual profissional e tecnológico que transmite confiança</p>
                </div>
              </div>
              
              <div className="flex gap-3 group animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-orange-400/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-primary group-hover:to-orange-400">
                    <Smartphone className="w-5 h-5 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">100% Responsivo</h4>
                  <p className="text-sm text-muted-foreground">Funciona perfeitamente em celulares, tablets e computadores</p>
                </div>
              </div>
              
              <div className="flex gap-3 group animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-orange-400/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-primary group-hover:to-orange-400">
                    <Globe className="w-5 h-5 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">Otimizado para SEO</h4>
                  <p className="text-sm text-muted-foreground">Preparado para aparecer nas primeiras posições do Google</p>
                </div>
              </div>
              
              <div className="flex gap-3 group animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-orange-400/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-primary group-hover:to-orange-400">
                    <MessageCircle className="w-5 h-5 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">WhatsApp Integrado</h4>
                  <p className="text-sm text-muted-foreground">Botões e formulários que direcionam leads para seu WhatsApp</p>
                </div>
              </div>
              
              <div className="flex gap-3 group animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-orange-400/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-primary group-hover:to-orange-400">
                    <Users className="w-5 h-5 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">Foco em Conversão</h4>
                  <p className="text-sm text-muted-foreground">Estrutura pensada para transformar visitantes em clientes</p>
                </div>
              </div>
              
              <div className="flex gap-3 group animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-orange-400/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-primary group-hover:to-orange-400">
                    <Zap className="w-5 h-5 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">Carregamento Rápido</h4>
                  <p className="text-sm text-muted-foreground">Site otimizado para carregar em segundos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Project grid */}
        <div className="grid grid-cols-2 gap-4 relative">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {/* Project 1 */}
            <article className="relative overflow-hidden aspect-[4/5] rounded-2xl border border-border group shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/90 text-foreground border border-border backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {(() => {
                    const Icon = projects[0].icon
                    return <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  })()}
                </span>
              </div>
            </article>

            {/* Project 3 */}
            <article className="relative overflow-hidden aspect-[4/3] rounded-2xl border border-border group shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <Image
                src={projects[2].image}
                alt={projects[2].title}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/90 text-foreground border border-border backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {(() => {
                    const Icon = projects[2].icon
                    return <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  })()}
                </span>
              </div>
            </article>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {/* Project 2 */}
            <article className="relative overflow-hidden aspect-[4/3] rounded-2xl border border-border group shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <Image
                src={projects[1].image}
                alt={projects[1].title}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/90 text-foreground border border-border backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {(() => {
                    const Icon = projects[1].icon
                    return <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  })()}
                </span>
              </div>
            </article>

            {/* Project 4 */}
            <article className="relative overflow-hidden aspect-[4/5] rounded-2xl border border-border group shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <Image
                src={projects[3].image}
                alt={projects[3].title}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/90 text-foreground border border-border backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {(() => {
                    const Icon = projects[3].icon
                    return <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  })()}
                </span>
              </div>
            </article>
          </div>

          {/* CTA Section Below Images */}
          <div className="col-span-2 mt-6 text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-muted-foreground mb-6">
              Converse com nosso time e descubra como um site profissional pode aumentar suas vendas.
            </p>
            <a
              href="https://wa.me/5544999324635?text=Quero%20um%20site%20assim!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Quero um site assim!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
