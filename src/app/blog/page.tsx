import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { blogPosts } from '@/lib/constants'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const metadata = {
  title: 'Blog',
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const categories = [
    ...new Set(blogPosts.map((post) => post.category)),
  ]
  const currentCategory = searchParams.category
  const filteredPosts = currentCategory
    ? blogPosts.filter((post) => post.category === currentCategory)
    : blogPosts

  const heroImage = PlaceHolderImages.find((img) => img.id === 'blog-hero')

  return (
    <>
      {/* Page Header */}
      <section className="relative h-[40vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Person writing in a notebook"
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-extrabold sm:text-5xl">
            PeterSmart Link Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            Your source for tech tips, tutorials, and industry news.
          </p>
        </div>
      </section>

      {/* Category Filters and Posts */}
      <section className="section-py">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            <Link href="/blog">
              <Badge
                variant={!currentCategory ? 'default' : 'secondary'}
                className="px-4 py-2 text-sm cursor-pointer"
              >
                All Posts
              </Badge>
            </Link>
            {categories.map((category) => (
              <Link href={`/blog?category=${category}`} key={category}>
                <Badge
                  variant={
                    currentCategory === category ? 'default' : 'secondary'
                  }
                  className="px-4 py-2 text-sm cursor-pointer"
                >
                  {category}
                </Badge>
              </Link>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => {
              const postImage = PlaceHolderImages.find(
                (img) => img.id === post.image
              )
              return (
                <Card
                  key={post.slug}
                  className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg"
                >
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
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <Badge variant="outline">{post.category}</Badge>
                        <span>{post.date}</span>
                      </div>
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
        </div>
      </section>
    </>
  )
}
