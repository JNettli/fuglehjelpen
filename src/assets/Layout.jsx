import { Outlet, useMatches, useLocation } from "react-router-dom";
import { Helmet } from "@vuer-ai/react-helmet-async";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function Layout() {
    const matches = useMatches();
    const location = useLocation();

    const match = matches[matches.length - 1];

    const title = match?.handle?.title || "Fuglehjelpen";
    const description =
        match?.handle?.description ||
        "Fuglehjelpen hjelper skadet og nødstedt fugl i Norge.";

    const fullTitle = `${title} | Fuglehjelpen`;

    const baseUrl = "https://fuglehjelpen.no";
    const url = baseUrl + location.pathname;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Fuglehjelpen",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        sameAs: ["https://www.facebook.com/Fuglehjelpen"],
        description:
            "Fuglehjelpen er en frivillig organisasjon som hjelper skadet og nødstedt fugl i Norge.",
    };

    return (
        <>
            <Helmet key={location.pathname}>
                <title>{fullTitle}</title>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="robots" content="index, follow" />

                <link rel="canonical" href={url} />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta property="og:site_name" content="Fuglehjelpen" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={fullTitle} />
                <meta name="twitter:description" content={description} />

                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export { Layout };
