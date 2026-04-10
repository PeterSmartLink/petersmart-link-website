import Link from 'next/link'
import {
  NAV_LINKS,
  SITE_CONFIG,
  SOCIAL_LINKS,
  CONTACT_INFO,
} from '@/lib/constants'
import { Logo } from '@/components/logo'
import { Separator } from '@/components/ui/separator'

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 text-center md:grid-cols-4 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="text-lg font-bold">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-headline font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>{CONTACT_INFO.address}</li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-foreground"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="hover:text-foreground"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold">Follow Us</h3>
            <div className="mt-4 flex justify-center gap-4 md:justify-start">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
