import { lazy, Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomNav from "@/components/BottomNav";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { PartnerProvider } from "@/contexts/PartnerContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const Index = lazy(() => import("./pages/Index"));
const Ideas = lazy(() => import("./pages/Ideas"));
const Notes = lazy(() => import("./pages/Notes"));
const CalendarPage = lazy(() => import("./pages/Calendar"));
const Gallery = lazy(() => import("./pages/Gallery"));
const LoginPage = lazy(() => import("./pages/Login"));
const SignupPage = lazy(() => import("./pages/Signup"));
const LandingPage = lazy(() => import("./pages/Landing"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const ThemeInitializer = () => {
  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem("theme") as "light" | "dark";
    const theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    root.classList.add(theme);
  }, []);
  return null;
};

const loadingFallback = (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const AppContent = () => {
  const { token, isLoading } = useAuth();

  if (isLoading) {
    return loadingFallback;
  }

  return (
    <>
      <Suspense fallback={loadingFallback}>
        <Routes>
          {/* Public landing page – shown to visitors who have no account yet */}
          <Route path="/welcome" element={!token ? <LandingPage /> : <Navigate to="/" />} />

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

          {/* Unauthenticated root → landing page */}
          <Route path="*" element={!token ? <Navigate to="/welcome" replace /> : <NotFound />} />
        </Routes>
      </Suspense>
      {token && <BottomNav />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <PartnerProvider>
        <TooltipProvider>
          <ThemeInitializer />
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
      </PartnerProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
