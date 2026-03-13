import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

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

                    <div className={`nav-right ${menuOpen ? "active" : ""}`}>
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
                            <button>Støtt oss</button>
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
