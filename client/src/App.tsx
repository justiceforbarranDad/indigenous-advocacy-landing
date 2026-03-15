import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { MusicPlayer } from "./components/MusicPlayer";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import ShareStory from "./pages/ShareStory";
import Donate from "./pages/Donate";
import ChildrensRights from "./pages/ChildrensRights";
import LegalSupport from "./pages/LegalSupport";
import ParentsInvolvement from "./pages/ParentsInvolvement";
import AdminDashboard from "./pages/AdminDashboard";
import StoriesGallery from "./pages/StoriesGallery";
import ImpactReports from "./pages/ImpactReports";
import IndigenousNations from "./pages/IndigenousNations";
import AccountabilityTracker from "./pages/AccountabilityTracker";
import SystemicFailures from "./pages/SystemicFailures";
import Credits from "./pages/Credits";
import DPJAccountability from "./pages/DPJAccountability";
import WellnessCheck from "./pages/WellnessCheck";
import OfficialsBlockedYou from "./pages/OfficialsBlockedYou";
import ContactAccountability from "./pages/ContactAccountability";
import BarransStory from "./pages/BarransStory";
import MotherAbuseDPJ from "./pages/MotherAbuseDPJ";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/share-story"} component={ShareStory} />
      <Route path={"/donate"} component={Donate} />
      <Route path={"/childrens-rights"} component={ChildrensRights} />
      <Route path={"/legal-support"} component={LegalSupport} />
      <Route path={"/parents-involvement"} component={ParentsInvolvement} />
      <Route path={"/admin"} component={AdminDashboard} />
      <Route path={"/stories-gallery"} component={StoriesGallery} />
      <Route path={"/impact-reports"} component={ImpactReports} />
      <Route path={"/indigenous-nations"} component={IndigenousNations} />
      <Route path={"/accountability-tracker"} component={AccountabilityTracker} />
      <Route path={"/systemic-failures"} component={SystemicFailures} />
      <Route path={"/credits"} component={Credits} />
      <Route path={"/dpj-accountability"} component={DPJAccountability} />
      <Route path={"/wellness-check"} component={WellnessCheck} />
      <Route path={"/officials-blocked-you"} component={OfficialsBlockedYou} />
      <Route path={"/contact-accountability"} component={ContactAccountability} />
      <Route path={"/barrans-story"} component={BarransStory} />
      <Route path={"/mother-abuse-dpj"} component={MotherAbuseDPJ} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <MusicPlayer autoplay={false} loop={true} />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
