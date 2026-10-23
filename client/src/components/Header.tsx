import { Link, useLocation } from "wouter";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const trackPccSafetyOsClick = (placement: string) => {
    trackEvent("pcc_safety_os_click", {
      event_category: "engagement",
      event_label: placement,
      destination: "patientcentriccare.ai",
    });
  };

  const navItems = [
    { path: "/", label: "Home", isEmail: false },
    { path: "/questions", label: "Questions", isEmail: false },
    { path: "/myhealthcanvas", label: "MyHealthCanvas", isEmail: false },
    { path: "/caregivers", label: "Caregivers", isEmail: false },
    { path: "/aaa", label: "AAA - AI Agents", isEmail: false },
    { path: "/elibrary", label: "eLibrary", isEmail: false },
    { path: "/about", label: "About Andy", isEmail: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={scrollToTop}>
          <div className="flex items-center space-x-3 cursor-pointer">
            <img
              src="/images/myhealthcanvas-icon.webp"
              alt="MyHealthCanvas Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent hidden sm:inline">
              MyHealthCanvas
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-6">
          {navItems.map((item) => (
            item.isEmail ? (
              <a key={item.path} href={item.path}>
                <span className="text-sm font-medium transition-colors hover:text-primary cursor-pointer text-muted-foreground">
                  {item.label}
                </span>
              </a>
            ) : (
              <Link key={item.path} href={item.path} onClick={scrollToTop}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            )
          ))}
          <a
            href="https://www.patientcentriccare.ai/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackPccSafetyOsClick("MyHealthCanvas shared header")}
            className="inline-flex items-center gap-1.5 rounded-md border border-primary px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            aria-label="Visit PatientCentricCare.AI and PCC Safety OS"
          >
            PCC Safety OS <ExternalLink size={14} aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t bg-background">
          <nav className="container flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              item.isEmail ? (
                <a key={item.path} href={item.path} onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-sm font-medium transition-colors hover:text-primary cursor-pointer text-muted-foreground">
                    {item.label}
                  </span>
                </a>
              ) : (
                <Link key={item.path} href={item.path} onClick={() => { scrollToTop(); setMobileMenuOpen(false); }}>
                  <span
                    className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                      location === item.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              )
            ))}
            <a
              href="https://www.patientcentriccare.ai/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { trackPccSafetyOsClick("MyHealthCanvas mobile navigation"); setMobileMenuOpen(false); }}
              className="inline-flex w-fit items-center gap-1.5 rounded-md border border-primary px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              aria-label="Visit PatientCentricCare.AI and PCC Safety OS"
            >
              PCC Safety OS <ExternalLink size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
