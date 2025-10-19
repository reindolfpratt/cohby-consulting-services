import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import NonProfits from "./pages/NonProfits";
import Contact from "./pages/Contact";
import BookConsultation from "./pages/BookConsultation";
import FreeSalesforce from "./pages/nonprofit-subpages/FreeSalesforce";
import NPSPBasics from "./pages/nonprofit-subpages/NPSPBasics";
import Challenges from "./pages/nonprofit-subpages/Challenges";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
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
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
