import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import DashboardCSE from "./pages/DashboardCSE";
import B2B from "./pages/B2B";
import PartnerPayment from "./pages/PartnerPayment";
import OffrirCarte from "./pages/OffrirCarte";
import ProsDuSport from "./pages/ProsDuSport";
import FAQ from "./pages/FAQ";
import PlaquetteCSE from "./pages/PlaquetteCSE";
import ExtendCard from "./pages/ExtendCard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard-cse" element={<DashboardCSE />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/partner-payment" element={<PartnerPayment />} />
          <Route path="/offrir-carte" element={<OffrirCarte />} />
          <Route path="/pros-du-sport" element={<ProsDuSport />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/plaquette-cse" element={<PlaquetteCSE />} />
          <Route path="/prolonger" element={<ExtendCard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
