import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav>
                <div className="navbar">
                    <Link to={"/"}>
                        <img
                            src="./src/assets/img/fuglehjelplogo.svg"
                            alt="Fuglehjelpen logo"
                            className="logo"
                        />
                    </Link>
                    <div className="nav-right">
                        <div className="nav-phone">
                            <img
                                src="./src/assets/img/phoneicon.svg"
                                alt="Phone icon"
                            />
                            <div className="nav-phone-numbers">
                                <a href="tel:+4790086161">90086161</a>
                                <a href="tel:+4791165789">91165789</a>
                            </div>
                        </div>
                        <Link
                            to={"/fuglinod"}
                            aria-label="Fugl I Nød"
                            className="nav-link"
                        >
                            <p>Fugl i nød</p>
                        </Link>
                        <Link
                            to={"/fugleforing"}
                            aria-label="Fuglefôring"
                            className="nav-link"
                        >
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
        </>
    );
}

export { Header };
