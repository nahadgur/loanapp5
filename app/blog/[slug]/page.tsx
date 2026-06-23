import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getLiveBlogSlugs, getRelatedBlogPosts } from '@/data/all-blog-posts';
import { GUIDES_BY_SLUG } from '@/data/guides';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SpokeHero } from '@/components/SpokeHero';
import {
  SITE_URL,
  EDITORIAL,
  organizationSchema,
  websiteSchema,
  editorialEntitySchema,
  breadcrumbSchema,
  faqPageSchema,
  articleSchemaFor,
  jsonLd,
} from '@/lib/schema';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

// Draft spokes are not pre-rendered; live posts only.
export async function generateStaticParams() {
  const slugs = getLiveBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.metaTitle} | LoanApp.co.ke`,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  // Draft gate: drafts 404 until the publisher flips them live.
  if (!post || post.draft) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(slug, 3);
  const hub = post.hub ? GUIDES_BY_SLUG[post.hub] : undefined;
  const reviewed = post.lastReviewedAt || post.publishedAt;
  const url = `${SITE_URL}/blog/${post.slug}`;
  const plain = post.content.replace(/<[^>]+>/g, ' ');
  const readMins = Math.max(3, Math.round(plain.split(/\s+/).filter(Boolean).length / 200));

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(
        organizationSchema(),
        websiteSchema(),
        editorialEntitySchema(),
        breadcrumbSchema([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Blog', url: `${SITE_URL}/blog` },
          ...(hub ? [{ name: hub.shortTitle, url: `${SITE_URL}/guides/${hub.slug}` }] : []),
          { name: post.title, url },
        ]),
        articleSchemaFor({
          url,
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.publishedAt,
          dateModified: reviewed,
        }),
        ...(post.faqs && post.faqs.length ? [faqPageSchema(post.faqs)] : []),
      )} />
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
            <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {hub && (
              <>
                <Link href={`/guides/${hub.slug}`} className="font-medium text-emerald-700 hover:text-emerald-600 transition-colors">{hub.shortTitle}</Link>
                <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            )}
            <span className="text-gray-600 truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="sr-only">{post.title}</h1>
          <SpokeHero
            title={post.title}
            hubName={hub ? hub.shortTitle : null}
            hubSlug={post.hub || post.slug}
            readMins={readMins}
          />
          <p className="text-lg text-gray-500 mt-6 mb-4">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="font-mono font-bold uppercase text-xs text-gray-600">By {EDITORIAL.byline}</span>
            <time dateTime={post.publishedAt}>
              Reviewed {new Date(reviewed).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs">
              {post.category || 'Loan Guide'}
            </span>
            {hub && (
              <Link href={`/guides/${hub.slug}`} className="text-emerald-600 hover:underline font-medium">
                {hub.shortTitle} hub
              </Link>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-10 overflow-hidden">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-black prose-h2:pb-2
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-emerald-600
            prose-p:text-gray-900 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-300 hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-em:text-gray-900
            prose-ul:my-4 prose-ul:text-gray-900
            prose-ol:my-4 prose-ol:text-gray-900
            prose-li:text-gray-900 prose-li:mb-1
            prose-table:w-full prose-table:border-collapse prose-table:my-6
            prose-thead:bg-gray-50
            prose-th:p-3 prose-th:text-left prose-th:text-emerald-600 prose-th:font-semibold prose-th:border prose-th:border-black
            prose-td:p-3 prose-td:border prose-td:border-black prose-td:text-gray-900
            prose-tr:hover:bg-gray-50
            prose-img:rounded-xl prose-img:my-8 prose-img:mx-auto
            prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:pl-4 prose-blockquote:text-gray-600 prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-12 p-6 bg-emerald-50 border-2 border-black">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Ready to compare loan apps?</h3>
          <p className="text-gray-600 mb-4">Use our calculator to see exactly what you&apos;ll pay back with each app.</p>
          <Link
            href="/#calculator"
            className="inline-flex items-center px-5 py-2.5 bg-black hover:bg-emerald-600 text-white font-mono font-bold uppercase transition-colors"
          >
            Try the Calculator  ›
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-gray-50 border border-black p-5 hover:border-black transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-300 font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to all guides
        </Link>
      </div>

      <Footer />
    </div>
  );
}
