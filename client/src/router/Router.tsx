import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import StudentsDashboardPage from "../pages/StudentsDashboardPage";
import AddStudentsPage from "../pages/AddStudentsPage";
import UpdateImagePage from "../pages/UpdateImagePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../utils/ProtectedRoute";
import HomePage from "../pages/HomePage";
import StudentsProfiles from "../pages/StudentsProfiles";
import AdminLayout from "../layouts/AdminLayout";
import StudentLayout from "../layouts/StudentLayout";
import SettingsPage from "../pages/SettingsPage";
import AdminSignUpPage from "../pages/AdminSignUpPage";
import StudentSignUpPage from "../pages/StudentSignUpPage";
import AttendanceDashboard from "../pages/AttendanceDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage />, handle: { title: "home" } },
      { path: "login", element: <LoginPage />, handle: { title: "login" } },
      {
        path: "signup",
        element: <StudentSignUpPage />,
        handle: { title: "signup" },
      },
      {
        path: "admin-signup",
        element: <AdminSignUpPage />,
        handle: { title: "Admin signup" },
      },
      {
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [
          {
            path: "admin",
            element: <AdminLayout />,
            children: [
              {
                path: "dashboard",
                element: <StudentsDashboardPage />,
                handle: { title: " Dashboard" },
              },
              {
                path: "add-students",
                element: <AddStudentsPage />,
                handle: { title: " Add Students" },
              },
              {
                path: "attendanceDashboard",
                element: <AttendanceDashboard />,
                handle: { title: "Attendance" },
              },

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
        element: <ProtectedRoute allowedRoles={["student"]} />,
        children: [
          {
            path: "student",
            element: <StudentLayout />,
            children: [
              { path: "dashboard", element: <StudentsDashboardPage /> },
              { path: "profile", element: <StudentsProfiles /> },
              { path: "settings", element: <SettingsPage /> },
            ],
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
