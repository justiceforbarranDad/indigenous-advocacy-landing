import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import Resources from "./pages/Resources";
import ShareStory from "./pages/ShareStory";
import Donate from "./pages/Donate";
import DonateWithSharing from "./pages/DonateWithSharing";
import PetitionWithSharing from "./pages/PetitionWithSharing";
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
import ContactAccountability from '@/pages/ContactAccountability';
import GhostedByPolitician from '@/pages/GhostedByPolitician';
import BarransStory from "./pages/BarransStory";
import MotherAbuseDPJ from "./pages/MotherAbuseDPJ";
import DonateComprehensive from '@/pages/DonateComprehensive';
import DonateQuick from '@/pages/DonateQuick';
import DonationInstructions from '@/pages/DonationInstructions';
import Movement from "./pages/Movement";
import TimelineNewspaperArchive from "./pages/TimelineNewspaperArchive";
import SystemicViolationsArchive from "./pages/SystemicViolationsArchive";
import TruthVsFalse from "./pages/TruthVsFalse";
import FirstNationsMemorial from "./pages/FirstNationsMemorial";
import InternationalChildCrisis from "./pages/InternationalChildCrisis";
import PerformativeActivismExposed from "./pages/PerformativeActivismExposed";
import HumanRightsEducation from "./pages/HumanRightsEducation";
import LegalViolationsFramework from "./pages/LegalViolationsFramework";
import HallOfShame from "./pages/HallOfShame";
import HowToDocumentYourCase from "./pages/HowToDocumentYourCase";
import OrangeShirtDayInvestigation from "./pages/OrangeShirtDayInvestigation";
import CallLogDocumentation from "./pages/CallLogDocumentation";
import InteractiveCallMap from "./pages/InteractiveCallMap";
import IndigenousChildrenRights from "./pages/IndigenousChildrenRights";
import Shop from "./pages/Shop";
import NewspaperFrontPage from "./pages/NewspaperFrontPage";
import PoliceAccountability from "./pages/PoliceAccountability";
import ElectoralReformDemands from "./pages/ElectoralReformDemands";
import NewsletterSignup from "./pages/NewsletterSignup";
import BrokenPromises from "./pages/BrokenPromises";
import AccountabilityFramework from "./pages/AccountabilityFramework";
import LifestyleInequalityReport from "./pages/LifestyleInequalityReport";
import ParliamentaryReformManifesto from "./pages/ParliamentaryReformManifesto";
import InMemoriam from "./pages/InMemoriam";
import AlliesAndOrganizations from "./pages/AlliesAndOrganizations";
import VideoHub from "./pages/VideoHub";
import AFNAccountability from "./pages/AFNAccountability";
import SafetyResourcesSystemicFailure from "./pages/SafetyResourcesSystemicFailure";
import DonateETransfer from "./pages/DonateETransfer";
import FrenchPodcast from "./pages/FrenchPodcast";
import SurveyMap from "./pages/SurveyMap";
import AdminAnalytics from "./pages/AdminAnalytics";
import CanadaMap from "./pages/CanadaMap";
import ProvinceResources from "./pages/ProvinceResources";
import MediaGallery from "./pages/MediaGallery";
import LegalCaseTracker from "./pages/LegalCaseTracker";
import McGovernInstitute from "./pages/McGovernInstitute";
import ResourceKit from "./pages/ResourceKit";
import Newsletter from "./pages/Newsletter";
import Volunteer from "./pages/Volunteer";
import CaseTracker from "./pages/CaseTracker";
import HumanRights from "./pages/HumanRights";
import VideoTestimonials from "./pages/VideoTestimonials";
import Obituaries from "./pages/Obituaries";
import FallenSoldiers from "./pages/FallenSoldiers";
import Newspaper from "./pages/Newspaper";
import Sponsorship from "./pages/Sponsorship";
import IssueArchive from "./pages/IssueArchive";
import CorporateAccountability from "./pages/CorporateAccountability";
import AccountabilityPetition from "./pages/AccountabilityPetition";
import GovernmentAccountability from "./pages/GovernmentAccountability";
import InteractiveTimeline from "./pages/InteractiveTimeline";
import MediaKit from "./pages/MediaKit";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import SMSAlerts from "./pages/SMSAlerts";
import EmailAlerts from "./pages/EmailAlerts";
import AdminAlertDashboard from "./pages/AdminAlertDashboard";
import PodcastHub from "./pages/PodcastHub";
import NewspaperReader from "./pages/NewspaperReader";
import DonationImpact from "./pages/DonationImpact";
import DonateETransferInteractive from "./pages/DonateETransferInteractive";
import DonationHub from "./pages/DonationHub";
import DonateRecurring from "./pages/DonateRecurring";
import SubscriptionSuccess from "./pages/SubscriptionSuccess";
import NewspaperHome from "./pages/NewspaperHome";
import ModernHome from "./pages/ModernHome";
import DonateViaBank from "./pages/DonateViaBank";
import InteracDonationInterface from "./pages/InteracDonationInterface";
import DonateStripeQR from "./pages/DonateStripeQR";
import PaymentHub from "./pages/PaymentHub";
import PodcastSubscribe from "./pages/PodcastSubscribe";
import { LiveChat } from "./components/LiveChat";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { LanguageToggle } from "./components/LanguageToggle";
import SundayBloodyySundayPart3 from "./pages/SundayBloodyySundayPart3";
import DonationSuccess from "./pages/DonationSuccess";
import AdminPaymentHistory from "./pages/AdminPaymentHistory";
import DonateRecurringStripe from "./pages/DonateRecurringStripe";
import LegalRightsAndConstitutionBilingual from "./pages/LegalRightsAndConstitutionBilingual";
import InstitutionMission from "./pages/InstitutionMission";
import RightsEducationInSchools from "./pages/RightsEducationInSchoolsBilingual";
import OrangeShirtDayAccountability from "./pages/OrangeShirtDayAccountability";
import SponsorResponseTracker from "./pages/SponsorResponseTracker";
import DonorTestimonials from "./pages/DonorTestimonials";
import SubmitDonorTestimonial from "./pages/SubmitDonorTestimonial";

import FinancialTransparency from "./pages/FinancialTransparency";
import FamilyCaseDocumentation from "./pages/FamilyCaseDocumentation";
import UNComplaint from "./pages/UNComplaint";
import FoundationSetup from "./pages/FoundationSetup";
import FoundationGovernance from "./pages/FoundationGovernance";
import PublishingLegacy from "./pages/PublishingLegacy";
import OperationsBudget from "./pages/OperationsBudget";
import FoundationHub from "./pages/FoundationHub";
import DonationMilestones from "./pages/DonationMilestones";
import EmergencySuccessionPlan from "./pages/EmergencySuccessionPlan";
import Why500kEssential from "./pages/Why500kEssential";
import PensionClawbackAccountability from "./pages/PensionClawbackAccountability";
import Documents from "./pages/Documents";
import BarransDisabilityBattle from "./pages/BarransDisabilityBattle";
import FinancialDestruction from "./pages/FinancialDestruction";
import SystemicAccountability from "./pages/SystemicAccountability";
import LegalCitations from "./pages/LegalCitations";
import QRCodeGallery from "./pages/QRCodeGallery";
import EasyDonate from "./pages/EasyDonate";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>      <Route path={"/"} component={ModernHome} />
      <Route path="/sunday-bloody-sunday-part-3" component={SundayBloodyySundayPart3} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/share-story"} component={ShareStory} />
      <Route path="/donate" component={DonateQuick} />
      <Route path="/payment-hub" component={PaymentHub} />
      <Route path="/donate-stripe-qr" component={PaymentHub} />
      <Route path="/qr-codes" component={QRCodeGallery} />
      <Route path="/easy-donate" component={EasyDonate} />
      <Route path="/police-accountability" component={PoliceAccountability} />
      <Route path={"/donate-comprehensive"} component={DonateComprehensive} />
      <Route path={"/donation-instructions"} component={DonationInstructions} />
      <Route path={"/movement"} component={Movement} />
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
      <Route path="/contact-accountability" component={ContactAccountability} />
      <Route path="/ghosted-by-politician" component={GhostedByPolitician} />
      <Route path={"/barrans-story"} component={BarransStory} />
      <Route path={"/mother-abuse-dpj"} component={MotherAbuseDPJ} />
      <Route path={"/timeline-newspaper-archive"} component={TimelineNewspaperArchive} />
      <Route path={"/systemic-violations-archive"} component={SystemicViolationsArchive} />
      <Route path={"/truth-vs-false"} component={TruthVsFalse} />
      <Route path={"/first-nations-memorial"} component={FirstNationsMemorial} />
      <Route path={"/international-child-crisis"} component={InternationalChildCrisis} />
      <Route path={"/performative-activism-exposed"} component={PerformativeActivismExposed} />
      <Route path={"/human-rights-education"} component={HumanRightsEducation} />
      <Route path={"/legal-violations-framework"} component={LegalViolationsFramework} />
      <Route path={"/hall-of-shame"} component={HallOfShame} />
      <Route path={"/how-to-document-your-case"} component={HowToDocumentYourCase} />
      <Route path="/orange-shirt-day-investigation" component={OrangeShirtDayInvestigation} />
      <Route path="/call-log-documentation" component={CallLogDocumentation} />
      <Route path="/interactive-call-map" component={InteractiveCallMap} />
      <Route path="/indigenous-children-rights" component={IndigenousChildrenRights} />
      <Route path="/shop" component={Shop} />
      <Route path="/newspaper-front-page" component={NewspaperFrontPage} />
      <Route path="/electoral-reform-demands" component={ElectoralReformDemands} />
      <Route path="/broken-promises" component={BrokenPromises} />
      <Route path="/accountability-framework" component={AccountabilityFramework} />
      <Route path="/lifestyle-inequality-report" component={LifestyleInequalityReport} />
      <Route path="/parliamentary-reform-manifesto" component={ParliamentaryReformManifesto} />
      <Route path="/in-memoriam" component={InMemoriam} />
      <Route path="/allies-and-organizations" component={AlliesAndOrganizations} />
      <Route path="/video-hub" component={VideoHub} />
      <Route path="/afn-accountability" component={AFNAccountability} />
      <Route path="/safety-resources-systemic-failure" component={SafetyResourcesSystemicFailure} />
      <Route path="/french-podcast" component={FrenchPodcast} />
      <Route path="/survey-map" component={SurveyMap} />
      <Route path="/admin/analytics" component={AdminAnalytics} />
      <Route path="/canada-map" component={CanadaMap} />
      <Route path="/province-resources" component={ProvinceResources} />
      <Route path="/media-gallery" component={MediaGallery} />
      <Route path="/legal-cases" component={LegalCaseTracker} />
      <Route path="/mcgovern-institute" component={McGovernInstitute} />
      <Route path="/resource-kit" component={ResourceKit} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/newsletter-signup" component={NewsletterSignup} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/case-tracker" component={CaseTracker} />
      <Route path="/human-rights" component={HumanRights} />
      <Route path="/video-testimonials" component={VideoTestimonials} />
      <Route path="/petition" component={PetitionWithSharing} />
      <Route path="/obituaries" component={Obituaries} />
      <Route path="/fallen-soldiers" component={FallenSoldiers} />
      <Route path="/newspaper" component={Newspaper} />
      <Route path="/sponsorship" component={Sponsorship} />
      <Route path="/issue-archive" component={IssueArchive} />
      <Route path="/corporate-accountability" component={CorporateAccountability} />
      <Route path="/accountability-petition" component={AccountabilityPetition} />
      <Route path="/government-accountability" component={GovernmentAccountability} />
      <Route path="/timeline" component={InteractiveTimeline} />
      <Route path="/media-kit" component={MediaKit} />
      <Route path="/contact" component={Contact} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/sms-alerts" component={SMSAlerts} />
      <Route path="/email-alerts" component={EmailAlerts} />
      <Route path="/admin/alerts" component={AdminAlertDashboard} />
      <Route path="/podcast-hub" component={PodcastHub} />
      <Route path="/newspaper-reader" component={NewspaperReader} />
      <Route path="/donation-impact" component={DonationImpact} />
      <Route path="/donate-etransfer" component={DonateETransferInteractive} />
      <Route path="/donation-hub" component={DonationHub} />
      <Route path="/donate-recurring" component={DonateRecurring} />
      <Route path="/subscription-success" component={SubscriptionSuccess} />
      <Route path="/donate-via-bank" component={DonateViaBank} />
      <Route path="/donate-interac" component={InteracDonationInterface} />
      <Route path="/donate-stripe-qr" component={DonateStripeQR} />
      <Route path="/subscribe" component={PodcastSubscribe} />
      <Route path="/podcast-subscribe" component={PodcastSubscribe} />
      <Route path="/donation-success" component={DonationSuccess} />
      <Route path="/admin/payments" component={AdminPaymentHistory} />
      <Route path="/donate-recurring-stripe" component={DonateRecurringStripe} />
      <Route path="/legal-rights-constitution" component={LegalRightsAndConstitutionBilingual} />

      <Route path="/institution-mission" component={InstitutionMission} />
      <Route path="/rights-education-schools" component={RightsEducationInSchools} />
      <Route path="/orange-shirt-day-accountability" component={OrangeShirtDayAccountability} />
      <Route path="/sponsor-response-tracker" component={SponsorResponseTracker} />
      <Route path="/donor-testimonials" component={DonorTestimonials} />
      <Route path="/submit-testimonial" component={SubmitDonorTestimonial} />
      <Route path="/financial-transparency" component={FinancialTransparency} />
      <Route path="/family-case-documentation" component={FamilyCaseDocumentation} />
      <Route path="/un-complaint" component={UNComplaint} />
      <Route path="/foundation-setup" component={FoundationSetup} />
      <Route path="/foundation-governance" component={FoundationGovernance} />
      <Route path="/publishing-legacy" component={PublishingLegacy} />
      <Route path="/operations-budget" component={OperationsBudget} />
      <Route path="/foundation-hub" component={FoundationHub} />
      <Route path="/donation-milestones" component={DonationMilestones} />
      <Route path="/emergency-succession-plan" component={EmergencySuccessionPlan} />
      <Route path="/why-500k-essential" component={Why500kEssential} />
      <Route path="/pension-clawback-accountability" component={PensionClawbackAccountability} />
      <Route path="/documents" component={Documents} />
      <Route path="/barrans-disability-battle" component={BarransDisabilityBattle} />
      <Route path="/financial-destruction" component={FinancialDestruction} />
      <Route path="/systemic-accountability" component={SystemicAccountability} />
      <Route path="/legal-citations" component={LegalCitations} />
      {/* Fallback route */}
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
          <div className="fixed top-4 right-20 z-50">
            <LanguageToggle />
          </div>
          <HamburgerMenu />
          <Router />
          <LiveChat />

        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
