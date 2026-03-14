import SEO from "@/components/SEO";

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="Impressum (Legal Notice) | MyHealthCanvas"
        description="Legal notice and company information for MyHealthCanvas. Required legal disclosure under German and EU law."
        keywords="MyHealthCanvas impressum, legal notice, company information"
        canonicalPath="/impressum"
      />
      <div className="container py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Impressum (Legal Notice)</h1>
        
        <div className="flex gap-4 mb-8">
          <a href="#english" className="text-primary hover:underline font-medium">English</a>
          <span className="text-muted-foreground">|</span>
          <a href="#deutsch" className="text-primary hover:underline font-medium">Deutsch</a>
        </div>

        {/* ENGLISH VERSION */}
        <section id="english" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">English</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Website Operator</h3>
              <p className="text-muted-foreground">
                Andy Squire (sole proprietor)<br />
                Elisabethenstrasse 36<br />
                4051 Basel, Switzerland
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="text-muted-foreground">
                Email: <a href="mailto:andy@patientcentriccare.ai" className="text-primary hover:underline">andy@patientcentriccare.ai</a><br />
                Website: <a href="https://myhealthcanvas.com" className="text-primary hover:underline">MyHealthCanvas.com</a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Responsible for Content (Editor)</h3>
              <p className="text-muted-foreground">Andy Squire</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Purpose of this Website</h3>
              <p className="text-muted-foreground">
                Information about patient empowerment tools, health record organization, and AI-assisted 
                healthcare communication. Content is provided for informational purposes only.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">No Medical Advice / No Clinical Decision-Making</h3>
              <p className="text-muted-foreground">
                This website does not provide medical advice. MyHealthCanvas is a planning and organization tool 
                that helps patients prepare for conversations with their healthcare providers. It does not replace 
                professional medical judgement. <strong>No autonomous diagnosis, treatment, or clinical decision-making is performed.</strong>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Liability for Content</h3>
              <p className="text-muted-foreground">
                We strive to keep content accurate and up to date; however, we do not warrant completeness 
                or correctness. Use of information is at your own risk.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Liability for Links</h3>
              <p className="text-muted-foreground">
                External links are provided for convenience. We have no control over third-party content 
                and accept no responsibility for it.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Copyright</h3>
              <p className="text-muted-foreground">
                Unless stated otherwise, content is protected by copyright. Any reproduction requires 
                prior written permission.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
              <p className="text-muted-foreground">
                See our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Jurisdiction</h3>
              <p className="text-muted-foreground">Switzerland</p>
            </div>
          </div>
        </section>

        <hr className="my-8 border-muted" />

        {/* GERMAN VERSION */}
        <section id="deutsch">
          <h2 className="text-2xl font-bold mb-6 text-primary">Deutsch</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Betreiber der Website</h3>
              <p className="text-muted-foreground">
                Andy Squire (Einzelfirma)<br />
                Elisabethenstrasse 36<br />
                4051 Basel, Schweiz
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
              <p className="text-muted-foreground">
                E-Mail: <a href="mailto:andy@patientcentriccare.ai" className="text-primary hover:underline">andy@patientcentriccare.ai</a><br />
                Website: <a href="https://myhealthcanvas.com" className="text-primary hover:underline">MyHealthCanvas.com</a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Verantwortlich für den Inhalt</h3>
              <p className="text-muted-foreground">Andy Squire</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Zweck der Website</h3>
              <p className="text-muted-foreground">
                Informationen zu Werkzeugen für Patientenermächtigung, Organisation von Gesundheitsdaten und 
                KI-unterstützte Kommunikation im Gesundheitswesen. Inhalte dienen ausschließlich der Information.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Kein medizinischer Rat / keine klinischen Entscheidungen</h3>
              <p className="text-muted-foreground">
                Diese Website stellt keine medizinische Beratung dar. MyHealthCanvas ist ein Planungs- und 
                Organisationswerkzeug, das Patienten bei der Vorbereitung auf Gespräche mit ihren Ärzten unterstützt. 
                Es ersetzt keine ärztliche Beurteilung. <strong>Es erfolgt keine autonome Diagnose, Behandlung oder 
                klinische Entscheidungsfindung.</strong>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Haftung für Inhalte</h3>
              <p className="text-muted-foreground">
                Wir bemühen uns um Aktualität und Richtigkeit, übernehmen jedoch keine Gewähr für 
                Vollständigkeit oder Fehlerfreiheit. Nutzung erfolgt auf eigenes Risiko.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Haftung für Links</h3>
              <p className="text-muted-foreground">
                Externe Links dienen der Orientierung. Für Inhalte Dritter übernehmen wir keine 
                Verantwortung.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Urheberrecht</h3>
              <p className="text-muted-foreground">
                Sofern nicht anders angegeben, sind Inhalte urheberrechtlich geschützt. 
                Vervielfältigung nur mit schriftlicher Zustimmung.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Datenschutz</h3>
              <p className="text-muted-foreground">
                Siehe <a href="/privacy" className="text-primary hover:underline">Datenschutzerklärung</a>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Gerichtsstand</h3>
              <p className="text-muted-foreground">Schweiz</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
