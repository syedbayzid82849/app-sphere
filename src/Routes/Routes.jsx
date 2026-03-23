import { createBrowserRouter } from "react-router";
import AllApps from "../pages/AllApps";
import RootLayout from "../RootLayout/RootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />
    }, 
    {
        path: "apps", 
        element: <AllApps />
    }
]);