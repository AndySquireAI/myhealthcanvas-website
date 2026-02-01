import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

export default function ThankYou() {
  const [location] = useLocation();
  const [product, setProduct] = useState<"current" | "complete" | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    const productParam = params.get("product");
    const orderIdParam = params.get("order_id");

    if (productParam === "current" || productParam === "complete") {
      setProduct(productParam);
    }
    if (orderIdParam) {
      setOrderId(orderIdParam);
    }
  }, [location]);

  const downloadLinks = {
    current: {
      name: "MyHealthCanvas - Current Plan",
      price: "£9",
      description: "One-page template",
      file: "/downloads/MyHealthCanvas-Current-Plan.pdf",
    },
    complete: {
      name: "MyHealthCanvas - Complete Plan",
      price: "£12",
      description: "Two-page template",
      file: "/downloads/MyHealthCanvas-Complete-Plan.pdf",
    },
  };

  const selectedProduct = product ? downloadLinks[product] : null;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Thank You for Your Purchase | MyHealthCanvas"
        description="Download your MyHealthCanvas template"
        canonicalPath="/thank-you"
      />

      <section className="py-20 px-6 md:px-12 lg:px-24 flex-grow">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Purchase!
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Your payment was successful. You can download your template below.
          </p>

          {orderId && (
            <p className="text-sm text-gray-400 mb-8">
              Order ID: {orderId}
            </p>
          )}

          {/* Download Card */}
          {selectedProduct ? (
            <Card className="border-[oklch(0.55_0.15_195)] border-2 bg-white mb-8">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {selectedProduct.name}
                </CardTitle>
                <p className="text-gray-500">{selectedProduct.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <a
                  href={selectedProduct.file}
                  download
                  className="block"
                >
                  <Button
                    size="lg"
                    className="w-full bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white font-semibold py-6 text-lg"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Your Template (PDF)
                  </Button>
                </a>

                <p className="text-sm text-gray-500">
                  Click the button above to download your PDF template. 
                  You can print it and fill it out by hand.
                </p>
              </CardContent>
            </Card>
          ) : (
            /* Fallback - show both download options */
            <div className="space-y-6 mb-8">
              <p className="text-gray-600 mb-4">
                Please select your purchased product to download:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg">Current Plan</CardTitle>
                    <p className="text-sm text-gray-500">One-page template (£9)</p>
                  </CardHeader>
                  <CardContent>
                    <a href="/downloads/MyHealthCanvas-Current-Plan.pdf" download>
                      <Button className="w-full bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)]">
                        Download Current Plan
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg">Complete Plan</CardTitle>
                    <p className="text-sm text-gray-500">Two-page template (£12)</p>
                  </CardHeader>
                  <CardContent>
                    <a href="/downloads/MyHealthCanvas-Complete-Plan.pdf" download>
                      <Button className="w-full bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)]">
                        Download Complete Plan
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-gray-50 rounded-lg p-6 text-left mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">Next Steps:</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Download and save your PDF template (locally or to your Cloud)</li>
              <li>On your Phone, open it in free Adobe Acrobat PDF Reader - Fill & Sign (for best results)</li>
              <li>Fill the form in at your own pace. Update it like a Journal. Prepare for doctors' appointments</li>
              <li>Refer to it on your Phone when speaking with your Doctor</li>
              <li>Never forget a medication name or question to your doctor again</li>
              <li>Share it. Check it. Print it. You're in control.</li>
            </ol>
          </div>

          {/* Support Info */}
          <div className="text-sm text-gray-500 mb-8">
            <p>
              Having trouble with your download?{" "}
              <a
                href="mailto:andy@patientcentriccare.ai"
                className="text-[oklch(0.55_0.15_195)] hover:underline"
              >
                Contact us
              </a>
            </p>
          </div>

          {/* Back to Home */}
          <Link href="/">
            <Button variant="outline" className="mt-4">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
