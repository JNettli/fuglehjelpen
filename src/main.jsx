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
import Foringstabell from "./pages/foringstabell";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "@vuer-ai/react-helmet-async";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
                handle: {
                    title: "Hjem",
                    description:
                        "Fuglehjelpen hjelper skadet og nødstedt fugl i Norge. Få råd om hva du gjør hvis du finner en skadet fugl.",
                },
            },
            {
                path: "/fuglinod",
                element: <FuglINod />,
                handle: {
                    title: "Fugl i nød",
                    description:
                        "Har du funnet en skadet fugl? Les hva du bør gjøre og hvordan du kan hjelpe fuglen trygt.",
                },
            },
            {
                path: "/fugleforing",
                element: <FugleForing />,
                handle: {
                    title: "Fuglefôring",
                    description:
                        "Lær hvordan du kan mate fugler riktig og hvilke mattyper som passer for ulike fuglearter.",
                },
            },
            {
                path: "/foringstabell",
                element: <Foringstabell />,
                handle: {
                    title: "Fôringstabell",
                    description:
                        "Se hvilke fuglearter som spiser hvilke typer mat i Fuglehjelpens fôringstabell.",
                },
            },
            {
                path: "/omoss",
                element: <OmOss />,
                handle: {
                    title: "Om Fuglehjelpen",
                    description:
                        "Les mer om Fuglehjelpen og arbeidet vårt med redning, rehabilitering og vern av fugl.",
                },
            },
            {
                path: "/stottoss",
                element: <StottOss />,
                handle: {
                    title: "Støtt Fuglehjelpen",
                    description:
                        "Bli medlem eller støtt Fuglehjelpens arbeid for skadet og nødstedt fugl.",
                },
            },
            {
                path: "/blifrivillig",
                element: <BliFrivillig />,
                handle: {
                    title: "Bli frivillig",
                    description:
                        "Vil du hjelpe fugler i nød? Bli frivillig i Fuglehjelpen og bidra til redning og rehabilitering.",
                },
            },
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
