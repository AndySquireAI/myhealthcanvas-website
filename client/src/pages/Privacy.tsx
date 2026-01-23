export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              MyHealthCanvas ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, and safeguard your information when you visit our website 
              myhealthcanvas.com (the "Site") and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Data Controller</h2>
            <p className="text-muted-foreground">
              The data controller responsible for your personal data is:<br /><br />
              Andy Squire (sole proprietor)<br />
              Elisabethenstrasse 36<br />
              4051 Basel, Switzerland<br />
              Email: <a href="mailto:andy@patientcentriccare.ai" className="text-primary hover:underline">andy@patientcentriccare.ai</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Information We Collect</h2>
            <div className="text-muted-foreground space-y-4">
              <p><strong>Information you provide:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email address) when you contact us or subscribe to updates</li>
                <li>Any information you voluntarily provide through forms or correspondence</li>
              </ul>
              <p><strong>Information collected automatically:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Technical data (IP address, browser type, device information)</li>
                <li>Usage data (pages visited, time spent, referring website)</li>
                <li>Cookies and similar technologies (see Section 7)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. How We Use Your Information</h2>
            <div className="text-muted-foreground">
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you updates and information (with your consent)</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Legal Basis for Processing (GDPR/Swiss DPA)</h2>
            <div className="text-muted-foreground">
              <p>We process your personal data based on:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Consent:</strong> Where you have given explicit consent</li>
                <li><strong>Contract:</strong> Where processing is necessary for a contract with you</li>
                <li><strong>Legitimate interests:</strong> For website analytics and service improvement</li>
                <li><strong>Legal obligation:</strong> Where required by law</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Data Sharing and Transfers</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                We do not sell your personal data. We may share data with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist in operating our website (hosting, analytics)</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p>
                If data is transferred outside Switzerland or the EEA, we ensure appropriate safeguards 
                are in place (e.g., Standard Contractual Clauses).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Our website uses cookies to enhance your experience. Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
              </ul>
              <p>
                You can control cookies through your browser settings. Disabling cookies may affect 
                website functionality.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain personal data only as long as necessary for the purposes outlined in this policy, 
              or as required by law. Contact data is typically retained for 2 years after last interaction 
              unless you request earlier deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Your Rights</h2>
            <div className="text-muted-foreground">
              <p>Under Swiss and EU data protection law, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at{" "}
                <a href="mailto:andy@patientcentriccare.ai" className="text-primary hover:underline">
                  andy@patientcentriccare.ai
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal data 
              against unauthorized access, alteration, disclosure, or destruction. However, no internet 
              transmission is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not directed to individuals under 16. We do not knowingly collect personal 
              data from children. If you believe we have collected data from a child, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Changes will be posted on this page 
              with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground">
              For questions about this Privacy Policy or your personal data, contact:<br /><br />
              Andy Squire<br />
              Email: <a href="mailto:andy@patientcentriccare.ai" className="text-primary hover:underline">andy@patientcentriccare.ai</a><br />
              Address: Elisabethenstrasse 36, 4051 Basel, Switzerland
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">14. Supervisory Authority</h2>
            <p className="text-muted-foreground">
              The competent supervisory authority for data protection in Switzerland is:<br /><br />
              Federal Data Protection and Information Commissioner (FDPIC)<br />
              Feldeggweg 1<br />
              3003 Bern, Switzerland<br />
              <a href="https://www.edoeb.admin.ch" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                www.edoeb.admin.ch
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
