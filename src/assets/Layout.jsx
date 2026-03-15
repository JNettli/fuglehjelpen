import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function Layout() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <div className="Layout">
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
}

export { Layout };
