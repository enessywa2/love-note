import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomNav from "@/components/BottomNav";
import Index from "./pages/Index";
import Ideas from "./pages/Ideas";
import Notes from "./pages/Notes";
import CalendarPage from "./pages/Calendar";
import Gallery from "./pages/Gallery";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import NotFound from "./pages/NotFound";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const queryClient = new QueryClient();

const AppContent = () => {
  const { token } = useAuth();
  
  return (
    <>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={!token ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!token ? <SignupPage /> : <Navigate to="/" />} />
        
        {/* Protected App Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Index />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      {token && <BottomNav />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Sonner
          position="top-center"
          toastOptions={{
            style: {
              borderRadius: "1rem",
              fontFamily: "Nunito, system-ui, sans-serif",
            },
          }}
        />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
