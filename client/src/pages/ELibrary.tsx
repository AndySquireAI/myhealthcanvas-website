import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Search, BookOpen, ArrowRight } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

export default function ELibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[oklch(0.55_0.18_270)]/10 via-background to-background py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-16 w-16 text-[oklch(0.55_0.18_270)]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              The{" "}
              <span className="bg-gradient-to-r from-[oklch(0.55_0.18_270)] to-[oklch(0.65_0.14_210)] bg-clip-text text-transparent">
                eLibrary
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Curated AI and healthcare insights with evidence-based analysis from a
              patient advocate and AI expert. All articles feature Andy's AAA Assessment
              Framework.
            </p>
            
            {/* Hero Image */}
            <div className="mt-10 max-w-5xl mx-auto">
              <img 
                src="/images/elibrary-hero.png" 
                alt="Person reading curated AI healthcare knowledge on tablet in coffee shop - evidence-based guidelines, patient outcomes data, trusted AI assistance" 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                onClick={() => setActiveCategory("all")}
              >
                All Articles ({blogPosts.length})
              </Button>
              <Button
                variant={activeCategory === "patients" ? "default" : "outline"}
                onClick={() => setActiveCategory("patients")}
                className={
                  activeCategory === "patients"
                    ? "bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)]"
                    : ""
                }
              >
                For Patients (
                {blogPosts.filter((p) => p.category === "patients").length})
              </Button>
              <Button
                variant={activeCategory === "business" ? "default" : "outline"}
                onClick={() => setActiveCategory("business")}
                className={
                  activeCategory === "business"
                    ? "bg-[oklch(0.65_0.14_210)] hover:bg-[oklch(0.60_0.14_210)]"
                    : ""
                }
              >
                For Businesses (
                {blogPosts.filter((p) => p.category === "business").length})
              </Button>
              <Button
                variant={activeCategory === "partners" ? "default" : "outline"}
                onClick={() => setActiveCategory("partners")}
                className={
                  activeCategory === "partners"
                    ? "bg-[oklch(0.55_0.18_270)] hover:bg-[oklch(0.50_0.18_270)]"
                    : ""
                }
              >
                Thought Leadership (
                {blogPosts.filter((p) => p.category === "partners").length})
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No articles found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  {post.thumbnail && (
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(post.category)}>
                        {getCategoryLabel(post.category)}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <Link href={`/elibrary/${post.slug}`}>
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-primary/10"
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-[oklch(0.55_0.18_270)]/10 to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="text-lg text-muted-foreground">
              Get weekly insights from Andy on AI, healthcare innovation, and patient
              advocacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
