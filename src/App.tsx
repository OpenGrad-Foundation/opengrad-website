import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import GovtProjects from "./Pages/GovtProjects/GovtProjects";
import  CatProgram  from "./Pages/CatProgram/CatProgram";
import { Volunteer } from "./Pages/Volunteer/Volunteer";
import NotFound from "./Pages/NotFound/NotFound";
// import { ComingSoon } from './Pages/ComingSoon/ComingSoon';

import { AdminLogin } from "./Pages/Admin/AdminLogin/AdminLogin";
import { createClient } from "@supabase/supabase-js";
import { OurBlog } from "./Pages/OurBlog/OurBlog";
import { DetailedBlog } from "./Pages/OurBlog/DetailedBlog/DetailedBlog";

import Register from "./Pages/register";
import { Toaster } from "react-hot-toast";
import { OurResults } from "./Pages/ourResults";
import { Dashboard } from "./Pages/Admin/dashboard";
import { PrivateRoutes } from "./services/PrivateRoutes";
import { Blogs } from "./Pages/Admin/AdminDashboard/Blogs/Blogs";
import { HomeTestimonial } from "./Pages/Admin/AdminDashboard/HomeTestimonial/HomeTestimonial";
import { JoinUsTestimonial } from "./Pages/Admin/AdminDashboard/HomeTestimonial/JoinUsTestimonial";
import { VolunteerDirectory } from "./Pages/Admin/AdminDashboard/VolunteerDirectory/VolunteerDirectory";
import { RegisterData } from "./Pages/Admin/AdminDashboard/registerData";
import { CatResult } from "./Pages/Admin/AdminDashboard/catResult";
import { Privacy } from "./Pages/Privacy/Privacy";
import { TaxForms } from "./Pages/Privacy/TaxForms";
import { TermsOfUse } from "./Pages/Privacy/TermsOfUse";
//import NewsletterAndReport from "./Pages/newsletterAndReports";
import NewsletterAndReport2 from "./Pages/newsletterAndReports2";
import Layout from "./Components/layout";
import CompletedCohorts from "./Pages/Courses/pages/completed";
import RunningCohorts from "./Pages/Courses/pages/running";
import Cohorts from "./Pages/Admin/AdminDashboard/cohorts";
import { Reports } from "./Pages/Admin/AdminDashboard/reports";
import OurAdvisors from "./Pages/ourAdvisors";
import OurAdvisorsAdmin from "./Pages/Admin/AdminDashboard/ourAdvisors";
import CEOLetter from "./Pages/CEOLetter";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, anonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "/govtprojects",
      element: <GovtProjects />,
    },
    {
      path: "/catprogram",
      element: <CatProgram />,
    },
    {
      path: "/people",
      element: <Volunteer />,
    },
    {
      path: "/ceo-letter",
      element: <CEOLetter />,
    },

    {
      path: "/blogsreports",
      element: <OurBlog />,
    },
    {
      path: "/detailedblog/:id",
      element: <DetailedBlog />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/ourresults",
      element: <OurResults />,
    },
    {
      path: "/privacy",
      element: <Privacy />,
    },
    {
      path: "/taxforms",
      element: <TaxForms />,
    },
    {
      path: "/termsofuse",
      element: <TermsOfUse />,
    },
    {
      path: "/newletters&reports",
      element: <NewsletterAndReport2 />,
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/completedcohorts",
          element: <CompletedCohorts />,
        },
        {
          path: "/runningcohorts",
          element: <RunningCohorts />,
        },
        {
          path: "/ouradvisors",
          element: <OurAdvisors />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <PrivateRoutes />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "",
              element: <Navigate to="blogs" replace />,
            },
            {
              path: "blogs",
              element: <Blogs />,
            },
            {
              path: "htestimonial",
              element: <HomeTestimonial />,
            },
            {
              path: "jtestimonial",
              element: <JoinUsTestimonial />,
            },
            {
              path: "volunteerdirectory",
              element: <VolunteerDirectory />,
            },
            {
              path: "registerdata",
              element: <RegisterData />,
            },
            {
              path: "catresult",
              element: <CatResult />,
            },
            {
              path: "cohorts",
              element: <Cohorts />,
            },
            {
              path: "reports",
              element: <Reports />,
            },
            {
              path: "ouradvisors",
              element: <OurAdvisorsAdmin />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
