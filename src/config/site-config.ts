// Este é o ficheiro que vais alterar para cada novo cliente.
export const SITE_CONFIG = {
  // Informações Gerais do Cliente
  client: {
    name: "Prime Tornearia",
    shortName: "Prime",
    domain: "www.primetornearia.com.br",
    description: "Tornearia, fresagem e usinagem CNC de precisão em Maringá - PR. Qualidade superior, pontualidade na entrega e preços competitivos.",
  },

  // Identidade Visual (Cores)
  // Dica: Podes usar estes valores diretamente no teu Tailwind ou CSS Variables
  theme: {
    colors: {
      primary: "#f97316",    // Cor principal (laranja)
      secondary: "#1e293b",  // Cor secundária (cinza escuro)
      accent: "#0f172a",     // Cor de destaque (azul escuro/preto)
    },
    borderRadius: "0.5rem",
  },

  // Conteúdo da Home Page (Hero Section)
  hero: {
    badge: "Usinagem de Precisão em Maringá - PR",
    title: "Precisão que transforma metal em solução",
    highlight: "metal em solução",
    subtitle: "Tornearia, fresagem e usinagem CNC com qualidade superior, pontualidade na entrega e preços competitivos para sua indústria.",
    ctaText: "Fale Conosco pelo WhatsApp",
    ctaLink: "https://wa.me/5544999324635?text=Olá! Gostaria de solicitar um orçamento.",
    ctaSecondary: "44 99932-4635",
    heroImage: "/images/hero-tornearia.jpg",
    stats: {
      experience: { value: "15+", label: "Anos de experiência" },
      projects: { value: "500+", label: "Projetos entregues" },
    },
  },

  // Seção de Contactos
  contact: {
    email: "contato@primetornearia.com.br",
    phone: "(44) 99932-4635",
    phoneRaw: "44999324635",
    whatsapp: "5544999324635",
    address: "Maringá, PR • Região Metropolitana",
    googleMapsLink: "https://goo.gl/maps/...",
  },

  // Redes Sociais
  social: {
    instagram: "https://instagram.com/primetornearia",
    facebook: "https://facebook.com/primetornearia",
    twitter: "https://twitter.com/primetornearia",
    linkedin: "https://linkedin.com/company/primetornearia",
  },

  // Configurações de SEO (Essencial para o site aparecer no Google)
  seo: {
    ogImage: "/images/og-images.jpg",
    keywords: ["tornearia", "usinagem CNC", "fresagem", "Maringá", "usinagem de precisão", "tornearia CNC"],
  },

  // Navegação
  nav: {
    links: [
      { href: "#inicio", label: "Início" },
      { href: "#sobre", label: "Sobre" },
      { href: "#servicos", label: "Serviços" },
      { href: "#diferenciais", label: "Diferenciais" },
      { href: "#depoimentos", label: "Depoimentos" },
      { href: "#faq", label: "FAQ" },
      { href: "#contato", label: "Contato" },
    ],
    ctaText: "Solicitar Orçamento",
  },

  // Footer
  footer: {
    description: "Precisão e qualidade em usinagem",
    services: [
      "Tornearia CNC",
      "Usinagem",
      "Fresamento",
      "Projetos Sob Medida",
    ],
    quickLinks: [
      { href: "#inicio", label: "Início" },
      { href: "#sobre", label: "Sobre Nós" },
      { href: "#diferenciais", label: "Diferenciais" },
      { href: "#contato", label: "Contato" },
    ],
    legal: {
      privacy: "#",
      terms: "#",
    },
    copyright: "© 2025 Prime Tornearia. Todos os direitos reservados.",
    madeBy: {
      text: "WebStudio",
      link: "https://webstudiomga.vercel.app/",
    },
  },

  // CTA Section
  cta: {
    title: "Pronto para dar forma ao seu projeto?",
    description: "Entre em contato agora e receba um orçamento personalizado para suas peças. Nossa equipe está pronta para transformar suas ideias em realidade.",
    primaryButton: "Chamar no WhatsApp",
    secondaryButton: "(44) 99932-4635",
    footnote: "Resposta em menos de 24h. Orçamento sem compromisso.",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
