import React from "react";
import Home from "./components/home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/articles/Footer";
import Contact from "./components/articles/Contact";
import Header from "./components/articles/Header";
import ServicePage from "./components/articles/ProjectPage";
import QuickForm from "./components/articles/QuickForm";
import About from "./components/articles/About";
import Projects from "./components/articles/Projects";
import DonationForm from "./components/articles/DonationForm";
import ProjectPage from "./components/articles/ProjectPage";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Projects" element={<ProjectPage />} />
        <Route path="/donate" element={<DonationForm />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Projects" element={<Projects />} /> */}
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
