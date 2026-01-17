import { Button } from "@/components/ui/button";
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
import { CheckCircle2, Bot, Clock, TrendingUp, DollarSign, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AAA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    challenge: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    toast.success("Thank you! Andy will contact you within 24-48 hours.");
    setFormData({ name: "", email: "", businessType: "", challenge: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      {/* Clarifying Banner - Filters wrong audience (Bucket B & C) */}
      <div className="bg-yellow-50 border-b border-yellow-200 py-3">
        <div className="container text-center text-sm text-yellow-800 font-medium">
          This site focusses on Patient Empowerment, Agentic AI Automation services, & curated AI in Healthcare content. For Governance, visit: <a href="https://PatientCentricCare.AI" className="underline font-semibold hover:text-yellow-900">https://PatientCentricCare.AI</a>
        </div>
      </div>
      
      <section className="relative bg-gradient-to-br from-[oklch(0.65_0.14_210)]/10 via-background to-background py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Your AI Coworker{" "}
              <span className="bg-gradient-to-r from-[oklch(0.65_0.14_210)] to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent">
                is Ready
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Save 50+ hours per month with AI agents that actually work for your
              business. Custom-built, affordable, and proven to deliver ROI.
            </p>
            <div className="mt-8">
              <img 
                src="/images/hero-aaa-new.png" 
                alt="AI Automation Agency - 24/7 Agent Co-Workers with 90% Cost Savings" 
                className="rounded-xl shadow-2xl max-w-3xl mx-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <Clock className="h-12 w-12 text-destructive mx-auto" />
                <h3 className="text-xl font-bold">The Problem</h3>
                <p className="text-muted-foreground">
                  Small businesses waste 20+ hours/week on repetitive tasks that drain
                  time and energy
                </p>
              </div>
              <div className="space-y-4">
                <Bot className="h-12 w-12 text-[oklch(0.65_0.14_210)] mx-auto" />
                <h3 className="text-xl font-bold">The Solution</h3>
                <p className="text-muted-foreground">
                  Custom AI agents tailored to your specific business needs, working
                  24/7
                </p>
              </div>
              <div className="space-y-4">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto" />
                <h3 className="text-xl font-bold">The Result</h3>
                <p className="text-muted-foreground">
                  3-6 month ROI payback with 50+ hours saved monthly and increased
                  revenue
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Agents for Every Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Custom solutions built for your industry and specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Restaurants */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Restaurants</CardTitle>
                <CardDescription>Streamline operations & orders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Order management & tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Inventory tracking & alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Customer communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Menu optimization insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* E-commerce */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-[oklch(0.65_0.14_210)]/30">
              <CardHeader>
                <CardTitle className="text-2xl">E-commerce</CardTitle>
                <CardDescription>Automate sales & support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Product descriptions at scale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">24/7 customer support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Inventory management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Marketing automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service Businesses */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Service Businesses</CardTitle>
                <CardDescription>Automate admin & client work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Client communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Invoice management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Follow-up automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AAA Framework */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Andy's AAA Assessment Framework
              </h2>
              <p className="text-lg text-muted-foreground">
                Not all AI is created equal. Here's how Andy evaluates solutions:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Does it work reliably? Is it technically sound and clinically/operationally effective?
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Applicability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Is it right for your business? Who does it help and what use cases does it solve?
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Can you afford and use it? Cost, ease of use, and availability matter.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Andy uses this framework to ensure you get AI solutions that actually deliver value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Real Results from Real Businesses
            </h2>

            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[oklch(0.65_0.14_210)]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-[oklch(0.65_0.14_210)]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Restaurant Chain</h3>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-[oklch(0.65_0.14_210)]">
                          Saved 50 hours/month
                        </span>{" "}
                        by automating order management and inventory tracking across 3 locations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">E-commerce Store</h3>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-green-600">
                          Increased sales 30%
                        </span>{" "}
                        with AI-powered product descriptions and 24/7 customer support automation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[oklch(0.55_0.18_270)]/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-6 w-6 text-[oklch(0.55_0.18_270)]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Service Business</h3>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-[oklch(0.55_0.18_270)]">
                          Automated 70% of admin
                        </span>{" "}
                        tasks including scheduling, invoicing, and client follow-ups.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Free Resources</h2>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <Download className="h-16 w-16 text-[oklch(0.65_0.14_210)] flex-shrink-0" />
                  <div className="text-left flex-1">
                    <h3 className="text-2xl font-bold mb-2">
                      Mastering AI Agents Guide
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive guide to understanding and implementing AI agents
                      in your business. 29.8 MB PDF with real examples and frameworks.
                    </p>
                    <Button asChild>
                      <a href="/pdfs/Mastering_AI_Agents_Guide.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Free Guide
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transparent Pricing
              </h2>
              <p className="text-lg text-muted-foreground">
                Custom quotes based on your specific needs
              </p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Custom AI Agent Solutions</CardTitle>
                <CardDescription>Tailored to your business</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Typical Range:</span>
                    <span className="font-bold text-xl">$500-2000/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">ROI Payback:</span>
                    <span className="font-bold text-xl">3-6 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time Saved:</span>
                    <span className="font-bold text-xl">50+ hours/month</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center pt-4 border-t">
                  Final pricing depends on complexity, integrations, and ongoing support needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-[oklch(0.65_0.14_210)]/10 to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground">
                Contact Andy for a free consultation and custom quote
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, businessType: value })
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="service">Service Business</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenge">What's your biggest challenge? *</Label>
                    <Textarea
                      id="challenge"
                      required
                      value={formData.challenge}
                      onChange={(e) =>
                        setFormData({ ...formData, challenge: e.target.value })
                      }
                      placeholder="Tell Andy about the repetitive tasks or challenges you're facing..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message to Andy
                  </Button>

                  <p className="text-sm text-center text-muted-foreground">
                    Or email directly:{" "}
                    <a
                      href="mailto:andy@andysquire.ai"
                      className="text-primary hover:underline"
                    >
                      andy@andysquire.ai
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
