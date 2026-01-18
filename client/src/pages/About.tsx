import { Button } from "@/components/ui/button";
import { Link } from "wouter";

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
                  Patient advocate and AI healthcare expert with lived experience navigating complex medical systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Cut by ~50%, Increased Authority */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Andy's Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Andy Squire's work is grounded in lived experience. After two cancer diagnoses, he navigated complex healthcare systems firsthand, confronting the real challenges patients face when communicating history, understanding options, and making informed decisions.
                </p>
                <p>
                  These experiences led Andy to focus on the intersection of AI, healthcare IT, and patient advocacy—applying technical expertise to design tools that improve clarity, safety, and patient–clinician communication.
                </p>
                <p>
                  Today, Andy works with patients, small organisations, and healthcare stakeholders to develop Safety & Governance based on Physician-as-Pilot AI-in-the-Loop (AIITL) principles (visit: <a href="https://PatientCentricCare.AI/physician-as-pilot" className="text-primary hover:underline">PatientCentricCare.AI/physician-as-pilot</a>) to enable Doctors to free up their time to prioritise the more Human skills needed in patient care like relationships & patient behaviour change that can influence outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section - Compressed to Two Columns */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Credentials & Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Column A: Education & Training */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Education & Training</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>University of Oxford — Artificial Intelligence</li>
                  <li>Harvard Medical School — AI in Healthcare</li>
                  <li>University of Cambridge — Executive Education</li>
                </ul>
              </div>

              {/* Column B: Applied Expertise */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Applied Expertise</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>AI Healthcare IT & Clinical Workflow Design</li>
                  <li>Regulatory Compliance (SaMD, ISO 13485)</li>
                  <li>EHR Integration (FHIR)</li>
                  <li>Safety & Governance Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Engagements & Contributions */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Selected Engagements & Contributions
            </h2>
            <ul className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
              <li>Harvard Medical School — AI in Healthcare Capstone (Human-centric Safety OS)</li>
              <li>AI Automation Agency Accelerator Lab Community</li>
              <li>UN AI for Good — Safety OS submission</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recognition & Impact - Below Credentials, De-emotionalised */}
      <section className="py-16 bg-muted/30">
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
                <p className="text-muted-foreground">of profits donated to cancer research</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">22+</div>
                <p className="text-muted-foreground">evidence-based articles published</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - One Primary, One Secondary Only */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              Whether you're a patient, caregiver, healthcare professional, or organisation, Andy would be pleased to hear from you.
            </p>
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg font-medium text-[oklch(0.55_0.15_195)]">Contact Founder - Andy Squire</p>
              <a 
                href="mailto:andy@patientcentriccare.ai?subject=Enquiry%20from%20MyHealthCanvas%20Website&body=Hello%20Andy%2C%0A%0AI%20found%20your%20website%20and%20would%20like%20to%20connect.%0A%0A"
                className="text-lg text-muted-foreground hover:text-primary underline"
              >
                andy@patientcentriccare.ai
              </a>
              <Link href="/myhealthcanvas" className="mt-4">
                <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer underline">
                  Explore MyHealthCanvas
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
