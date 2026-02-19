import Image from "next/image"
import { Target, Award, Clock } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Precisão",
    description:
      "Tolerâncias rigorosas e acabamento impecável em cada peça usinada.",
  },
  {
    icon: Award,
    title: "Qualidade",
    description:
      "Materiais de primeira linha e controle de qualidade em cada etapa.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description:
      "Compromisso absoluto com prazos para manter sua produção ativa.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative group">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
              <Image
                src="/images/about-tornearia.jpg"
                alt="Profissional da Prime Tornearia trabalhando em equipamento de usinagem"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gradient-to-br from-primary to-orange-400 p-6 text-primary-foreground lg:block shadow-xl transition-transform duration-300 hover:scale-110 hover:rotate-2">
              <span className="font-display text-4xl font-bold">15+</span>
              <p className="text-sm font-medium text-primary-foreground/90">
                Anos no mercado
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Quem Somos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Excelência em usinagem desde o primeiro giro
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A <strong className="text-foreground">Prime Tornearia</strong>{" "}
              nasceu da paixão por transformar metal em soluções de alta
              precisão. Localizada em{" "}
              <strong className="text-foreground">Maringá - PR</strong>,
              atendemos indústrias de diversos segmentos com serviços de
              tornearia convencional e CNC, fresagem e usinagem sob medida.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nossa equipe altamente qualificada, combinada com maquinário
              moderno, garante peças com tolerâncias rigorosas, acabamento
              impecável e entrega dentro do prazo. Somos parceiros da sua
              produção.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {values.map((value, index) => (
                <div key={value.title} className="flex flex-col gap-3 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-orange-400/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-400">
                    <value.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
