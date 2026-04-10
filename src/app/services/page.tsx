import Image from 'next/image'
import Link from 'next/link'
import {
  Book,
  Code2,
  Film,
  Headphones,
  Laptop,
  Smartphone,
  Download,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/constants'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const metadata = {
  title: 'Our Services',
}

const serviceIcons: { [key: string]: React.ElementType } = {
  'Computer Services': Laptop,
  'Website Development': Code2,
  'App Development': Smartphone,
  'Electronics & Accessories': Headphones,
  'Media Center': Film,
  'Digital Library': Book,
  'Software Updates': Download,
}

export default function ServicesPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'services-hero')

  return (
    <>
      {/* Page Header */}
      <section className="relative h-[40vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Tech services workshop"
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-extrabold sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            Comprehensive tech solutions tailored for you.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-py">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.title] || Laptop
              return (
                <Card
                  key={service.title}
                  className="flex flex-col text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="items-center">
                    <Icon className="h-10 w-10 text-primary" />
                    <CardTitle className="pt-4 font-headline text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's work together to bring your ideas to life.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
