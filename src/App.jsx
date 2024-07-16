import { useEffect, useState } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import CreateEvent from "./components/CreateEvent";
import EventDetails from "./components/EventDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFoud";
import { AuthProvider } from "./context/AuthProvider";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const ProtectedLayout = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
};

// useEffect(() => {}, []);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="events/:id" element={<EventDetails />} />
        {/* <Route path="create-event" element={<CreateEvent />} /> */}

        <Route path="/" element={<ProtectedLayout />}>
          <Route path="create-event" element={<CreateEvent />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
