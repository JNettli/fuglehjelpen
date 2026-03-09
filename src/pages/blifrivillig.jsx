function BliFrivillig() {
    return (
        <>
            <div className="hero-banner-main">
                <div className="hero-banner-image"></div>
                <div className="hero-circle circle-movement">
                    <div className="hero-inner-circle">
                        <div className="hero-text alt-movement">
                            <p className="hero-h1">FRIVILLIG</p>
                            <p className="hero-p alt-text">
                                Ønsker du å bli en Fuglehjelper? Alt arbeid hos
                                Fuglehjelpen gjøres av frivillige, og alle
                                bidrag hjelper! Fyll ut skjemaet under for å
                                søke.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offwhite-div">
                <div className="sub-div-box">
                    <div className="sidebyside">
                        <div className="imgplaceholder"></div>
                        <div className="sub-div-text">
                            <h1>HVA KAN DU HJELPE MED?</h1>
                            <p>
                                Vi har frivillige innen alt fra kjørehjelp,
                                rehabilitering av fugl/nødhjelp til fugl,
                                bemanning av telefon til regnskap, bygging og
                                vedlikehold, grafisk design, koding m. m. Blant
                                oss er det både biologer og fuglekjennere til
                                frivillige som er helt nye til fuglehjelp, men
                                som ønsker å lære, og bidra.
                            </p>
                            <br />
                            <br />
                            <p>
                                Fortell oss om dine ferdigheter eller hvordan du
                                ønsker å hjelpe i søknadsskjemaet under, så
                                finner vi en plass til deg i Fuglehjelpen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white-div">
                <div className="main-div-box">
                    <div className="form-div">
                        <h1>SØKNADSSKJEMA - FRIVILLIG</h1>
                        <p>Fyll ut skjemaet så godt og utfyllende du kan.</p>
                        <br />
                        <br />
                        <br />
                        <p>
                            <span className="greentext p-demi">
                                Kontaktinformasjon
                            </span>
                        </p>
                        <br />
                        <form>
                            <label htmlFor="fname">Navn</label>
                            <div className="form-div-inner">
                                <input
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    placeholder="Fornavn"
                                    required
                                />
                                <input
                                    type="text"
                                    id="lname"
                                    name="lname"
                                    placeholder="Etternavn"
                                    required
                                />
                            </div>
                            <label htmlFor="adresse">Adresse</label>
                            <div className="form-div-inner">
                                <input
                                    type="text"
                                    name="adresse"
                                    id="adresse"
                                    placeholder="Gatenavn"
                                    required
                                />
                            </div>

                            <div className="form-div-inner">
                                <input
                                    type="text"
                                    name="postnr"
                                    id="postnr"
                                    placeholder="Postnummer"
                                    required
                                />
                                <input
                                    type="text"
                                    name="poststed"
                                    id="poststed"
                                    placeholder="Poststed"
                                    required
                                />
                            </div>
                            <label htmlFor="Nu"></label>
                            <div className="form-div-inner"></div>
                            <div className="form-div-inner"></div>

                            <div className="form-div-inner">
                                <input type="text" />
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BliFrivillig;
