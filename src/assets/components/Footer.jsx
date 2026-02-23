function Footer() {
    return (
        <footer>
            <div className="footer-div">
                <img
                    src="./src/assets/img/fuglehjelpenfooter.svg"
                    alt="Fuglehjelpen Logo"
                />
                <div className="footer-infobox">
                    <h2>Postadresse</h2>
                    <p>Postboks 68, 1501</p>
                    <p>Moss</p>
                </div>
                <div className="footer-infobox">
                    <h2>Kontakt</h2>
                    <p className="footer-numbers">
                        Telefon: <a href="tel:+4790086161">90086161</a> eller{" "}
                        <a href="tel:+4791165789">91165789</a>
                    </p>
                    <p>Epost: info@fuglehjelpen.no</p>
                </div>
                <div className="footer-infobox">
                    <h2>Følg oss</h2>
                    <div className="logo">
                        <img
                            src="./src/assets/img/facebook.svg"
                            alt="Facebook logo"
                        />
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
            <div className="credits">
                <p>&copy; 2025 Fuglehjelpen | Design av Vilde Rognlien</p>
            </div>
        </footer>
    );
}

export { Footer };
