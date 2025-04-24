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
import MediaVault from './pages/MediaVault';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import ForInvestors from './pages/ForInvestors';
import PartnerWithUs from './pages/PartnerWithUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

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
      { path: 'experience', element: <Experience /> },

      // 📁 Media Vault section
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
      { path: 'game-info', element: <GameInfo /> },
      { path: 'join-beta', element: <JoinBeta /> },
      { path: 'dev-notes', element: <DevelopersNotes /> },

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

      { path: 'privacy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <TermsOfUse /> },
    ],
  },
];


export const router = createBrowserRouter(routes)