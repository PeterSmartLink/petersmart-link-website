import { Bird } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
      <Bird className="h-5 w-5" />
    </div>
  )
}
