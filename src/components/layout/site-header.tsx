
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
          <span className="font-bold">{SITE_CONFIG.name}</span>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex md:gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                  pathname === link.href
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <Logo />
                  <span className="font-bold">{SITE_CONFIG.name}</span>
                </Link>
                <div className="mt-6 flex flex-col space-y-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium',
                        pathname === link.href
                          ? 'text-foreground'
                          : 'text-foreground/60'
                      )}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
