import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import MyHealthCanvas from "./pages/MyHealthCanvas";
import MyHealthCanvasAdvocacy from "./pages/MyHealthCanvasAdvocacy";
import First30Days from "./pages/First30Days";
import AAA from "./pages/AAA";
import ELibrary from "./pages/ELibrary";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaregiverHelp from "./pages/CaregiverHelp";
import Caregivers from "./pages/Caregivers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Impressum from "./pages/Impressum";
import ThankYou from "./pages/ThankYou";
import Start from "./pages/Start";
import OncologyChecklist from "./pages/OncologyChecklist";
import { Redirect } from "wouter";

// Routes that should NOT show the global Header/Footer
const noLayoutRoutes = ["/start"];

function Router() {
  const [location] = useLocation();
  const hideLayout = noLayoutRoutes.includes(location);

  return (
    <>
      {!hideLayout && <Header />}
      <Switch>
        <Route path="/start" component={Start} />
        <Route path="/" component={Welcome} />
        <Route path="/questions" component={Home} />
        <Route path="/myhealthcanvas" component={MyHealthCanvas} />
        <Route path="/myhealthcanvas/advocacy" component={MyHealthCanvasAdvocacy} />
        <Route path="/myhealthcanvas/thank-you" component={ThankYou} />
        <Route path="/first-30-days-after-diagnosis" component={First30Days} />
        <Route path="/oncology-appointment-checklist" component={OncologyChecklist} />
        <Route path="/caregivers" component={Caregivers} />
        <Route path="/caregiver-help" component={CaregiverHelp} />
        <Route path="/aaa" component={AAA} />
        <Route path="/elibrary" component={ELibrary} />
        <Route path="/elibrary/:slug" component={BlogPost} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/checkout">{() => <Redirect to="/myhealthcanvas" />}</Route>
        <Route path="/checkout/:rest*">{() => <Redirect to="/myhealthcanvas" />}</Route>
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
