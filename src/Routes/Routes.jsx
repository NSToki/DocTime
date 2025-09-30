import { createBrowserRouter } from "react-router";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import BlogPage from "../Pages/BlogPage/BlogPage";
import Footer from "../Components/Footer/Footer";
import DoctorDetails from "../Pages/Doctors/DoctorDetails/DoctorDetails";
import AppointmentDoctor from "../Pages/Doctors/AppointmentDoctor/AppointmentDoctor";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "about Me",
        Component: ErrorPages,
      },
      {
        path: "blogs",
        Component: BlogPage,
      },
      {
        path: "ContactUs",
        Component: Footer,
      },
      {
        path: "/DoctorDetails/:id",
        loader: async () => {
          const res = await fetch("/DoctorsData.json");
          return res.json();
        },
        Component: DoctorDetails,
      },
      {
        path: "my-booking",
        loader: async () => {
          const res = await fetch("/DoctorsData.json");
          return res.json();
        },
        Component: AppointmentDoctor,
      },
    ],
  },
]);
