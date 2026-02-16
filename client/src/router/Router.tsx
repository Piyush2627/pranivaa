import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UpdateImagePage from "../pages/UpdateImagePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../utils/ProtectedRoute";
import HomePage from "../pages/HomePage";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import SettingsPage from "../pages/SettingsPage";
import AdminSignUpPage from "../pages/AdminSignUpPage";
import UserSignUpPage from "../pages/UserSignUpPage";
import WebLayout from "../layouts/WebLayout";
import AboutPage from "../pages/AboutPage";
import OurProcessPage from "../pages/OurProcessPage";
import ProductsPage from "../pages/ProductsPage";
import WhyColdPressPage from "../pages/WhyColdPressPage";
import ContactPage from "../pages/ContactPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "login", element: <LoginPage />, handle: { title: "login" } },
      {
        path: "signup",
        element: <UserSignUpPage />,
        handle: { title: "signup" },
      },
      {
        path: "admin-signup",
        element: <AdminSignUpPage />,
        handle: { title: "Admin signup" },
      },
      {
        path: "",
        element: <WebLayout />,
        children: [
          {
            path: "",
            element: <HomePage />,
            handle: { title: "Home Page" },
          },
          {
            path: "about",
            element: <AboutPage />,
            handle: { title: "About Page" },
          },
          {
            path: "OurProcess",
            element: <OurProcessPage />,
            handle: { title: "Our Process" },
          },
          {
            path: "productsPage",
            element: <ProductsPage />,
            handle: { title: "Products" },
          },
          {
            path: "why-cold-pressed",
            element: <WhyColdPressPage />,
            handle: { title: "Why Cold Pressed" },
          },
          {
            path: "contact",
            element: <ContactPage />,
            handle: { title: "Contact Us" },
          },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [
          {
            path: "admin",
            element: <AdminLayout />,
            children: [
              {
                path: "settings",
                element: <SettingsPage />,
                handle: { title: " Settings" },
              },
            ],
          },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={["user"]} />,
        children: [
          {
            path: "user",
            element: <UserLayout />,
            children: [{ path: "settings", element: <SettingsPage /> }],
          },
        ],
      },
      {
        path: "update-image/:id",
        element: <UpdateImagePage />,
      },
      {
        path: "*",
        element: <div>404 - Not Found</div>,
      },
      {
        path: "unauthorized",
        element: <div>401 - Unauthorized</div>,
      },
    ],
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
