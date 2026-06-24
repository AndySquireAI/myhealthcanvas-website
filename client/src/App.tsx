import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SiteSearch from "./components/SiteSearch";
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
import GetStarted from "./pages/GetStarted";
import OncologyChecklist from "./pages/OncologyChecklist";
import OncologyQuestions from "./pages/OncologyQuestions";
import QuestionsAfterDiagnosis from "./pages/QuestionsAfterDiagnosis";
import QuestionsBeforeChemotherapy from "./pages/QuestionsBeforeChemotherapy";
import QuestionsBeforeImmunotherapy from "./pages/QuestionsBeforeImmunotherapy";
import QuestionsAboutClinicalTrials from "./pages/QuestionsAboutClinicalTrials";
import CaregiverOncologyQuestions from "./pages/CaregiverOncologyQuestions";
import PrepareForAppointment from "./pages/PrepareForAppointment";
import PatientOutcomes from "./pages/PatientOutcomes";
import WhyPreparationMatters from "./pages/WhyPreparationMatters";
import ShareExperience from "./pages/ShareExperience";
import ClinicianFeedback from "./pages/ClinicianFeedback";
import EvidenceDashboard from "./pages/EvidenceDashboard";
import { Redirect } from "wouter";

// Routes that should NOT show the global Header/Footer
const noLayoutRoutes = ["/start", "/evidence-dashboard"];

function Router() {
  const [location] = useLocation();
  const hideLayout = noLayoutRoutes.includes(location);

  return (
    <>
      {!hideLayout && <Header />}
      {!hideLayout && <SiteSearch />}
      <Switch>
        <Route path="/start" component={Start} />
        <Route path="/get-started" component={GetStarted} />
        <Route path="/" component={Welcome} />
        <Route path="/questions" component={Home} />
        <Route path="/myhealthcanvas" component={MyHealthCanvas} />
        <Route path="/myhealthcanvas/advocacy" component={MyHealthCanvasAdvocacy} />
        <Route path="/myhealthcanvas/thank-you" component={ThankYou} />
        <Route path="/first-30-days-after-diagnosis" component={First30Days} />
        <Route path="/oncology-appointment-checklist" component={OncologyChecklist} />
        <Route path="/oncology-questions" component={OncologyQuestions} />
        <Route path="/questions-after-cancer-diagnosis" component={QuestionsAfterDiagnosis} />
        <Route path="/questions-before-chemotherapy" component={QuestionsBeforeChemotherapy} />
        <Route path="/questions-before-immunotherapy" component={QuestionsBeforeImmunotherapy} />
        <Route path="/questions-about-clinical-trials" component={QuestionsAboutClinicalTrials} />
        <Route path="/caregiver-oncology-questions" component={CaregiverOncologyQuestions} />
        <Route path="/prepare-for-your-oncology-appointment" component={PrepareForAppointment} />
        <Route path="/patient-outcomes" component={PatientOutcomes} />
        <Route path="/why-appointment-preparation-matters" component={WhyPreparationMatters} />
        <Route path="/share-your-experience" component={ShareExperience} />
        <Route path="/clinician-feedback" component={ClinicianFeedback} />
        <Route path="/evidence-dashboard" component={EvidenceDashboard} />
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
