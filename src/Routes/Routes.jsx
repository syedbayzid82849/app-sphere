import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../Home";
import AllApps from "../pages/AllApps";
import AppDetails from "../pages/AppDetails";
import InstalledApp from "../pages/InstalledApp";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/apps",
                Component: AllApps
            },
            {
                path: "/appDetails/:id",
                Component: AppDetails
            }, 
            {
                path:"installedApps", 
                Component: InstalledApp
            }

        ]
    }
]);