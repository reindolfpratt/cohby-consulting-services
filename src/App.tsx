import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import LiquidGlassBackground from "./components/LiquidGlassBackground";
import ScrollProgress from "./components/motion/ScrollProgress";
import RouteTransition from "./components/motion/RouteTransition";
import CometField from "./components/motion/CometField";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import NonProfits from "./pages/NonProfits";
import Contact from "./pages/Contact";
import BookConsultation from "./pages/BookConsultation";
import FreeSalesforce from "./pages/nonprofit-subpages/FreeSalesforce";
import NPSPBasics from "./pages/nonprofit-subpages/NPSPBasics";
import Challenges from "./pages/nonprofit-subpages/Challenges";
import AIAutomation from "./pages/AIAutomation";
import CloudSolutions from "./pages/CloudSolutions";
import DataAnalysis from "./pages/DataAnalysis";
import CohbyLearn from "./pages/CohbyLearn";
import ATSResume from "./pages/ATSResume";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <ScrollProgress />
          {/* Site-wide space scene: satin base + orbs behind, comet overlay above */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <LiquidGlassBackground variant="hero" />
          </div>
          <CometField />
          <Navigation />
          <main className="flex-grow relative z-10">
            <RouteTransition>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/non-profits" element={<NonProfits />} />
              <Route path="/non-profits/free-salesforce" element={<FreeSalesforce />} />
              <Route path="/non-profits/npsp-basics" element={<NPSPBasics />} />
              <Route path="/non-profits/challenges" element={<Challenges />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-consultation" element={<BookConsultation />} />
              <Route path="/ai-automation" element={<AIAutomation />} />
              <Route path="/cloud-solutions" element={<CloudSolutions />} />
              <Route path="/data-analysis" element={<DataAnalysis />} />
              <Route path="/products/cohbylearn" element={<CohbyLearn />} />
              <Route path="/products/ats-resume" element={<ATSResume />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/thank-you" element={<ThankYou />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
              </Routes>
            </RouteTransition>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
