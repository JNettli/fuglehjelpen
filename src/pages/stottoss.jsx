import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../assets/components/Modal";

function StottOss() {
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
                "template_ctpzf9e",
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
            <div className="hero-banner-main hero-img-stottoss">
                <div className="hero-circle circle-movement">
                    <div className="hero-inner-circle">
                        <div className="hero-text alt-movement">
                            <p className="hero-h1">STØTT OSS</p>
                            <p className="hero-p alt-text">
                                I mange tilfeller kan en skadet fugl hjelpes
                                tilbake til naturen med behandling og
                                rehabilitering. Takk for at du hjelper oss å
                                hjelpe fugl!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="white-div">
                <div className="sub-div-box">
                    <div className="sidebyside">
                        <div className="sub-div-text">
                            <p>
                                Fuglehjelpen er avhengige av din hjelp og støtte
                                for å kunne fortsette å hjelpe norske
                                villfugler. Ønsker du å støtte Fuglehjelpen
                                økonomisk, kan du sende et valgfritt beløp til:
                            </p>
                            <ul>
                                <li>
                                    Kontonummer:{" "}
                                    <span className="blacktext">
                                        15030726852
                                    </span>
                                </li>
                                <li>Vipps:</li>
                                <li>Grasrotmottaker:</li>
                            </ul>
                            <p>Alle bidrag går kun til hjelp av fugl.</p>
                        </div>
                        <div className="img-main">
                            <img
                                src="/stottoss/stottoss01.jpg"
                                alt="Fugl i hånd"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="offwhite-div">
                <div className="member-logo"></div>
                <div className="member-div-box">
                    <div className="sub-div-text member-text">
                        <h1>MEDLEMSKAP</h1>
                        <p>Fyll ut navn og e-post så tar vi kontakt.</p>
                        <p>Ordinært medlemskap 350,-</p>
                        <p>Familiemedlemskap 500,-</p>
                        <br />
                        <br />
                        <p>Velkommen som meldem i Fuglehjelpen!</p>
                        <br />
                        <br />

                        <form ref={form} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="company"
                                style={{ display: "none" }}
                            />
                            <label htmlFor="fullname" className="memberlabel">
                                Navn
                            </label>
                            <br />
                            <input
                                className="memberinput"
                                type="text"
                                id="fullname"
                                placeholder="Fornavn Etternavn"
                                required
                            />
                            <br />
                            <label htmlFor="email" className="memberlabel">
                                E-post
                            </label>
                            <br />
                            <input
                                className="memberinput"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="navn@email.com"
                                required
                            />
                            <div className="right-side">
                                <button type="submit">Send innmelding</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="white-div">
                <div className="sub-div-box">
                    <div className="sidebyside">
                        <div className="sub-div-text">
                            <h1>ET VIKTIG ARBEID</h1>
                            <p>
                                Dessverre har vi i Norge ingen tradisjon for
                                rehabilitering av skadet eller nødlidende vilt.
                                Ofte er vi altfor raske med å avlive fugler som
                                kunne fått et forlenget liv i kyndige hender. Å
                                avlive er lettvint, men destruktivt - særlig når
                                skadene er moderate og fuglen kunne fått en ny
                                sjanse i naturen. Dette står i sterk kontrast
                                til Sverige, hvor rehabilitering er en naturlig
                                del av naturvernpolitikken. Mange land i Europa
                                har institusjoner med veterinærer og dyrepassere
                                som tar seg av skadet vilt. Mange husker kanskje
                                de fire grevlingungene som ble reddet ut av en
                                brennende taufabrikk, men senere levert til
                                avlivning hos Viltnemnda. En mer naturlig
                                reaksjon ville vært å gi dem en ny sjanse i
                                naturen, eller i en dyrehave som likevel skal ha
                                grevling som en art i sitt repertoar.
                            </p>
                        </div>
                        <div className="img-main">
                            <img
                                src="/stottoss/stottoss02.jpg"
                                alt="Fugl med fisk i nebbet"
                            />
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <div className="sidebyside">
                        <div className="img-main">
                            <img
                                src="/stottoss/stottoss03.jpg"
                                alt="Fugl i bur"
                            />
                        </div>
                        <div className="sub-div-text">
                            <p>
                                Å rehabilitere vilt i Norge har lav status. Slik
                                sett framstår vi som et U-land med langt fram
                                til vi når et forventet reaksjonsmønster. Vi må
                                ikke glemme at de fleste fugleskader skyldes
                                direkte eller indirekte menneskelig aktivitet.
                                Fuglehjelpen får inn fugler med benbrudd, fugler
                                som er skadet i trafikken, kollidert med
                                vinduer, skadeskutt, eller viklet inn i snører
                                og fiskekroker. Det strider mot etiske
                                prinsipper å ikke hjelpe en lidende medskapning
                                - hvis man kan. Der her har vi lovverket på vår
                                side. Fuglehjelpen bidrar gjerne til å hjelpe
                                fugl i nød. Avlivning må bare skje der det er
                                høyst usannsynlig av behandling ikke vil gi
                                fuglen et forlenget liv i fri natur. Vi er noen
                                få ideelle organisasjoner som driver dette
                                arbeidet, og beviser gang på gang at
                                rehabilitering i svært mange tilfeller gir gode
                                resultater. Etter 25 år med erfaring (enkelte
                                har holdt på med dette i mer enn 50 år!) og i
                                dialog med svenske og europeiske
                                viltrehabilitører, vet vi det finnes mange
                                metoder som fungerer.
                            </p>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <div className="sidebyside">
                        <div className="sub-div-text">
                            <p>
                                Vi ønsker drahjelp fra myndighetene, ikke
                                motstand, i arbeidet med å rehabilitere skadet
                                fugl. Men det er fortsatt en vei å gå. Med din
                                hjelp og interesse for fugl, kan vi sammen endre
                                holdningene til fuglenes beste. Fuglelivet er
                                vår felles eiendom. Det er vi mennesker som
                                skaper de aller fleste skadene for fuglene våre.
                                Da skulle det bare mangle at vi ikke tar ansvar
                                for å rette opp farene vi har skapt - blanke
                                glassruter, ledninger, trafikk, vindturbiner,
                                nedbygging av leveområder, landbrukspraksis og
                                skogshogst i hekketiden (det er det ikke mange
                                land som tillater!).
                            </p>
                            <br />
                            <br />
                            <p>
                                Ta gjerne kontakt med oss - enten du har tid til
                                overs, eller ønsker å støtte oss økonomisk i
                                dette viktige arbeidet for fuglenes beste.
                            </p>
                            <br />
                            <br />
                            <p>Din hjelp setter spor</p>
                        </div>
                        <div className="img-main">
                            <img
                                src="/stottoss/stottoss04.jpg"
                                alt="Ugle i et tre"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <h1>Tusen Takk!</h1>
                <p>Haha peepee</p>
            </Modal>
        </>
    );
}

export default StottOss;
