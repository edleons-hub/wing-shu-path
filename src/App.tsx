import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Historia from "./pages/Historia";
import KungFu from "./pages/KungFu";
import Aulas from "./pages/Aulas";
import Eventos from "./pages/Eventos";
import Combate from "./pages/Combate";
import Contato from "./pages/Contato";
import FAQ from "./pages/FAQ";
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
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/kung-fu" element={<KungFu />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/combate" element={<Combate />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
