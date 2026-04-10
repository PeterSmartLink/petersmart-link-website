import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { CONTACT_INFO } from '@/lib/constants'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Card } from '@/components/ui/card'

export const metadata = {
  title: 'Contact Us',
}

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'contact-hero')

  return (
    <>
      {/* Page Header */}
      <section className="relative h-[40vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Contact us background"
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-extrabold sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            We're here to help. Contact us for any inquiries or service
            requests.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-py">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold">
                Send Us a Message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
              <Card className="mt-8 p-6">
                <ContactForm />
              </Card>
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold">
                Contact Information
              </h2>
              <p className="mt-2 text-muted-foreground">
                Alternatively, you can reach us through the following channels.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Location</h3>
                    <p className="text-muted-foreground">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
