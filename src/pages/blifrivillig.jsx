import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../assets/components/Modal";

function BliFrivillig() {
    const [showModal, setShowModal] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const honeypot = form.current.company.value;

        if (honeypot) {
            return;
        }

        emailjs
            .sendForm(
                "service_jymn4ol",
                "template_kls5sxe",
                form.current,
                "pdYsXq_WY932tATdN",
            )
            .then(() => {
                console.log("Email sent successfully");
            })
            .catch((error) => {
                console.error("Email failed:", error);
            })
            .then(() => {
                setShowModal(true);
            });
    };

    return (
        <>
            <div className="hero-banner-main hero-img-blifrivillig">
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
                        <div className="img-main">
                            <img
                                src="/blifrivillig/blifrivillig01.jpg"
                                alt="Lomvi som får hjelp"
                            />
                        </div>
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

                        <form ref={form} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="company"
                                style={{ display: "none" }}
                            />

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
                                    type="number"
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

                            <div className="form-div-inner-alt">
                                <label htmlFor="nummer">Mobil</label>
                                <label htmlFor="email">E-post</label>
                            </div>

                            <div className="form-div-inner">
                                <input
                                    type="tel"
                                    name="nummer"
                                    id="nummer"
                                    placeholder="+47 900 86 161"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="E-post"
                                    required
                                />
                            </div>

                            <label htmlFor="age">Alder</label>
                            <div className="form-div-inner">
                                <input
                                    type="number"
                                    name="age"
                                    id="age"
                                    placeholder="18+"
                                    required
                                />
                            </div>

                            <label>Har du noe erfaring med fugl?</label>

                            <label className="form-radio">
                                <input
                                    type="radio"
                                    name="erfaring"
                                    value="Ja"
                                />
                                <span className="checkmark"></span>
                                Ja
                            </label>

                            <label className="form-radio">
                                <input
                                    type="radio"
                                    name="erfaring"
                                    value="Nei"
                                />
                                <span className="checkmark"></span>
                                Nei
                            </label>

                            <br />

                            <label htmlFor="relevant-info">
                                Hvis ja, fortell om erfaringer eller relevant
                                utdanning
                            </label>

                            <textarea
                                name="relevant-info"
                                id="relevant-info"
                                placeholder="Jeg har hjulpet til med rehabilitering av fugl tidligere..."
                            ></textarea>

                            <label htmlFor="hjelpe-med">
                                Fortell litt om deg selv og hva du kunne tenke
                                deg å hjelpe med
                            </label>

                            <textarea
                                name="hjelpe-med"
                                id="hjelpe-med"
                                placeholder="Jeg har utdanning innen ... og ønsker veldig gjerne å hjelpe til med..."
                                minLength={30}
                                required
                            ></textarea>

                            <label>Har du bil?</label>

                            <label className="form-radio">
                                <input type="radio" name="bil" value="Ja" />
                                <span className="checkmark"></span>
                                Ja
                            </label>

                            <label className="form-radio">
                                <input type="radio" name="bil" value="Nei" />
                                <span className="checkmark"></span>
                                Nei
                            </label>

                            <br />

                            <label>Hvor ofte kan og vil du hjelpe til?</label>

                            <label className="form-radio">
                                <input
                                    type="radio"
                                    name="hyppighet"
                                    value="Flere ganger i uken"
                                />
                                <span className="checkmark"></span>
                                Flere ganger i uken
                            </label>

                            <label className="form-radio">
                                <input
                                    type="radio"
                                    name="hyppighet"
                                    value="En gang i uken"
                                />
                                <span className="checkmark"></span>
                                En gang i uken
                            </label>

                            <label className="form-radio">
                                <input
                                    type="radio"
                                    name="hyppighet"
                                    value="En til tre ganger i måneden"
                                />
                                <span className="checkmark"></span>
                                En til tre ganger i måneden
                            </label>

                            <label className="form-radio">
                                <input
                                    type="radio"
                                    name="hyppighet"
                                    value="Noen ganger i året"
                                />
                                <span className="checkmark"></span>
                                Noen ganger i året
                            </label>

                            <br />

                            <label htmlFor="grunnlag">
                                Hvorfor ønsker du å være frivillig i
                                fuglehjelpen?
                            </label>

                            <textarea
                                name="grunnlag"
                                id="grunnlag"
                                placeholder="Jeg har lyst til å hjelpe fordi..."
                                minLength={30}
                                required
                            ></textarea>

                            <div className="form-div-inner">
                                <button type="submit">Send søknad</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <h1>SENDT</h1>
                <p>
                    Takk for at du ønsker å bli frivillig. <br />
                    Vi vil svare deg så fort vi har mulighet.
                </p>
                <a href="/">Tilbake til hovedside</a>
            </Modal>
        </>
    );
}

export default BliFrivillig;
