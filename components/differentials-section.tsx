import { Shield, Zap, Users, TrendingUp } from "lucide-react"

const differentials = [
  {
    icon: Shield,
    number: "01",
    title: "Controle de Qualidade Rigoroso",
    description:
      "Inspeção dimensional em cada etapa do processo com instrumentos de medição calibrados. Garantimos que cada peça atenda as especificações do projeto.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Agilidade na Entrega",
    description:
      "Estrutura otimizada para atender demandas urgentes sem comprometer a qualidade. Entregas rápidas para manter sua linha de produção ativa.",
  },
  {
    icon: Users,
    number: "03",
    title: "Equipe Especializada",
    description:
      "Profissionais com anos de experiência em usinagem de precisão, capacitados para interpretar desenhos técnicos e oferecer soluções inteligentes.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Tecnologia de Ponta",
    description:
      "Parque de máquinas moderno com tornos CNC, fresas e equipamentos de medição de última geração para resultados consistentes e precisos.",
  },
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Por Que Nos Escolher
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Diferenciais que fazem a diferença
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {differentials.map((item, index) => (
            <div
              key={item.number}
              className="flex gap-6 rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <span className="font-display text-5xl font-bold bg-gradient-to-br from-primary/30 to-orange-400/30 bg-clip-text text-transparent">
                  {item.number}
                </span>
              </div>
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-orange-400/10 transition-all duration-300 hover:scale-110 hover:rotate-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
