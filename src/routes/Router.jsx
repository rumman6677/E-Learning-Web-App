import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../context/Hero"
import ErrorBoundary from "../context/ErrorBoundary";
import Defensive101 from "../context/Defensive101";
import Defensive201 from "../context/Defensive201";
import Cdefensive from "../context/Cdefensive";
import WAS101 from "../context/WAS101";
import Instructor from "../context/Instructor";
import VerifyDetails from "../context/VerifyDetails";
import Verify from "../context/Verify";
import TermsAndCondition from "../components/TermsAndConditions/TermsAndCondition"; 
import Policy from "../components/Policy/Policy";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
    {
        path: "*",
        element: <ErrorBoundary />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/dcs101",
        element: <Defensive101 />
    },
    {
        path: "/dcs201",
        element: <Defensive201 />
    },
    {
        path: "/cdcs",
        element: <Cdefensive />
    },
    {
        path: "/was101",
        element: <WAS101 />
    },
    {
        path: "/policy",
        element: <Policy/>
    },
    {
        path: "/TermsAndCondition",
        element: <TermsAndCondition/>
    },
    {
        path: "/instructor",
        element: <Instructor />
    },
    {
        path: "/verify",
        element: <Verify />
    },
    {
        path: "/verify-details",
        element: <VerifyDetails />
    },
]);

export default Router;
