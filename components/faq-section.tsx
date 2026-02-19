import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quais tipos de materiais voces usinam?",
    answer:
      "Trabalhamos com uma ampla variedade de materiais, incluindo aco carbono, aco inoxidavel, aluminio, latao, bronze, cobre, nylon, poliacetal e outros plasticos de engenharia. Consulte-nos para materiais especificos.",
  },
  {
    question: "Qual o prazo medio de entrega?",
    answer:
      "O prazo depende da complexidade e quantidade de pecas. Pecas simples podem ser entregues em 2-3 dias uteis. Projetos mais complexos geralmente levam de 5 a 10 dias uteis. Trabalhamos tambem com regime de urgencia.",
  },
  {
    question: "Voces trabalham com pecas unitarias?",
    answer:
      "Sim! Atendemos desde pecas unitarias e prototipos ate producao em serie. Cada projeto recebe a mesma atencao e qualidade, independentemente da quantidade.",
  },
  {
    question: "Como solicitar um orcamento?",
    answer:
      "Voce pode nos enviar o desenho tecnico ou amostra da peca pelo WhatsApp (44 99932-4635) ou trazer diretamente em nosso endereco em Maringa. Respondemos orcamentos em ate 24 horas.",
  },
  {
    question: "Qual a precisao das pecas?",
    answer:
      "Nossos equipamentos CNC alcancam tolerancias de ate 0,01mm. Na tornearia convencional, trabalhamos com tolerancias de ate 0,05mm. A precisao final depende das especificacoes do projeto.",
  },
  {
    question: "Voces emitem nota fiscal?",
    answer:
      "Sim, emitimos nota fiscal para todos os servicos prestados, tanto para pessoa fisica quanto juridica.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Duvidas Frequentes
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Perguntas frequentes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tire suas duvidas sobre nossos servicos de usinagem.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={`faq-${index}`} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
