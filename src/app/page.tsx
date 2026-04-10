import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Book,
  Code2,
  Film,
  Headphones,
  Laptop,
  Smartphone,
  Download,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG, testimonials, services, blogPosts } from '@/lib/constants'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const serviceIcons: { [key: string]: React.ElementType } = {
  'Computer Services': Laptop,
  'Website Development': Code2,
  'App Development': Smartphone,
  'Electronics & Accessories': Headphones,
  'Media Center': Film,
  'Digital Library': Book,
  'Software Updates': Download,
}

export default function Home() {
  const featuredServices = services.slice(0, 6)
  const featuredPosts = blogPosts.slice(0, 3)
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1')
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-1')

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="PeterSmart Link tech services"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {SITE_CONFIG.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200 md:text-xl">
            {SITE_CONFIG.tagline}
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-py bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We offer a wide range of tech solutions to meet your needs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => {
              const Icon = serviceIcons[service.title] || Laptop
              return (
                <Card key={service.title} className="flex flex-col">
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="font-headline text-xl">
                        {service.title}
                      </CardTitle>
                    </div>
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
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="section-py">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold sm:text-4xl">
                About PeterSmart Link
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Founded by Peter Katabira in 2023, PeterSmart Link was born from
                a passion for technology and a desire to bring modern, reliable
                tech solutions to the community of Lwengo District and beyond.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our mission is simple: to provide reliable and affordable tech
                solutions that empower individuals and businesses.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-80 w-full rounded-lg shadow-lg lg:h-96">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt="Founder Peter Katabira"
                  fill
                  className="rounded-lg object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-py bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are proud to serve our community and value their feedback.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-left">
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-4 font-bold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-py">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">
              From Our Blog
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Tech tips, tutorials, and news to keep you informed.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => {
              const postImage = PlaceHolderImages.find(
                (img) => img.id === post.image
              )
              return (
                <Card key={post.slug} className="flex flex-col overflow-hidden">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-56 w-full">
                      {postImage && (
                        <Image
                          src={postImage.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover"
                          data-ai-hint={postImage.imageHint}
                        />
                      )}
                    </div>
                    <CardHeader>
                      <Badge className="w-fit">{post.category}</Badge>
                      <CardTitle className="mt-2 font-headline text-xl">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">
                        {post.description}
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/blog">
                Visit The Blog <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
