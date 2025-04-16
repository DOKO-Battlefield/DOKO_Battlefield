import { createBrowserRouter } from "react-router-dom";
import App from './App'
import Header from './components/Header'
import Home from './pages/Home'
import Events from './pages/Events'
import Menu from './pages/Menu'
import Reviews from './pages/Reviews'
import Media from './pages/Media'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Membership from './pages/Membership'
import Profile from './pages/Profile'
import Restaurants from './pages/Restaurants'
import GroupsAndTickets from "./pages/GroupsAndTickets";
import CustomBooking from"./pages/CustomBooking"



const routes = [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Home /> },
      { path: 'events', element: <Events /> },
      { path: 'menu', element: <Menu /> },
      { path: 'media', element: <Media /> },
      { path: 'reviews', element: <Reviews /> },
      { path: 'about', element: <About /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'membership', element: <Membership /> },
      { path: 'profile', element: <Profile /> },
      { path: "/restaurants", element: <Restaurants /> },
      { path: "/restaurants/:id", element: <Menu /> },
      { path: "/groups&tickets", element: <GroupsAndTickets /> },
      { path: "/custom-booking", element: <CustomBooking /> }
      ]
    }
  ];
  
export const router = createBrowserRouter(routes)