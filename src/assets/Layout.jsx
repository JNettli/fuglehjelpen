import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function Layout() {
    return (
        <>
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
