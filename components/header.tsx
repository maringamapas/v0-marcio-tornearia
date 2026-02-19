"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/src/config/site-config"

const navLinks = SITE_CONFIG.nav.links

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-accent/98 backdrop-blur-lg shadow-2xl"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-h-marcio-tornearia-wiIaCcIN9QvjlOPQRGNJy2qULTybZ6.png"
              alt="Marcio Tornearia"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Links principais">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-primary-foreground/80 transition-all duration-300 hover:text-primary hover:bg-primary/10 hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <Phone className="h-4 w-4" />
                {SITE_CONFIG.nav.ctaText}
              </Button>
            </a>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-primary-foreground lg:hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-accent/98 backdrop-blur-lg shadow-2xl lg:hidden animate-slide-up" id="mobile-menu">
          <nav className="flex flex-col px-4 pb-6" aria-label="Menu mobile">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-accent-foreground/10 py-4 text-sm font-medium text-primary-foreground/80 transition-all duration-300 hover:text-primary hover:pl-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <Phone className="h-4 w-4" />
                {SITE_CONFIG.nav.ctaText}
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
