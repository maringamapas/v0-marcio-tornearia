// Este é o ficheiro que vais alterar para cada novo cliente.
export const SITE_CONFIG = {
  // Informações Gerais do Cliente
  client: {
    name: "Marcio Tornearia",
    shortName: "Marcio",
    domain: "www.marciotornearia.com.br",
    description: "Tornearia, fresagem e usinagem CNC de precisão em Navegantes - SC. Qualidade superior, pontualidade na entrega e preços competitivos.",
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
    badge: "Usinagem de Precisão em Navegantes - SC",
    title: "Precisão que transforma metal em solução",
    highlight: "metal em solução",
    subtitle: "Tornearia, fresagem e usinagem CNC com qualidade superior em Navegantes - SC, pontualidade na entrega e preços competitivos para sua indústria.",
    ctaText: "Fale Conosco pelo WhatsApp",
    ctaLink: "https://wa.me/5547984560434?text=Olá! Gostaria de solicitar um orçamento.",
    ctaSecondary: "47 98456-0434",
    heroImage: "/images/hero-tornearia.jpg",
    stats: {
      experience: { value: "15+", label: "Anos de experiência" },
      projects: { value: "500+", label: "Projetos entregues" },
    },
  },

  // Seção de Contactos
  contact: {
    email: "contato@marciotornearia.com.br",
    phone: "(47) 98456-0434",
    phoneRaw: "47984560434",
    whatsapp: "5547984560434",
    address: "Rua Vereador José João da Silva, 35 - Bairro Machados - Navegantes, SC - CEP 88371-475",
    googleMapsLink: "https://goo.gl/maps/...",
  },

  // Redes Sociais
  social: {
    instagram: "https://www.instagram.com/marcio_tornearia",
    facebook: "https://www.facebook.com/profile.php?id=100066677389181",
    threads: "https://www.threads.com/@marcio_tornearia",
  },

  // Configurações de SEO (Essencial para o site aparecer no Google)
  seo: {
    ogImage: "/images/og-images.jpg",
    keywords: ["tornearia", "usinagem CNC", "fresagem", "Navegantes", "Navegantes SC", "usinagem de precisão", "tornearia CNC", "Marcio Tornearia"],
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
    copyright: "© 2025 Marcio Tornearia. Todos os direitos reservados.",
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
    secondaryButton: "(47) 98456-0434",
    footnote: "Resposta em menos de 24h. Orçamento sem compromisso.",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
