import { Helmet } from "@vuer-ai/react-helmet-async";
import { useLocation } from "react-router-dom";

function SEO({ title, description, image = "/seo-preview.jpg" }) {
    const location = useLocation();

    const url = `https://fuglehjelpen.no${location.pathname}`;

    const fullTitle = title
        ? `${title} | Fuglehjelpen`
        : "Fuglehjelpen | Hjelp til skadet fugl i Norge";

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            <link rel="canonical" href={url} />

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image} />
        </Helmet>
    );
}

export default SEO;
