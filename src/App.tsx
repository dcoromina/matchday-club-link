import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { ErrorBoundary } from "@/components/ErrorBoundary";
=======
import { MainLayout } from "./components/MainLayout";
>>>>>>> ba7426074f0dc1d0d06aed7cb63608a7c0f3d87e
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
import Coaches from "./pages/Coaches";
import CoachDetail from "./pages/CoachDetail";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import Facilities from "./pages/Facilities";
import Communications from "./pages/Communications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
<<<<<<< HEAD
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:teamId" element={<TeamDetail />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/coaches/:coachId" element={<CoachDetail />} />
=======
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:teamId" element={<TeamDetail />} />
>>>>>>> ba7426074f0dc1d0d06aed7cb63608a7c0f3d87e
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
<<<<<<< HEAD
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/onboarding" element={<Onboarding />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
=======
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
>>>>>>> ba7426074f0dc1d0d06aed7cb63608a7c0f3d87e
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
