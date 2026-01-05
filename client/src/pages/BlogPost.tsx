import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The article you're looking for doesn't exist.
        </p>
        <Link href="/elibrary">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to eLibrary
          </Button>
        </Link>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "patients":
        return "bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)]";
      case "business":
        return "bg-[oklch(0.65_0.14_210)] hover:bg-[oklch(0.60_0.14_210)]";
      case "partners":
        return "bg-[oklch(0.55_0.18_270)] hover:bg-[oklch(0.50_0.18_270)]";
      default:
        return "bg-primary hover:bg-primary/90";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "patients":
        return "For Patients";
      case "business":
        return "For Businesses";
      case "partners":
        return "Thought Leadership";
      default:
        return category;
    }
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[oklch(0.55_0.18_270)]/10 via-background to-background py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/elibrary">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to eLibrary
              </Button>
            </Link>

            {/* Article Header */}
            <div className="space-y-4">
              <Badge className={getCategoryColor(post.category)}>
                {getCategoryLabel(post.category)}
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.thumbnail && (
        <section className="py-8">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {post.excerpt}
              </p>
              
              <div className="bg-muted/50 rounded-xl p-8 my-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Tag className="h-6 w-6 text-primary" />
                  About This Article
                </h2>
                <p className="text-muted-foreground">
                  This article is part of Andy's curated eLibrary, featuring evidence-based 
                  analysis on AI and healthcare topics. All articles are evaluated using 
                  Andy's AAA Assessment Framework, ensuring quality insights for patients, 
                  businesses, and healthcare partners.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-8">
                <h3 className="text-xl font-bold mb-4">Full Article Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  The complete article content is being prepared. In the meantime, explore 
                  related articles below or contact Andy for more information on this topic.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[oklch(0.55_0.15_195)]">Contact Founder - Andy Squire</p>
                  <a 
                    href="mailto:andy@patientcentriccare.ai?subject=Enquiry%20from%20MyHealthCanvas%20Website&body=Hello%20Andy%2C%0A%0AI%20found%20your%20website%20and%20would%20like%20to%20connect.%0A%0A"
                    className="text-sm text-muted-foreground hover:text-primary underline"
                  >
                    andy@patientcentriccare.ai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/elibrary/${relatedPost.slug}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                      {relatedPost.thumbnail && (
                        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                          <img
                            src={relatedPost.thumbnail}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardContent className="p-4">
                        <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          {relatedPost.readTime}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Want More Insights?</h2>
            <p className="text-lg text-muted-foreground">
              Explore the full eLibrary for more articles on AI, healthcare innovation, 
              and patient advocacy.
            </p>
            <Link href="/elibrary">
              <Button size="lg">
                Browse All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
