import { createBrowserRouter } from "react-router-dom";
import App from './App'
// src/router.js

import About from './pages/About';
import Membership from './pages/Membership';
import Profile from './pages/Profile';
import Restaurants from './pages/Restaurants';
import GroupsAndTickets from './pages/GroupsAndTickets';
import CustomBooking from './pages/CustomBooking';
import Home from './pages/Home';
import Events from './pages/Events&Bookings';
import Menu from './pages/Menu';
import Reviews from './pages/Reviews';
import CombatSports from './components/CombatSports';
import WearableTech from './components/WearableTech';
import MediaVault from './pages/MediaVault';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import ForInvestors from './pages/ForInvestors';
import PartnerWithUs from './pages/PartnerWithUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import Onepage from './pages/Onepage';

// MediaVault components
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ScreenshotsAndDemo from './components/Screenshots&Demo';
import YourVisit from './components/YourVisit';

// VR + Game
import VRWalkthrough from './components/VRWalkthrough';
import GameInfo from './components/GameInfo';
import JoinBeta from './components/JoinBeta';
import DevelopersNotes from './components/DevelopersNotes';

// Investor-Focused
import PitchDeckVision from './components/PitchDeck&Vision';
import Roadmap from './components/Roadmap';
import TeamAndAdvisors from './components/Team&Advisors';
import FinancialProjection from './components/FinancialProjection';
import DownloadMaterials from './components/DownloadMaterials';

// Partner-Focused
import VenueCoBranding from './components/Venue&Co-Branding';
import TeamBuilding from './components/TeamBuilding';
import PrivateEvents from './components/PrivateEvents';
import ScheduleAVisit from './components/ScheduleAVisit';
import PartnerContactForm from "./components/ContactForm";
import CollaborationTypes from './components/CollaborationTypes';

import DOKOFeastField from './components/DOKOFeastField';
import DOKOYonies from './components/DOKOYonies';
import DOKOBar from './components/DOKOBar';
import FeastFieldMenu from './components/FeastFieldMenu';
import DOKOYoniesMenu from './components/DOKOYoniesMenu';
import DOKOBarMenu from './components/DOKOBarMenu';
import VRGame from './pages/VRGame';
import ScreenshotsDemo from './components/Screenshots&Demo';


const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'membership', element: <Membership /> },
      { path: 'profile', element: <Profile /> },
      { path: 'restaurants', element: <Restaurants /> },
      { path: 'restaurants/:id', element: <Menu /> },
      { path: 'groups&tickets', element: <GroupsAndTickets /> },
      { path: 'custom-booking', element: <CustomBooking /> },
      { path: 'menu', element: <Menu /> },
      { path: 'reviews', element: <Reviews /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'contact', element: <Contact /> },

    //   // 📁 Media Vault section
      { path: 'media', element: <MediaVault /> },
      { path: 'media/gallery', element: <Gallery /> },
      { path: 'media/testimonials', element: <Testimonials /> },
      { path: 'media/screenshots', element: <ScreenshotsAndDemo /> },
      { path: 'media/your-visit', element: <YourVisit /> },

      { path: 'events', element: <Events /> },
      { path: 'events/private', element: <PrivateEvents /> },
      { path: 'events/team-building', element: <TeamBuilding /> },
      { path: 'events/schedule', element: <ScheduleAVisit /> },

      // 🎮 Game + VR
      { path: 'vr-walkthrough', element: <VRWalkthrough /> },
      { path: 'vr-game', element: <VRGame /> },
      { path: 'vr-game/info', element: <GameInfo /> },
      { path: 'vr-game/screenshots', element: <ScreenshotsDemo /> },
      { path: 'vr-game/beta', element: <JoinBeta /> },
      { path: 'vr-game/notes', element: <DevelopersNotes /> },

      // 💸 Investor Section
      { path: 'investors', element: <ForInvestors /> },
      { path: 'investors/pitch', element: <PitchDeckVision /> },
      { path: 'investors/roadmap', element: <Roadmap /> },
      { path: 'investors/team', element: <TeamAndAdvisors /> },
      { path: 'investors/financials', element: <FinancialProjection /> },
      { path: 'investors/downloads', element: <DownloadMaterials /> },

      // 🤝 Partner Section
      { path: 'partners', element: <PartnerWithUs /> },
      { path: 'partners/cobranding', element: <VenueCoBranding /> },
      { path: 'partners/team-building', element: <TeamBuilding /> },
      { path: 'partners/private-events', element: <PrivateEvents /> },
      { path: 'partners/schedule-visit', element: <ScheduleAVisit /> },
      { path: 'partners/contact-form', element: <PartnerContactForm /> },
      { path: 'partners/collaboration-types', element: <CollaborationTypes /> },


      { path: 'privacy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <TermsOfUse /> },

      { path: 'restaurants/feast-field', element: <DOKOFeastField /> },
      { path: 'restaurants/dokoyonies', element: <DOKOYonies /> },
      { path: 'restaurants/bar', element: <DOKOBar /> },
      { path: 'menu/feast-field', element: <FeastFieldMenu /> },
      { path: 'menu/dokoyonies', element: <DOKOYoniesMenu /> },
      { path: 'menu/bar', element: <DOKOBarMenu /> },

      { path: 'experience', element: <Experience /> },
    { path: 'experience/combat', element: <CombatSports /> },
    { path: 'experience/wearables', element: <WearableTech /> },
    { path: 'experience/vr-tour', element: <VRWalkthrough /> },
    // One page website
    // { index: true, element: <Onepage /> },
        { path: '/vr-tour', element: <VRWalkthrough /> },
    ],
  },
];


export const router = createBrowserRouter(routes)