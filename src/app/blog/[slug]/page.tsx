import { notFound } from 'next/navigation'
import Image from 'next/image'
import { blogPosts, SITE_CONFIG } from '@/lib/constants'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Badge } from '@/components/ui/badge'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Post not found',
    }
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const postImage = PlaceHolderImages.find((img) => img.id === post.image)

  return (
    <article>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <Link
          href="/blog"
          className="flex items-center text-primary hover:underline mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        <div className="text-center">
          <Badge>{post.category}</Badge>
          <h1 className="mt-4 font-headline text-4xl font-extrabold sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-muted-foreground">
            Published on {post.date} by {SITE_CONFIG.name}
          </p>
        </div>

        <div className="relative my-8 h-96 w-full rounded-lg shadow-lg">
          {postImage && (
            <Image
              src={postImage.imageUrl}
              alt={post.title}
              fill
              className="rounded-lg object-cover"
              priority
              data-ai-hint={postImage.imageHint}
            />
          )}
        </div>

        <div
          className="prose prose-lg dark:prose-invert mx-auto max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
        />
      </div>
    </article>
  )
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
