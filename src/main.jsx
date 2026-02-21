import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Layout } from "./assets/Layout";
import Home from "./Home";
import FuglINod from "./pages/fuglinod";
import FugleForing from "./pages/fugleforing";
import OmOss from "./pages/omoss";
import StottOss from "./pages/stottoss";
import BliFrivillig from "./pages/blifrivillig";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "@vuer-ai/react-helmet-async";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <Home /> },
            { path: "/fuglinod", element: <FuglINod /> },
            { path: "/fugleforing", element: <FugleForing /> },
            { path: "/omoss", element: <OmOss /> },
            { path: "/stottoss", element: <StottOss /> },
            { path: "/blifrivillig", element: <BliFrivillig /> },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </StrictMode>,
);
