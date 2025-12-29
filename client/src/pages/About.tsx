import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Heart, Award, Users, Briefcase } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/AndyAIPhoto.jpg"
                  alt="Andy Squire"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Meet{" "}
                  <span className="bg-gradient-to-r from-primary to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent">
                    Andy Squire
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  A 2× cancer survivor, patient advocate, and AI healthcare expert
                  dedicated to putting patients over profit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Andy's Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Andy Squire's journey into patient advocacy began with two cancer
                  diagnoses that fundamentally changed his perspective on healthcare.
                  As a patient navigating complex medical systems, he experienced
                  firsthand the challenges of communicating health history, understanding
                  treatment options, and making informed decisions.
                </p>
                <p>
                  These experiences drove Andy to combine his technical expertise in AI
                  and healthcare IT with his passion for patient advocacy. He realized
                  that technology, when designed with patients at the center, could
                  dramatically improve healthcare outcomes and patient experiences.
                </p>
                <p>
                  Today, Andy works at the intersection of AI, healthcare, and patient
                  advocacy, creating solutions that empower patients, support small
                  businesses, and advance healthcare innovation—all while maintaining an
                  unwavering commitment to putting patients over profit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Credentials & Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">AI Education</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• University of Oxford</li>
                        <li>• Harvard Medical School</li>
                        <li>• University of Cambridge</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Expertise */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Briefcase className="h-8 w-8 text-primary flex-shrink-0" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Technical Expertise</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• AI Healthcare IT</li>
                        <li>• Regulatory Compliance (SaMD, FDA)</li>
                        <li>• ISO 13485 Standards</li>
                        <li>• EHR Integration (FHIR)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Healthcare Experience */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Heart className="h-8 w-8 text-primary flex-shrink-0" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Healthcare Experience</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Patient Journey & Advocacy</li>
                        <li>• Pharma CX Strategy</li>
                        <li>• Clinical Workflow Design</li>
                        <li>• Safety Regulatory Architect</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Partnerships */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-primary flex-shrink-0" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Partnerships</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Harvard Medical School Capstone - Human centric Safety OS</li>
                        <li>• AI Automation Agency Accelerator Lab Community</li>
                        <li>• Safety OS Submission to United Nations AIForGood</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Mission & Values</h2>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Put Patients Over Profit
                      </h3>
                      <p className="text-muted-foreground">
                        Every decision, every product, and every service is designed with
                        patients' best interests at heart. 50% of MyHealthCanvas profits
                        go directly to cancer research charities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Empower Small Businesses
                      </h3>
                      <p className="text-muted-foreground">
                        Small businesses deserve access to enterprise-level AI automation.
                        AAA makes advanced AI agents affordable and accessible to
                        businesses of all sizes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Advance AI Governance
                      </h3>
                      <p className="text-muted-foreground">
                        Through the eLibrary and thought leadership, Andy contributes to
                        the development of ethical AI governance frameworks that protect
                        patients and promote innovation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Evidence-Based Approach
                      </h3>
                      <p className="text-muted-foreground">
                        Every recommendation, assessment, and solution is backed by
                        evidence and evaluated using Andy's AAA Assessment Framework:
                        Accuracy, Applicability, and Accessibility.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Recognition & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">2×</div>
                <p className="text-muted-foreground">Cancer Survivor</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">50%</div>
                <p className="text-muted-foreground">Profits to Charity</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">22+</div>
                <p className="text-muted-foreground">Published Articles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              Whether you're a patient, business owner, or healthcare professional,
              Andy would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Contact Andy
              </a>
              <a
                href="mailto:andy@andysquire.ai"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                andy@andysquire.ai
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
