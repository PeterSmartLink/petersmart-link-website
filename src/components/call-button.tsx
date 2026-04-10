import { Phone } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'
import { Button } from './ui/button'

export function CallButton() {
  return (
    <Button
      asChild
      className="fixed bottom-28 right-6 z-50 h-16 w-16 rounded-full shadow-lg"
    >
      <a
        href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
        aria-label="Call us"
      >
        <Phone className="h-8 w-8" />
      </a>
    </Button>
  )
}
