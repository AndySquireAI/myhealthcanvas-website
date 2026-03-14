import SEO from "@/components/SEO";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="Terms of Service | MyHealthCanvas"
        description="Terms of service for MyHealthCanvas. Read our terms and conditions for using our patient health record tools and services."
        keywords="MyHealthCanvas terms of service, terms and conditions, patient health records terms"
        canonicalPath="/terms"
      />
      <div className="container py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using MyHealthCanvas (the "Service"), you accept and agree to be bound by 
              these Terms of Service. If you do not agree to these terms, please do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                MyHealthCanvas is a patient empowerment tool designed to help individuals organize their 
                health information and prepare for conversations with healthcare providers.
              </p>
              <p className="font-semibold text-foreground">
                IMPORTANT: MyHealthCanvas is NOT a medical device and does NOT provide medical advice, 
                diagnosis, or treatment recommendations. It is a planning and organization tool only.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. No Medical Advice</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                The content and tools provided through MyHealthCanvas are for informational and organizational 
                purposes only. They are not intended to be a substitute for professional medical advice, 
                diagnosis, or treatment.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Always seek the advice of your physician or other qualified health provider</li>
                <li>Never disregard professional medical advice because of something you read on this website</li>
                <li>If you think you may have a medical emergency, call your doctor or emergency services immediately</li>
              </ul>
              <p className="font-semibold text-foreground">
                No autonomous diagnosis, treatment, or clinical decision-making is performed by this Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
            <div className="text-muted-foreground">
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use the Service only for lawful purposes</li>
                <li>Provide accurate information when using the Service</li>
                <li>Not attempt to gain unauthorized access to any part of the Service</li>
                <li>Not use the Service in any way that could damage or impair it</li>
                <li>Not use the Service for any commercial purpose without our consent</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on MyHealthCanvas, including text, graphics, logos, and software, is the property 
              of Andy Squire or its content suppliers and is protected by Swiss and international copyright 
              laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Privacy</h2>
            <p className="text-muted-foreground">
              Your use of the Service is also governed by our{" "}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>, 
              which is incorporated into these Terms by reference.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Disclaimer of Warranties</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Implied warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy or completeness of information</li>
              </ul>
              <p>
                We do not warrant that the Service will be uninterrupted, secure, or error-free.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANDY SQUIRE AND MYHEALTHCANVAS SHALL NOT BE LIABLE 
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF 
              PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, 
              GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to indemnify and hold harmless Andy Squire and MyHealthCanvas from any claims, 
              damages, losses, liabilities, and expenses (including legal fees) arising out of your use 
              of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Modifications to Service</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) 
              at any time, with or without notice. We shall not be liable to you or any third party for 
              any modification, suspension, or discontinuation of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may revise these Terms at any time by updating this page. Changes are effective immediately 
              upon posting. Your continued use of the Service after changes constitutes acceptance of the 
              revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Governing Law and Jurisdiction</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws of Switzerland, 
              without regard to its conflict of law provisions. Any disputes arising from these Terms or 
              your use of the Service shall be subject to the exclusive jurisdiction of the courts of 
              Basel-Stadt, Switzerland.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Severability</h2>
            <p className="text-muted-foreground">
              If any provision of these Terms is found to be unenforceable or invalid, that provision 
              shall be limited or eliminated to the minimum extent necessary, and the remaining provisions 
              shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms, please contact:<br /><br />
              Andy Squire<br />
              Email: <a href="mailto:andy@patientcentriccare.ai" className="text-primary hover:underline">andy@patientcentriccare.ai</a><br />
              Address: Elisabethenstrasse 36, 4051 Basel, Switzerland
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
