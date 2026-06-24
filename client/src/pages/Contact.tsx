import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trackContactFormSubmit } from "@/lib/analytics";

// Read an optional ?subject= query param so deep links (e.g. the advocacy
// "Become a partner" CTA -> /contact?subject=partnership) pre-select the topic.
const VALID_SUBJECTS = ["myhealthcanvas", "aaa", "elibrary", "partnership", "media", "other"];
function getSubjectFromUrl(): string {
  if (typeof window === "undefined") return "";
  const s = new URLSearchParams(window.location.search).get("subject") ?? "";
  return VALID_SUBJECTS.includes(s) ? s : "";
}

// Web3Forms access key for silent lead delivery to Andy's inbox.
// Get a free key at https://web3forms.com (tied to the destination email),
// then set VITE_WEB3FORMS_KEY in the deploy environment. If unset, the form
// gracefully falls back to opening the visitor's email client (mailto).
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
const LEAD_EMAIL = "andy@andysquire.ai";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    subject: getSubjectFromUrl(),
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // Fallback: open the visitor's mail client pre-filled, so a lead is never
  // silently lost even if the form endpoint is unconfigured or fails.
  const sendViaMailto = () => {
    const subject = encodeURIComponent(
      `[MyHealthCanvas] ${formData.subject || "Enquiry"} \u2014 ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Company: ${formData.company}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `${formData.message}`
    );
    window.location.href = `mailto:${LEAD_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Fire the conversion event regardless of delivery channel.
    trackContactFormSubmit(formData.subject);

    try {
      if (WEB3FORMS_ACCESS_KEY) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `[MyHealthCanvas] ${formData.subject || "Enquiry"} \u2014 ${formData.name}`,
            from_name: formData.name,
            name: formData.name,
            company: formData.company,
            email: formData.email,
            enquiry_type: formData.subject,
            message: formData.message,
          }),
        });
        if (!res.ok) throw new Error(`Web3Forms responded ${res.status}`);
        toast.success("Thank you for your message! Andy will respond within 24-48 hours.");
        setFormData({ name: "", company: "", email: "", subject: "", message: "" });
      } else {
        // No endpoint configured yet \u2014 fall back to mailto.
        toast.info("Opening your email app to send your message to Andy...");
        sendViaMailto();
      }
    } catch (err) {
      // Endpoint failed \u2014 don't lose the lead; fall back to mailto.
      console.warn("Contact form delivery failed, falling back to mailto:", err);
      toast.info("Opening your email app to send your message to Andy...");
      sendViaMailto();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="Contact Andy Squire | MyHealthCanvas & AI Automation"
        description="Get in touch with Andy Squire for patient advocacy inquiries, AI automation consultations, partnership opportunities, or general questions about MyHealthCanvas."
        keywords="contact Andy Squire, MyHealthCanvas contact, patient advocacy contact, AI automation consultation, healthcare technology inquiry"
        canonicalPath="/contact"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about MyHealthCanvas, AAA, or the eLibrary? Andy would
              love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and Andy will get back to you within
                      24-48 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Your name"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Company / Organisation</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({ ...formData, company: e.target.value })
                            }
                            placeholder="Your organisation"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="your@email.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) =>
                            setFormData({ ...formData, subject: value })
                          }
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="What is this about?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="myhealthcanvas">
                              MyHealthCanvas
                            </SelectItem>
                            <SelectItem value="aaa">AAA - AI Agents</SelectItem>
                            <SelectItem value="elibrary">eLibrary</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="media">Media Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          placeholder="Tell Andy what's on your mind..."
                          rows={6}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                        {submitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:andy@andysquire.ai"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          andy@andysquire.ai
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">Response Time</h3>
                        <p className="text-sm text-muted-foreground">
                          Within 24-48 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-sm text-muted-foreground">
                          Working globally with Harvard Medical School partnership
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/20">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="/myhealthcanvas"
                          className="text-muted-foreground hover:text-primary"
                        >
                          → MyHealthCanvas Product
                        </a>
                      </li>
                      <li>
                        <a
                          href="/aaa"
                          className="text-muted-foreground hover:text-primary"
                        >
                          → AAA AI Agent Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="/elibrary"
                          className="text-muted-foreground hover:text-primary"
                        >
                          → eLibrary Articles
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about"
                          className="text-muted-foreground hover:text-primary"
                        >
                          → About Andy
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://andysquire.ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          → Investor Portal
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    How quickly will I receive a response?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Andy personally responds to all messages within 24-48 hours. For
                    urgent matters, please mention "URGENT" in your subject line.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Can I schedule a call with Andy?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! For AAA consultations or partnership discussions, mention your
                    preferred time in the message and Andy will send you a calendar
                    link.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Do you offer custom solutions?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely. AAA specializes in custom AI agent solutions tailored to
                    your specific business needs. Contact Andy to discuss your
                    requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Are you available for speaking engagements?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, Andy is available for speaking engagements on AI in healthcare,
                    patient advocacy, and AI governance. Please use the "Media Inquiry"
                    subject option.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
