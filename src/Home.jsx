function Home() {
    return (
        <>
            <div className="hero-banner-main hero-img-home">
                <div className="hero-circle-wrapper">
                    <div className="hero-circle">
                        <div className="hero-inner-circle">
                            <div className="hero-text">
                                <p className="hero-h1">
                                    DIN HJELP
                                    <br />
                                    SETTER SPOR
                                </p>
                                <p className="hero-p">
                                    Fuglebestanden synker, og med 40% <br />
                                    av norges fugler allerede på rødlisten,
                                    teller <br />
                                    hver fugl vi får reddet. Bli med å gjøre en
                                    forskjell!
                                </p>
                                <a href="/stottoss">
                                    <button>Bli fuglehjelpgiver i dag!</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fuglespor-box">
                    <img
                        src="/spor.svg"
                        alt="fuglespor"
                        className="fuglespor"
                    />
                    <img
                        src="/fuglespor_mobil.svg"
                        alt="fuglespor-mobil"
                        className="fuglespor-mobil"
                    />
                </div>
            </div>
            <div className="white-div">
                <div className="main-div-box">
                    <div className="imgplaceholder">
                        <img src="/fuglehjelp.svg" alt="Fuglehjelpen logo" />
                    </div>
                    <div className="main-div-textbox">
                        <h1>
                            <div>HVEM ER FUGLEHJELPEN?</div>
                            <span>
                                HVEM ER
                                <br />
                                FUGLEHJELPEN?
                            </span>
                        </h1>
                        <p>
                            Fuglehjelpen er en idealistisk organisasjon med
                            fokus på vern og rehabilitering av fugl.
                            Kompetanseområdene strekker seg fra praktisk
                            rådgivning på telefon, henting av skadet fugl,
                            levering til veterinær, rehabilitering, ringmerking,
                            drift av duetårn og behandling katastroferammet
                            fugl.
                            <br />
                            <br />
                            Alt arbeid skjer på frivillig basis. Vi har
                            tilholdsted og mottak for skadet fugl i Moss, men
                            har frivillige på flere lokasjoner så ring oss
                            gjerne uansett hvor du er. Fuglehjelpen er en av
                            landets eldste hjelpeorganisasjoner for fugl.
                        </p>
                        <div className="right-side">
                            <a href="/omoss">
                                <button>Les mer om oss</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offwhite-div">
                <div className="main-div-box">
                    <div className="centered">
                        <h1>FUGL I NØD</h1>
                        <p className="greentext">
                            Har du funnet en fugl i nød og er usikker på hva du
                            gjør nå? <br />
                            Ring oss på{" "}
                            <a href="tel:+4790086161" className="greentext">
                                900 86 161
                            </a>{" "}
                            eller{" "}
                            <a href="tel:+4791165789" className="greentext">
                                911 65 789
                            </a>{" "}
                            og send oss gjerne et bilde av fuglen. <br />
                            <br />
                        </p>
                        <p className="greentext">
                            Får du ikke tak i oss?
                            <br />
                            Noen ganger kan vi ikke ta telefonen. Da er det
                            greit å vite hva du selv kan gjøre.
                        </p>
                        <a href="/fuglinod">
                            <button>Les mer her</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="white-div">
                <div className="main-div-box">
                    <div className="main-div-textbox">
                        <h1>FUGLEFÔRING</h1>
                        <p>
                            Visste du at du kan gjøre fuglene sterkere og bedre
                            rustet for livets utfordringer bare ved å mate dem?
                            Fuglehjelpen anbefaler fôring av fugler hele året
                            rundt så de er klare for lange trekk eller
                            overvintring. Når en trekkfugl kommer tilbake til
                            nordlige trakter i mai, kan den være så sulten og
                            utmattet at en "dårlig vår" kan ta knekken på den.
                            Da vil et fuglebrett med frø være redningen.
                        </p>
                        <a href="/fugleforing">
                            <button>Les mer her</button>
                        </a>
                    </div>
                    <div className="img-main">
                        <img src="/home/hjem01.jpg" alt="Fugl på matstasjon" />
                    </div>
                </div>
            </div>
            <div className="offwhite-div">
                <div className="main-div-box">
                    <div>
                        <div className="centered">
                            <h1>REHABILITERTE FUGLER</h1>
                            <p>
                                Følg oss på Facebook for å se mer av vårt arbeid
                                for ville fugler i Norge.
                            </p>
                        </div>
                        <div className="rehab-fugler">
                            <a
                                href="https://www.facebook.com/Fuglehjelpen/posts/pfbid0hu3w4rEpqtB1isbpNEdm2hLLwKiwTzYh71eFsVmaNWZ1uz2jcFYdJKpwrckKDwx7l"
                                className="rehab-fugler-box"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="rehab-fugler-img">
                                    <img
                                        src="/home/hjem02.jpg"
                                        alt="Nødhjelp for Havsule"
                                    />
                                </div>
                                <div className="rehab-fugler-text">
                                    <h2 className="p-demi">
                                        Nødhjelp for Havsule
                                    </h2>
                                    <p>
                                        Denne havsulen fant vi med tråd hardt
                                        rundt nebbet, som aldri ville løsnet på
                                        egenhånd.
                                    </p>
                                </div>
                            </a>
                            <a
                                href="https://www.facebook.com/Fuglehjelpen/posts/pfbid0NchYFRdBRPjDCWxSTriU68ZMmoJLsowpwJ1R3CzzCpSgSC7B6crpd6gYcqANAaUgl"
                                className="rehab-fugler-box"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="rehab-fugler-img">
                                    <img
                                        src="/home/hjem03.jpg"
                                        alt="Perleugle med hjernerystelse"
                                    />
                                </div>
                                <div className="rehab-fugler-text">
                                    <h2 className="p-demi">
                                        Perleugle med hjernerystelse
                                    </h2>
                                    <p>
                                        Etter noen dagers rehab på mottaket
                                        spiser og flyr den nå helt selv.
                                    </p>
                                </div>
                            </a>
                            <a
                                href="https://www.facebook.com/Fuglehjelpen/posts/pfbid035cXiatZyNw23yGTPrcDWUNgDPEzecVquFZNE2sSG3PnCSeWzdUD4t8dFYkSM1MWpl"
                                className="rehab-fugler-box"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="rehab-fugler-img">
                                    <img
                                        src="/home/hjem04.jpg"
                                        alt="Spurvehauk på rehab"
                                    />
                                </div>
                                <div className="rehab-fugler-text">
                                    <h2 className="p-demi">
                                        Spurvehauk på rehab
                                    </h2>
                                    <p>
                                        Etter en kollisjon trengte den noen
                                        dagers hvile på mottaket. Nå er den klar
                                        for det fri igjen!
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white-div">
                <div className="main-div-box alt">
                    <div className="main-div-textbox">
                        <h1>BLI FRIVILLIG</h1>
                        <p className="greentext bigger-text">
                            Ønsker du å bli en Fuglehjelper? Alt arbeid hos
                            Fuglehjelpen gjøres av frivillige, og alle bidrag
                            hjelper! Vi trenger hjelp med alt fra
                            rehabilitering, til kjørehjelp, til mer
                            administrative oppgaver m. m.
                        </p>
                        <a href="/blifrivillig">
                            <button>Les mer her</button>
                        </a>
                    </div>
                    <div className="img-main">
                        <img src="/home/hjem05.jpg" alt="Andunge i hånd" />
                    </div>
                </div>
            </div>
            <div className="offwhite-div">
                <div className="main-div-box">
                    <div className="centered">
                        <h1>STØTT OSS</h1>
                        <p>
                            Fuglehjelpen er avhengige av din hjelp og støtte for
                            å kunne fortsette å hjelpe norske villfugler. Ønsker
                            du å støtte <br /> Fuglehjelpen økonomisk, kan du
                            sende et valgfritt beløp til
                        </p>
                        <br />
                        <br />
                        <p>
                            <span
                                id="support-highlight"
                                className="stott-inline"
                            >
                                Kontonummer:{" "}
                            </span>
                            15030726852,{" "}
                            <span
                                id="support-highlight"
                                className="stott-inline"
                            >
                                Vipps:{" "}
                            </span>
                            834729,{" "}
                            <a
                                href="https://www.norsk-tipping.no/grasrotandelen/din-mottaker/983235735"
                                target="_blank"
                                className="nodeco blacktext"
                            >
                                <span
                                    id="support-member"
                                    className="stott-inline"
                                >
                                    Grasrotmottaker:{" "}
                                </span>
                            </a>
                            Fuglehjelpen,
                            <br />
                            organisasjonsnummer: 983235735
                            <br />
                            <br />
                            <span className="stott-inline">
                                Eller gi et fast beløp som{" "}
                            </span>
                            <a href="/stottoss" id="support-member">
                                medlem
                            </a>
                            <br />
                            <br />
                        </p>
                        <p id="stott-bold">
                            Alle bidrag går kun til hjelp av fugl
                        </p>
                    </div>
                </div>
            </div>
            <div className="white-div">
                <div className="main-div-box">
                    <div className="other-orgs">
                        <h1>
                            <div>ANDRE HJELPEORGANISASJONER</div>
                            <span>
                                ANDRE HELPE-
                                <br />
                                ORGANISASJONER
                            </span>
                        </h1>
                        <ul>
                            <li>
                                <a
                                    href="https://svanehjelpen.no/"
                                    target="_blank"
                                >
                                    Svanehjelpen
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.fugleadvokatene.no/"
                                    target="_blank"
                                >
                                    Fugleadvokatene
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.duepatruljen.com/"
                                    target="_blank"
                                >
                                    Duepatruljen
                                </a>
                            </li>
                            <li>
                                <span>Byfuglhjelpen</span> Trondheim:{" "}
                                <a href="tel:+4746468600">46468600</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
