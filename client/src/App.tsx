import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MyHealthCanvas from "./pages/MyHealthCanvas";
import MyHealthCanvasAdvocacy from "./pages/MyHealthCanvasAdvocacy";
import AAA from "./pages/AAA";
import ELibrary from "./pages/ELibrary";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/myhealthcanvas" component={MyHealthCanvas} />
        <Route path="/myhealthcanvas/advocacy" component={MyHealthCanvasAdvocacy} />
        <Route path="/aaa" component={AAA} />
        <Route path="/elibrary" component={ELibrary} />
        <Route path="/elibrary/:slug" component={BlogPost} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
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
