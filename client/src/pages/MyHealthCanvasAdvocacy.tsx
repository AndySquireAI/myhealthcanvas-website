import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Users, Heart, Lock, Mail, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function MyHealthCanvasAdvocacy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Back Link */}
      <div className="container pt-6">
        <Link href="/myhealthcanvas">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <ArrowLeft className="h-4 w-4" />
            Back to MyHealthCanvas
          </span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[oklch(0.55_0.15_195)]/10 via-background to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              For Patient Advocacy Groups
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Partner with{" "}
              <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent">
                MyHealthCanvas
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A neutral, non-medical tool designed to amplify patient voice without introducing clinical or legal risk.
            </p>
          </div>
        </div>
      </section>

      {/* Why Advocacy Groups Endorse */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Advocacy Groups Endorse MyHealthCanvas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-[oklch(0.55_0.15_195)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Improves Patient Articulation</h3>
                      <p className="text-sm text-muted-foreground">
                        Helps patients organise their thoughts, symptoms, and questions before appointments, leading to more productive consultations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-[oklch(0.55_0.15_195)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Reduces Communication Harm</h3>
                      <p className="text-sm text-muted-foreground">
                        Minimises the risk of miscommunication between patients and healthcare providers by providing structured, clear information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-[oklch(0.55_0.15_195)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Scales Patient Voice</h3>
                      <p className="text-sm text-muted-foreground">
                        Empowers more patients to participate effectively in their care without replacing the essential role of clinicians.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-[oklch(0.55_0.15_195)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Safe to Recommend</h3>
                      <p className="text-sm text-muted-foreground">
                        Can be safely recommended to patients without clinical liability—it's a communication tool, not a medical device.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics, Data & Safeguards */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[oklch(0.55_0.15_195)]/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-[oklch(0.55_0.15_195)]" />
                </div>
                <CardTitle className="text-2xl">Ethics, Data & Safeguards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Patients own their data</p>
                      <p className="text-sm text-muted-foreground">Complete ownership and control remains with the patient at all times.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Nothing shared without consent</p>
                      <p className="text-sm text-muted-foreground">No information is shared with any third party without explicit patient consent.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">No data is sold</p>
                      <p className="text-sm text-muted-foreground">Patient data is never monetised or sold to third parties.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Opt-in research participation</p>
                      <p className="text-sm text-muted-foreground">Any participation in research or pilots is opt-in and fully reversible.</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Non-medical by design</p>
                      <p className="text-sm text-muted-foreground">
                        MyHealthCanvas is intentionally designed as a communication and reflection tool, not a medical device. This ensures it can be safely recommended without regulatory or clinical liability concerns.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Relationship to PatientCentricCare.AI */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Relationship to PatientCentricCare.AI</h2>
            <Card className="text-left">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  MyHealthCanvas is part of the <strong>PatientCentricCare.AI</strong> ecosystem but operates as a <strong>standalone, non-medical patient tool</strong>. 
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Any participation in future research or pilot programmes is <strong>separate, optional, and explicitly consented</strong>. Endorsing MyHealthCanvas does not imply endorsement of other PatientCentricCare.AI initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[oklch(0.55_0.15_195)]/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">
              Discuss an Endorsement or Partnership
            </h2>
            <p className="text-lg text-muted-foreground">
              We'd love to explore how MyHealthCanvas can support your patient community. Get in touch to discuss endorsement opportunities, partnership arrangements, or to learn more about our approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:andy@andysquire.ai?subject=MyHealthCanvas%20PAG%20Partnership%20Inquiry">
                <Button size="lg" className="gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Us
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Email: andy@andysquire.ai
            </p>
          </div>
        </div>
      </section>

      {/* Back to Patient Page */}
      <section className="py-8 bg-muted/20 border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/myhealthcanvas">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <ArrowLeft className="h-4 w-4" />
                Back to MyHealthCanvas for Patients
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
