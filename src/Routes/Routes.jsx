    import {
        createBrowserRouter,
    } from "react-router-dom";
    import Home from "../Home/Home";
    import Login from "../Login/Login";
import Signup from "../Login/Signup";

    export const router = createBrowserRouter([
        {
        path: "/",
        element: <Home></Home>,
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/signUp",
            element:<Signup></Signup>
        }
    ]);