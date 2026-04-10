import Image from 'next/image'
import {
  Heart,
  Target,
  Zap,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SITE_CONFIG } from '@/lib/constants'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const metadata = {
  title: 'About Us',
}

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-1')
  const foundedDate = new Date(SITE_CONFIG.business.founded)
  const today = new Date()
  const yearsInBusiness = Math.floor(
    (today.getTime() - foundedDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
  )

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-headline text-4xl font-bold sm:text-5xl">
            About PeterSmart Link
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Connecting our community to technology with passion and expertise.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-py">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="font-headline text-3xl font-bold text-primary">
                Our Founder's Journey
              </h2>
              <h3 className="mt-2 font-headline text-2xl font-semibold">
                Meet {SITE_CONFIG.founder.name}
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Peter Katabira, born on May 5th, 2005, developed a passion for
                technology at a young age. Growing up in Lwengo District, he saw
                the challenges and opportunities that technology could address
                in his community.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                With a drive to make technology accessible and affordable, Peter
                founded PeterSmart Link on his 18th birthday, May 5th, 2023. His
                vision was to create a one-stop tech hub for the people of
                Mbirizi Town Council and beyond, offering services that were
                once hard to find locally.
              </p>
            </div>
            <div className="relative h-96 w-full rounded-lg shadow-lg order-1 lg:order-2">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={`Founder ${SITE_CONFIG.founder.name}`}
                  fill
                  className="rounded-lg object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-py bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mx-auto" />
                <CardTitle className="pt-4 font-headline text-2xl">
                  Our Passion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We are driven by a genuine passion for technology and its
                  potential to transform lives and businesses in our community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-10 w-10 text-primary mx-auto" />
                <CardTitle className="pt-4 font-headline text-2xl">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide reliable and affordable tech solutions to the
                  community, empowering individuals and businesses with the
                  tools they need to succeed.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mx-auto" />
                <CardTitle className="pt-4 font-headline text-2xl">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the leading and most trusted technology partner in
                  Lwengo District, known for innovation, quality, and
                  exceptional customer service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
