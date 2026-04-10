import { MessageCircle } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'
import { Button } from './ui/button'

export function WhatsAppButton() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-lg"
    >
      <a
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </Button>
  )
}
