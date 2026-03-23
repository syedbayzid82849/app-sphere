import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout, 
        errorElement: <ErrorPage />, 
        children: [
            {
                index: true, 
                Component: Home 
            }
        ] 
    }
]);