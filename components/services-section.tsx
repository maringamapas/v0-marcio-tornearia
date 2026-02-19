import { Cog, Wrench, Settings, Ruler, CircleDot, Hammer } from "lucide-react"

const services = [
  {
    icon: Cog,
    title: "Tornearia CNC",
    description:
      "Usinagem de peças complexas com torno CNC de alta precisão. Tolerâncias apertadas e repetibilidade garantida para produção em série ou peças unitárias.",
  },
  {
    icon: Settings,
    title: "Tornearia Convencional",
    description:
      "Torneamento manual para peças sob medida, reparos e protótipos. Flexibilidade e experiência para atender demandas específicas do seu projeto.",
  },
  {
    icon: Wrench,
    title: "Fresagem",
    description:
      "Fresamento de peças planas, canais, engrenagens e perfis complexos. Equipamentos modernos para garantir qualidade em cada operação.",
  },
  {
    icon: Ruler,
    title: "Usinagem Sob Medida",
    description:
      "Desenvolvimento de peças especiais conforme desenho técnico ou amostra. Do projeto ao produto final com acompanhamento dedicado.",
  },
  {
    icon: CircleDot,
    title: "Retifica e Acabamento",
    description:
      "Serviços de retifica cilíndrica e plana para acabamento superficial de alta qualidade. Precisão micrométrica para aplicações críticas.",
  },
  {
    icon: Hammer,
    title: "Manutenção Industrial",
    description:
      "Fabricação e reparo de peças para máquinas industriais. Atendimento ágil para minimizar o tempo de parada da sua produção.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nossos Serviços
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Soluções completas em usinagem
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Oferecemos uma ampla gama de serviços de usinagem para atender as
            necessidades da sua indústria com qualidade e eficiência.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-orange-400/10 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-400 group-hover:scale-110 group-hover:rotate-3">
                <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
