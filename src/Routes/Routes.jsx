import { createBrowserRouter } from "react-router";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import BlogPage from "../Pages/BlogPage/BlogPage";
import Footer from "../Components/Footer/Footer";

export const routes = createBrowserRouter([{
    path:"/",
    Component:Root,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
        {
            index:true,
            path:"/",
            Component:Home,
        },
        {
            path:"about Me",
            Component:<ErrorPages></ErrorPages>

        },
        {
            path:"blogs",
            Component:BlogPage
        },
        {
            path:"ContactUs",
            Component:Footer
        }
    ]
}])