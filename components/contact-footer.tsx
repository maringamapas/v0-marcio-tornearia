import { MapPin, Phone, ArrowRight, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import { SITE_CONFIG } from "@/src/config/site-config"

export function ContactFooter() {
  return (
    <section className="w-full bg-neutral-900">
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="relative z-10 py-10 sm:py-12 md:py-16">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column - Brand & Contact */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{SITE_CONFIG.client.shortName[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white tracking-tight">{SITE_CONFIG.client.name}</h3>
                    <p className="text-white/60 text-sm">{SITE_CONFIG.footer.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-white/60" strokeWidth={1.5} />
                    <span className="text-white/80 text-sm">{SITE_CONFIG.contact.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-white/60" strokeWidth={1.5} />
                    <a href={`tel:+55${SITE_CONFIG.contact.phoneRaw}`} className="text-white/80 hover:text-white transition-colors text-sm">
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {SITE_CONFIG.nav.ctaText}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>

              {/* Right Column - Links & Social */}
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-8">
                  {/* Services Links */}
                  <div>
                    <h4 className="text-white font-medium mb-4">Serviços</h4>
                    <ul className="space-y-2">
                      {SITE_CONFIG.footer.services.map((service) => (
                        <li key={service}>
                          <a href="#servicos" className="text-white/60 hover:text-white transition-colors text-sm">
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h4 className="text-white font-medium mb-4">Links Rápidos</h4>
                    <ul className="space-y-2">
                      {SITE_CONFIG.footer.quickLinks.map((link) => (
                        <li key={link.href}>
                          <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h4 className="text-white font-medium mb-4">Redes Sociais</h4>
                  <div className="flex gap-3">
                    <a 
                      href={SITE_CONFIG.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 transition-all duration-300 hover:scale-110 hover:rotate-12 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                    <a 
                      href={SITE_CONFIG.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 transition-all duration-300 hover:scale-110 hover:rotate-12 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                    <a 
                      href={SITE_CONFIG.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 transition-all duration-300 hover:scale-110 hover:rotate-12 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                    <a 
                      href={SITE_CONFIG.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 transition-all duration-300 hover:scale-110 hover:rotate-12 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-10 pt-6 max-w-7xl mx-auto">
              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-white/50 text-xs text-center">{SITE_CONFIG.footer.copyright}</p>
                <div className="flex items-center gap-1 text-xs justify-center">
                  <span className="text-white/60">Criado por</span>
                  <a 
                    href={SITE_CONFIG.footer.madeBy.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400 transition-colors font-medium"
                  >
                    WebStudio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
