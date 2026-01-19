import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Users, Heart, Mail, ArrowLeft, XCircle } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function MyHealthCanvasAdvocacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="MyHealthCanvas | Charity Partnerships for Patient Empowerment"
        description="MyHealthCanvas partners with patient charities to improve access to non-clinical, patient-controlled health planning tools. These partnerships support fundraising and patient empowerment - not medical decision-making."
        keywords="charity partnership, patient empowerment, healthcare charity, patient tools, MyHealthCanvas partnership, non-clinical health planning"
        canonicalPath="/myhealthcanvas/advocacy"
      />
      {/* Back Link */}
      <div className="container pt-6">
        <Link href="/myhealthcanvas">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <ArrowLeft className="h-4 w-4" />
            Back to MyHealthCanvas
          </span>
        </Link>
      </div>

      {/* Hero Section with Positioning Statement */}
      <section className="relative bg-gradient-to-br from-[oklch(0.55_0.15_195)]/10 via-background to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="h-4 w-4" />
              For Patient Charities
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Charity Partnerships for{" "}
              <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent">
                Patient Empowerment
              </span>
            </h1>
            {/* Mandatory Positioning Statement */}
            <div className="bg-muted/50 border border-muted-foreground/20 rounded-lg p-6 text-left max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                MyHealthCanvas partners with patient charities to improve access to non-clinical, patient-controlled health planning tools. These partnerships support fundraising and patient empowerment - not medical decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Charity Partnerships Work - 3 Column Layout */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How Charity Partnerships Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1 - Patient */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-6 w-6 text-[oklch(0.55_0.15_195)]" />
                  </div>
                  <h3 className="font-semibold text-center mb-4 text-lg">Patient</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Chooses to use MyHealthCanvas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Pays £9 / £12 plan (optional)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Retains full control of data</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Column 2 - Charity Partner */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-[oklch(0.55_0.15_195)]/30">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center mb-4 mx-auto">
                    <Heart className="h-6 w-6 text-[oklch(0.55_0.15_195)]" />
                  </div>
                  <h3 className="font-semibold text-center mb-4 text-lg">Charity Partner</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Promotes access to patient tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Receives 50% of subscription revenue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Does not access patient data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Does not provide medical advice</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Column 3 - MyHealthCanvas */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center mb-4 mx-auto">
                    <Shield className="h-6 w-6 text-[oklch(0.55_0.15_195)]" />
                  </div>
                  <h3 className="font-semibold text-center mb-4 text-lg">MyHealthCanvas</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Provides non-clinical planning tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Maintains governance & safety framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>No exclusive partnerships</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What This Partnership Is NOT - Critical Callout Box */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-muted/50 border-2 border-muted-foreground/20">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold text-center mb-6">What this partnership is not</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Not a medical recommendation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Not a clinical endorsement</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Not a diagnostic or treatment tool</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Not a substitute for professional care</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Revenue Split Transparency */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Revenue Sharing</h2>
            <Card className="text-left">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  To keep MyHealthCanvas affordable, subscription revenue from charity-referred users is shared equally (50:50) between MyHealthCanvas and the charity partner as <strong>unrestricted fundraising support</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - For Charities */}
      <section className="py-20 bg-gradient-to-br from-[oklch(0.55_0.15_195)]/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">
              For Charities
            </h2>
            <p className="text-lg text-muted-foreground">
              Charities interested in supporting patient empowerment initiatives can contact us to discuss partnership arrangements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:andy@andysquire.ai?subject=MyHealthCanvas%20Charity%20Partnership%20Inquiry">
                <Button size="lg" className="gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Us
                </Button>
              </a>
              <Link href="/myhealthcanvas">
                <Button size="lg" variant="outline" className="gap-2">
                  View MyHealthCanvas
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Email: andy@andysquire.ai
            </p>
          </div>
        </div>
      </section>

      {/* Regulator-Grade Disclosure Footer */}
      <section className="py-8 bg-muted/20 border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground text-center">
              MyHealthCanvas is a patient-facing, non-clinical health planning tool. Charity partnerships do not involve access to personal health data and do not imply clinical endorsement.
            </p>
            <div className="text-center mt-4">
              <Link href="/myhealthcanvas">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <ArrowLeft className="h-4 w-4" />
                  Back to MyHealthCanvas for Patients
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
