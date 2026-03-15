function Footer() {
    return (
        <footer>
            <div className="footer-div">
                <div className="footer-div-top">
                    <a href="/">
                        <img
                            src="./fuglehjelpenfooter.svg"
                            alt="Fuglehjelpen Logo"
                        />
                    </a>
                    <div className="footer-infobox">
                        <h2>Postadresse</h2>
                        <p>Postboks 68, 1501</p>
                        <p>Moss</p>
                    </div>
                    <div className="footer-infobox">
                        <h2>Kontakt</h2>
                        <p className="footer-numbers">
                            Telefon: <a href="tel:+4790086161">90086161</a>{" "}
                            eller <a href="tel:+4791165789">91165789</a>
                        </p>
                        <p>Epost: info@fuglehjelpen.no</p>
                    </div>
                    <div className="footer-infobox">
                        <h2>Følg oss</h2>
                        <div className="facelogo">
                            <img src="./facebook.svg" alt="Facebook logo" />
                            <a
                                href="https://www.facebook.com/Fuglehjelpen/"
                                target="_blank"
                            >
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="credits">
                        <p className="desktop-visible">
                            &copy; 2025 Fuglehjelpen | Design av{" "}
                            <a
                                href="https://vilderognlien.netlify.app/"
                                target="_blank"
                            >
                                Vilde Rognlien
                            </a>
                        </p>
                        <p className="mobile-visible">
                            &copy; 2025 Fuglehjelpen |
                        </p>
                        <p className="mobile-visible">
                            Design av{" "}
                            <a
                                href="https://vilderognlien.netlify.app/"
                                target="_blank"
                            >
                                Vilde Rognlien
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
