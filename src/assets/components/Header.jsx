import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            <nav>
                <div className="navbar">
                    <Link to={"/"}>
                        <img
                            src="/fuglehjelplogo.svg"
                            alt="Fuglehjelpen logo"
                            className="logo"
                        />
                    </Link>

                    <div className="mobile-nav-phone">
                        <div className="nav-phone">
                            <img src="/phoneicon.svg" alt="Telefon ikon" />
                            <div className="nav-phone-numbers">
                                <a href="tel:+4790086161">90086161</a>
                                <a href="tel:+4791165789">91165789</a>
                            </div>
                        </div>

                        <button
                            className={`burger ${menuOpen ? "open" : ""}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span className="burger-text">MENY</span>

                            <div className="burger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>

                    <div className={`nav-right ${menuOpen ? "active" : ""}`}>
                        <div className="nav-phone nav-phone-desktop">
                            <img src="/phoneicon.svg" alt="Telefon ikon" />
                            <div className="nav-phone-numbers">
                                <a href="tel:+4790086161">90086161</a>
                                <a href="tel:+4791165789">91165789</a>
                            </div>
                        </div>
                        <Link to={"/fuglinod"} className="nav-link">
                            <p>Fugl i nød</p>
                        </Link>

                        <Link to={"/fugleforing"} className="nav-link">
                            <p>Fuglefôring</p>
                        </Link>

                        <Link to={"/omoss"} className="nav-link">
                            <p>Om oss</p>
                        </Link>

                        <Link to={"/blifrivillig"} className="nav-link">
                            <p>Bli frivillig</p>
                        </Link>

                        <Link to={"/stottoss"} className="nav-link">
                            <button id="nav-link-button">Støtt oss</button>
                        </Link>
                    </div>
                </div>
            </nav>
            <div
                className={`menu-overlay ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
            ></div>
        </>
    );
}

export { Header };
