import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50 mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent">
              MyHealthCanvas
            </h3>
            <p className="text-sm text-muted-foreground">
              Empowering patients, businesses, and healthcare innovation.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Products</h4>
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
                    AAA - AI Agents
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
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2">
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
              <li>
                <a
                  href="https://andysquire.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Investor Portal
                </a>
              </li>
              <li>
                <Link href="/myhealthcanvas/advocacy">
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                    For Advocacy Groups
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <p className="text-sm text-muted-foreground">
              Email: andy@andysquire.ai
            </p>
            <p className="text-sm text-muted-foreground">
              Partnering with Harvard Medical School
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MyHealthCanvas. All rights reserved.</p>
          <p className="mt-2">
            Built by patient advocate and AI healthcare expert Andy Squire
          </p>
        </div>
      </div>
    </footer>
  );
}
