import { Link } from "wouter";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50 mt-auto">
      <div className="container py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Brand & Purpose (No Links Except Home) */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/">
              <span className="text-lg font-bold bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent cursor-pointer hover:opacity-80">
                MyHealthCanvas
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering patients and caregivers through patient-first design, evidence-based AI, and responsible governance.
            </p>
            <p className="text-xs text-muted-foreground/80">
              Built by patient advocate and AI healthcare expert Andy Squire.
            </p>
          </div>

          {/* Column 2: Navigation (Links Only - Mirrors Header Nav) */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/myhealthcanvas">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    MyHealthCanvas
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/aaa">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    AAA – AI Agents
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/elibrary">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    eLibrary
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    About Andy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Who This Is For (TEXT ONLY - No Links) */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Who This Helps</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Patients & caregivers</li>
              <li>Patient advocacy groups</li>
              <li>Small businesses</li>
              <li>Healthcare professionals & researchers</li>
            </ul>
          </div>

          {/* Column 4: Credibility Signals (TEXT ONLY - Never Links) */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Credentials & Recognition</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Harvard Medical School – AI in Healthcare (Capstone)</li>
              <li>University of Oxford – Artificial Intelligence</li>
              <li>ISO 13485 / SaMD-aligned expertise</li>
              <li>UN AI for Good – Safety OS submission</li>
            </ul>
          </div>

          {/* Column 5: Contact (One Action Only) */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Let's Connect</h4>
            <p className="text-sm text-muted-foreground">
              Andy would be pleased to hear from you.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/contact">
                <Button variant="default" size="sm" className="w-full">
                  Contact Andy
                </Button>
              </Link>
              <a href="mailto:andy@patientcentriccare.ai">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Ethics & Positioning Strip */}
        <div className="mt-10 py-4 bg-[oklch(0.55_0.15_195)]/5 rounded-lg">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <span>Patients over profit</span>
            <span className="hidden sm:inline">•</span>
            <span>No autonomous diagnosis or treatment</span>
            <span className="hidden sm:inline">•</span>
            <span>Physician-led, evidence-based AI</span>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} MyHealthCanvas · {" "}
            <Link href="/privacy">
              <span className="hover:text-primary cursor-pointer">Privacy Policy</span>
            </Link>
            {" · "}
            <Link href="/terms">
              <span className="hover:text-primary cursor-pointer">Terms</span>
            </Link>
            {" · "}
            <Link href="/impressum">
              <span className="hover:text-primary cursor-pointer">Impressum</span>
            </Link>
            {" · "}
            <span>Jurisdiction: Switzerland</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
