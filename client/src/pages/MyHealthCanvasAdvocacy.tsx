import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, ShoppingCart, Heart, XCircle } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function MyHealthCanvasAdvocacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Charity Partnership: Support Patient Planning | MyHealthCanvas"
        description="MyHealthCanvas partners with charities to support patient wellbeing and fundraising. Templates sold via partner links help raise funds while remaining non-clinical."
        keywords="patient advocacy, charity partnership, patient empowerment, healthcare charity, MyHealthCanvas partnership, patient support, fundraising"
        canonicalPath="/myhealthcanvas/advocacy"
      />

      {/* Back Navigation */}
      <div className="container py-4">
        <Link href="/myhealthcanvas">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to MyHealthCanvas
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[oklch(0.55_0.15_195)]/10 via-background to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Charity Partnership:{" "}
              <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent">
                Support Patient Planning
              </span>
            </h1>
            
            {/* Top explanation */}
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              MyHealthCanvas partners with charities to support patient wellbeing and fundraising. Templates sold via partner links help raise funds while remaining non-clinical. This is not medical advice.
            </p>
          </div>
        </div>
      </section>

      {/* How the Partnership Works */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">How the Partnership Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">1. Patients Buy</h3>
                  <p className="text-sm text-muted-foreground">Patients buy affordable PDF plans</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">2. We Track</h3>
                  <p className="text-sm text-muted-foreground">MyHealthCanvas tracks partner referrals</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">3. You Benefit</h3>
                  <p className="text-sm text-muted-foreground">Net revenue share supports charity work</p>
                </CardContent>
              </Card>
            </div>

            {/* Simple Flow */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 text-sm text-muted-foreground bg-muted/50 px-6 py-3 rounded-full">
                <span className="font-medium">Patient</span>
                <span>→</span>
                <span className="font-medium">Purchase via partner link</span>
                <span>→</span>
                <span className="font-medium">Charity fundraising share</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Is NOT */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-xl text-center text-destructive">What This Is NOT</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span>Not clinical endorsement</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span>Not medical advice</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span>Not shared personal health data</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Partner?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:andy@andysquire.ai?subject=Charity Partnership Inquiry">
                <Button size="lg" className="text-lg px-8">
                  Become a Partner
                </Button>
              </a>
              <Link href="/myhealthcanvas">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More for Patients
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Disclosure */}
      <section className="py-8 bg-muted/30 border-t">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs text-muted-foreground">
              MyHealthCanvas is a patient-facing, non-clinical health planning tool. Charity partnerships do not involve access to personal health data and do not imply clinical endorsement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
