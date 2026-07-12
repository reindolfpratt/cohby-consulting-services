import { lazy, Suspense, useEffect } from "react";
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

/*
 * Only Home ships in the initial bundle. Every other page is its own
 * chunk, loaded on demand — and prefetched in the background once the
 * browser is idle, so in-site navigation stays instant.
 */
const pageLoaders = {
  About: () => import("./pages/About"),
  Solutions: () => import("./pages/Solutions"),
  NonProfits: () => import("./pages/NonProfits"),
  Contact: () => import("./pages/Contact"),
  BookConsultation: () => import("./pages/BookConsultation"),
  FreeSalesforce: () => import("./pages/nonprofit-subpages/FreeSalesforce"),
  NPSPBasics: () => import("./pages/nonprofit-subpages/NPSPBasics"),
  Challenges: () => import("./pages/nonprofit-subpages/Challenges"),
  AIAutomation: () => import("./pages/AIAutomation"),
  CloudSolutions: () => import("./pages/CloudSolutions"),
  DataAnalysis: () => import("./pages/DataAnalysis"),
  CohbyLearn: () => import("./pages/CohbyLearn"),
  ATSResume: () => import("./pages/ATSResume"),
  PrivacyPolicy: () => import("./pages/PrivacyPolicy"),
  TermsOfService: () => import("./pages/TermsOfService"),
  ThankYou: () => import("./pages/ThankYou"),
  NotFound: () => import("./pages/NotFound"),
};

const About = lazy(pageLoaders.About);
const Solutions = lazy(pageLoaders.Solutions);
const NonProfits = lazy(pageLoaders.NonProfits);
const Contact = lazy(pageLoaders.Contact);
const BookConsultation = lazy(pageLoaders.BookConsultation);
const FreeSalesforce = lazy(pageLoaders.FreeSalesforce);
const NPSPBasics = lazy(pageLoaders.NPSPBasics);
const Challenges = lazy(pageLoaders.Challenges);
const AIAutomation = lazy(pageLoaders.AIAutomation);
const CloudSolutions = lazy(pageLoaders.CloudSolutions);
const DataAnalysis = lazy(pageLoaders.DataAnalysis);
const CohbyLearn = lazy(pageLoaders.CohbyLearn);
const ATSResume = lazy(pageLoaders.ATSResume);
const PrivacyPolicy = lazy(pageLoaders.PrivacyPolicy);
const TermsOfService = lazy(pageLoaders.TermsOfService);
const ThankYou = lazy(pageLoaders.ThankYou);
const NotFound = lazy(pageLoaders.NotFound);

/* Warm the remaining page chunks once the browser has settled. */
const PrefetchPages = () => {
  useEffect(() => {
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    const schedule = (cb: () => void) =>
      win.requestIdleCallback
        ? win.requestIdleCallback(cb, { timeout: 4000 })
        : window.setTimeout(cb, 2500);

    schedule(() => {
      Object.values(pageLoaders).forEach((load, i) => {
        // Stagger so prefetching never competes with the visible page
        window.setTimeout(() => {
          load().catch(() => {
            /* offline or navigation away — the route will retry on demand */
          });
        }, i * 300);
      });
    });
  }, []);
  return null;
};

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
          <PrefetchPages />
          <Navigation />
          <main className="flex-grow relative z-10">
            <RouteTransition>
              {/* Fallback is a full-height void — the space scene shows through while a chunk loads */}
              <Suspense fallback={<div className="min-h-screen" />}>
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
              </Suspense>
            </RouteTransition>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
