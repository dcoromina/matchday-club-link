
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Teams from "./pages/Teams";
import TeamDetail from "./pages/TeamDetail";
import PlayerDetail from "./pages/PlayerDetail";
import Matches from "./pages/Matches";
import Rankings from "./pages/Rankings";
import Attendance from "./pages/Attendance";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import Financial from "./pages/Financial";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import Facilities from "./pages/Facilities";
import Communications from "./pages/Communications";
import Coaches from "./pages/Coaches";
import CoachDetail from "./pages/CoachDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamDetail />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/coaches/:coachId" element={<CoachDetail />} />
          <Route path="/player/:playerId" element={<PlayerDetail />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/events" element={<Events />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/communications" element={<Communications />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
