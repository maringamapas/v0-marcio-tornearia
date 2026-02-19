import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, Globe, MessageCircle, Users, Zap } from "lucide-react"

export function ModelSection() {
  const benefits = [
    {
      icon: Monitor,
      title: "Design Moderno",
      description: "Visual profissional e tecnológico que transmite confiança",
    },
    {
      icon: Smartphone,
      title: "100% Responsivo",
      description: "Funciona perfeitamente em celulares, tablets e computadores",
    },
    {
      icon: Globe,
      title: "Otimizado para SEO",
      description: "Preparado para aparecer nas primeiras posições do Google",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Integrado",
      description: "Botões e formulários que direcionam leads para seu WhatsApp",
    },
    {
      icon: Users,
      title: "Foco em Conversão",
      description: "Estrutura pensada para transformar visitantes em clientes",
    },
    {
      icon: Zap,
      title: "Carregamento Rápido",
      description: "Site otimizado para carregar em segundos",
    },
  ]

  return (
    <section className="py-6 md:py-8 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-6">
          <Badge
            variant="secondary"
            className="mb-2 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1 text-xs font-semibold"
          >
            ✨ MODELO DEMONSTRATIVO
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-display mb-2 text-balance">
            Este é um <span className="text-primary">Modelo de Site</span> para Tornearias
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto text-pretty">
            Template profissional para empresas de usinagem e tornearia. Totalmente personalizável com sua marca e serviços.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          <div className="grid grid-cols-2 gap-2">
            <div className="relative h-24 md:h-32 rounded-md overflow-hidden">
              <Image
                src="/images/model-1.jpg"
                alt="Profissional operando torno CNC"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-24 md:h-32 rounded-md overflow-hidden">
              <Image
                src="/images/model-2.jpg"
                alt="Inspeção de peça usinada com paquímetro"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 relative h-24 md:h-32 rounded-md overflow-hidden">
              <Image
                src="/images/model-3.jpg"
                alt="Processo de tornearia industrial"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 bg-emerald-600 rounded-md p-4 md:p-6 text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
              <div className="text-base md:text-lg font-semibold mb-3">
                Personalizável
              </div>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white font-semibold"
                asChild
              >
                <a href="#contato">Pronto para usar!</a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold font-display mb-4">
              O que você recebe neste modelo:
            </h3>
            <div className="space-y-2.5">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex gap-2.5">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-0">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
