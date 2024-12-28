import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import Aboutus from "../pages/aboutus/aboutusPage";
import ContactPage from "../pages/contact/contactPage";
import DonatePage from "../pages/donate/donatePage";
import ImprintPage from "../pages/imprint/imprintPage";
import PartnersPage from "../pages/partners/partnersPage";
import KyrgyzstanPage from "../pages/kyrgyzstan/kyrgyzstanPage";
import SemenovkaPage from "../pages/projects/semenovka/semenovkaPage";
import TeplokluchinkaPage from "../pages/projects/teplokluchinka/teplokluchinkaPage";
import ProjectsPage from "../pages/projects_menu/projectsPage";
import Via_kigiziaPage from "../pages/via_kirgizia/via_kirgiziaPage";
import NoPage from "../pages/noPage/noPage";
import OurgoalPage from "../pages/outgoal/ourgoalPage";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/donate",
    element: <DonatePage />,
  },
  {
    path: "/imprint",
    element: <ImprintPage />,
  },
  {
    path: "/kyrgyzstan",
    element: <KyrgyzstanPage />,
  },
  {
    path: "/partners",
    element: <PartnersPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/projects/semenovka",
    element: <SemenovkaPage />,
  },
  {
    path: "/projects/teplokluchinka",
    element: <TeplokluchinkaPage />,
  },

  {
    path: "/via_kirgizia",
    element: <Via_kigiziaPage />,
  },
  {
    path: "/ourgoal",
    element: <OurgoalPage />,
  },

  {
    path: "/*",
    element: <NoPage />,
  },
]);
