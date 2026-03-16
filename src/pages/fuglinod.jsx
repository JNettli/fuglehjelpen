import { useEffect, useState } from "react";
import ImageRotator from "../assets/components/ImageRotator";

function FuglINod() {
    const [active, setActive] = useState("");
    const [open, setOpen] = useState(false);

    const ids = [
        "ikkesvar",
        "halting",
        "vingeproblemer",
        "kollisjon",
        "frakt",
        "matogvann",
        "kattebitt",
        "lomvi",
        "fugleunger",
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-140px 0px -60% 0px",
                threshold: 0.2,
            },
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const leftImages = [
        "/fuglinod/fuglinod_lomvi_slideshow03.jpg",
        "/fuglinod/fuglinod_lomvi_slideshow05.jpg",
        "/fuglinod/fuglinod_lomvi_slideshow07.jpg",
        "/fuglinod/fuglinod_lomvi_slideshow01.jpg",
    ];

    const rightImages = [
        "/fuglinod/fuglinod_lomvi_slideshow02.jpg",
        "/fuglinod/fuglinod_lomvi_slideshow04.jpg",
        "/fuglinod/fuglinod_lomvi_slideshow06.jpg",
        "/fuglinod/fuglinod_lomvi_slideshow08.jpg",
    ];

    return (
        <>
            <div className="bg-cream">
                <div className="hero-banner-main hero-img-fuglinod hero-img-mover">
                    <div className="hero-circle-wrapper">
                        <div className="hero-circle circle-movement">
                            <div className="hero-inner-circle">
                                <div className="hero-text alt-movement">
                                    <p className="hero-h1 alt-hero">
                                        FUGL I NØD
                                    </p>
                                    <p className="hero-p alt-text">
                                        Har du funnet en fugl i nød og er
                                        usikker på hva du gjør nå? Ring oss på{" "}
                                        <a href="tel:+4790086161">900 86 161</a>{" "}
                                        eller{" "}
                                        <a href="tel:+4791165789">911 65 789</a>{" "}
                                        og send oss gjerne et bilde av fuglen
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>

                <div className="offwhite-div">
                    <div className="quicknavbox">
                        <p>Hurtignavigering</p>

                        <div className={`quicknav ${open ? "open" : ""}`}>
                            <a href="#ikkesvar">Får ikke svar?</a>
                            <a href="#halting">Halting</a>
                            <a href="#vingeproblemer">Vingeproblemer</a>
                            <a href="#kollisjon">Kollisjon</a>
                            <a href="#frakt">Frakt</a>
                            <a href="#matogvann">Mat og vann</a>
                            <a href="#kattebitt">Kattebitt</a>
                            <a href="#lomvi">Lomvi</a>
                            <a href="#fugleunger">Fugleunger</a>
                        </div>
                        <button
                            className={`quicknav-toggle ${open ? "open" : ""}`}
                            onClick={() => setOpen(!open)}
                            aria-label="Åpne hurtignavigering"
                        >
                            ▼
                        </button>
                    </div>
                </div>

                <div className="white-div">
                    <div className="sub-div-box">
                        <div className="sidebyside">
                            <div className="img-main">
                                <img
                                    src="/fuglinod/fuglinod01.jpg"
                                    alt="Fugl som får hjelp"
                                />
                            </div>
                            <div className="sub-div-text">
                                <div>
                                    <h1 id="ikkesvar">
                                        HVA KAN DU SELV GJØRE?
                                    </h1>
                                    <section className="ikkesvar">
                                        <p>
                                            Noen ganger kan vi ikke ta telefonen
                                            eller så har vi ikke kapasitet.
                                            Telefonen bemannes av frivillige,
                                            med jobb og forpliktelser akkurat
                                            som deg. Da er det greit å vite hva
                                            du selv kan gjøre:
                                        </p>
                                    </section>
                                    <ol className="helplist">
                                        <li>
                                            Alle har plikt til å hjelpe et dyr i
                                            nød.
                                            <p>
                                                {" "}
                                                Du kan ta fuglen til veterinær
                                                uten kostnad for deg. Er
                                                veterinæren du snakker med
                                                vanskelig så finner du
                                                lovteksten{" "}
                                                <a
                                                    href="https://lovdata.no/dokument/NL/lov/2009-06-19-97/KAPITTEL_1#%C2%A74"
                                                    target="_blank"
                                                >
                                                    her.
                                                </a>
                                            </p>
                                        </li>
                                        <li>
                                            Hvis ikke deg, hvem da?
                                            <p>
                                                {" "}
                                                Takk for at du bryr deg, vi
                                                heier på deg. Dette får du til!
                                            </p>
                                        </li>
                                        <li>
                                            Hvis det kniper, ring politiet på
                                            02800.
                                            <p>
                                                {" "}
                                                De kan gi deg nummeret til din
                                                lokale viltnemd og de vet ofte
                                                også hvilken veterinær som
                                                eventuelt har vakt i ditt
                                                nærområde.
                                            </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="sidebyside alt">
                            <div className="sub-div-text">
                                <ol className="helplist" start={4}>
                                    <li id="halting">
                                        Fuglen halter:
                                        <p>
                                            {" "}
                                            Observer - er du sikker på at fuglen
                                            trenger hjelp? En en haltende fugl
                                            kan gjerne klare seg fint om den
                                            ikke har åpenbare sår, og vingene
                                            fungerer.
                                        </p>
                                    </li>
                                    <li id="frakt">
                                        Plukke opp fugl:
                                        <p>
                                            {" "}
                                            Er fuglen i umiddelbar fare så få
                                            den i sikkerhet. Du kan trygt plukke
                                            den opp. Er den vanskelig å få fatt
                                            i så kan du bruke en t-skjorte,
                                            jakken din, et håndkle etc. som
                                            "håv". Vær varsom!
                                        </p>
                                    </li>
                                    <li>
                                        Frakt av skadet fugl:
                                        <p>
                                            {" "}
                                            Hvis fuglen trenger hjelp - finn en
                                            pappeske og lag luftehull. Bank på
                                            en dør, spør i en butikk. Klesplagg
                                            kan også fungere midlertidig ved
                                            transport. Du kan fint ta med deg
                                            esken med fuglen på offentlig
                                            transport. Buss, bane og tog er helt
                                            innafor.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="img-main">
                                <img
                                    src="/fuglinod/fuglinod02.jpg"
                                    alt="Overrasket fugl som får hjelp"
                                />
                            </div>
                        </div>
                        <div className="sidebyside">
                            <div className="img-main">
                                <img
                                    src="/fuglinod/fuglinod03.jpg"
                                    alt="Ugle som stirrer"
                                />
                            </div>
                            <div className="sub-div-text">
                                <ol className="helplist" start={7}>
                                    <li id="kollisjon">
                                        Kollisjon:
                                        <p>
                                            {" "}
                                            Har fuglen krasjet i et vindu, la
                                            den få hvile på et trygt sted. Den
                                            kan trenge opptil noen dager før den
                                            kommer seg, særlig om den har fått
                                            hjernerystelse.
                                        </p>
                                    </li>
                                    <li id="matogvann">
                                        Mat:
                                        <p>
                                            {" "}
                                            Mat for en skadet eller sliten fugl
                                            varierer med arten. Solsikkefrø,
                                            melormer, sirisser, rå eggeplomme,
                                            kokt egg eller biter av kyllingfilé
                                            kan være mulige matkilder. Melorm og
                                            sirisser får du i dyrebutikker.
                                        </p>
                                    </li>
                                    <li>
                                        Vann:
                                        <p>
                                            {" "}
                                            IKKE tving i fuglen vann. Sett en
                                            liten skål/bruskork med vann i esken
                                            hvis fuglen trenger å være der en
                                            stund.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="sidebyside alt">
                            <div className="sub-div-text">
                                <ol className="helplist" start={10}>
                                    <li id="vingeproblemer">
                                        Hengende vinge:
                                        <p>
                                            {" "}
                                            Hvis du finner en fugl med hengende
                                            vinge, kan det være forbigående, men
                                            oftest handler det da om benbrudd.
                                            Den trenger da et røntgenbilde tatt
                                            hos veterinær for å se om bruddet
                                            ligger slik at fuglen kan bli
                                            flygedyktig igjen. Om bruddet ikke
                                            kan repareres, må den dessverre
                                            avlives.
                                        </p>
                                    </li>
                                    <li id="kattebitt">
                                        Kattebitt:
                                        <p>
                                            {" "}
                                            Hva gjør du når katten har tatt en
                                            fugl, og den fortsatt lever? Fuglen
                                            må til veterinær, ring gjerne
                                            Fuglehjelpen! En fugl som har vært
                                            utsatt for bitt har mest sannsynelig
                                            indre skader og påfølgende
                                            infeksjoner, som ikke synes utenpå.
                                            Det er derfor viktig med
                                            veterinærbesøk.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="img-main">
                                <img
                                    src="/fuglinod/fuglinod04.jpg"
                                    alt="Fugl som får hjelp med skadet vinge"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offwhite-div">
                    <div className="sub-div-box">
                        <div className="centered">
                            <h1 id="lomvi">LOMVI</h1>
                            <p>
                                Hver høst forviller det seg mange lomvier inn i
                                Oslofjorden. Her sliter de med å finne mat og
                                slutter derfor å pusse fjærene sine. Dette gjør
                                at fjærdrakten deres ikke lenger blir vanntett.
                                Lomviene blir da våte og kalde og trekker opp på
                                land. Mange dør av sult her eller i fjorden.
                                Lomvi er en kritisk truet fugleart. Dette er
                                hvordan du kan hjelpe lomvien:{" "}
                            </p>
                            <div className="infobox-container">
                                <div className="infobox">
                                    <h2 className="p-demi">Mating av lomvi</h2>
                                    <div className="underline"></div>
                                    <p>
                                        Lomvi spiser kun fisk.
                                        <br />
                                        Finner du er lomvi i oslofjorden eller
                                        på land burde den få fisk
                                        (brislingstørrelse) slik at den får
                                        energi til å fange sin egen fisk. De
                                        liker best rå, fet hvit fisk.
                                        <br />
                                        <br />
                                        IKKE mat en lomvi med brød, havregryn
                                        osv, det er giftig for den.
                                    </p>
                                </div>
                                <div className="infobox">
                                    <h2 className="p-demi">Lomvi på land</h2>
                                    <div className="underline"></div>
                                    <p>
                                        Hvis den virker frisk så frakt den til
                                        havet så snart som mulig. Kommer man seg
                                        ikke til havet, kan en elv kan gjøre
                                        nytten, men en byfontene er ikke godt
                                        nok. Tilby den fisk.
                                        <br />
                                        <br />
                                        Har lomvien vært lenge på land, lukker
                                        øynene eller virker veldig rolig så må
                                        den på rehabilitering, ta kontakt med
                                        oss.
                                    </p>
                                </div>
                                <div className="infobox">
                                    <h2 className="p-demi">Rehabilitering</h2>
                                    <div className="underline"></div>
                                    <p>
                                        Vi tar inn mange lomvier til
                                        rehabilitering hvert år. Noen lomvier må
                                        bli i opptil 11 mnd før fjærene er
                                        vanntette igjen. Finner du er lomvi som
                                        trenger hjelp, kontakt oss.
                                        <br />
                                        <br />
                                        Hvis du skal frakte en lomvi, er
                                        pappeske med noe mykt i bunnen den beste
                                        metoden.
                                    </p>
                                </div>
                            </div>
                            <div className="infobox-container">
                                <div className="image-rotator">
                                    <div className="rotator-left">
                                        <ImageRotator images={leftImages} />
                                    </div>

                                    <div className="rotator-right">
                                        <ImageRotator images={rightImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white-div">
                    <div className="sub-div-box">
                        <div className="sidebyside alt">
                            <div className="sub-div-text">
                                <h1 id="fugleunger">FUGLEUNGER</h1>
                                <ol className="helplist" start={1}>
                                    <li>
                                        Har du funnet en fugleunge?:
                                        <p>
                                            {" "}
                                            IKKE ta med fugleungen hjem, annet
                                            enn etter samråd med Fuglehjelpen.
                                            De fleste fuglearter hopper 2-5
                                            dager ute av reiret før de kan fly.
                                            Hvis fugleungen virker frisk så
                                            trekk deg unna og se hva som skjer.
                                            Foreldrene er som regel i nærheten
                                            og venter på "klar bane" til selv å
                                            ta hånd om ungen.
                                        </p>
                                    </li>
                                    <li>
                                        Har du allerede tatt med fugleungen
                                        hjem?:
                                        <p>
                                            {" "}
                                            Ta den med tilbake der du fant den
                                            så fort som mulig slik at foreldrene
                                            får matet den. Det er en myte at
                                            fugleforeldre ikke vil ta til seg en
                                            unge som er berørt av
                                            menneskehender.
                                        </p>
                                    </li>
                                    <li>
                                        Ungen er fjærløs:
                                        <p>
                                            {" "}
                                            Hvis ungen er fjærløs så kan den i
                                            noen tilfeller plasseres tilbake i
                                            reiret. Ring Fuglehjelpen for
                                            veiledning. Send oss også foto av
                                            fugleungen og omstendigheter så vi
                                            kan gi gode råd.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="img-main">
                                <img
                                    src="/fuglinod/fuglinod05.jpg"
                                    alt="Fugl som får hjelp"
                                />
                            </div>
                        </div>
                        <div className="sidebyside">
                            <div className="img-main">
                                <img
                                    src="/fuglinod/fuglinod06.jpg"
                                    alt="Fugl som får hjelp"
                                />
                            </div>
                            <div className="sub-div-text">
                                <ol className="helplist" start={4}>
                                    <li>
                                        Fugleungen ser ut til å være i fare:
                                        <p>
                                            {" "}
                                            Ser det ut som den er i fare fra
                                            feks for katter, hunder, trafikk
                                            eller lignende så sett den på en
                                            gren i et tre eller der det er
                                            mindre farefullt.
                                        </p>
                                    </li>
                                    <li>
                                        Fugleungen trenger din hjelp:
                                        <p>
                                            {" "}
                                            Hvis begge foreldrene er døde, redet
                                            er skadet, eller en katt har tatt
                                            den med seg hjem og man ikke vet
                                            hvor redet er, trenger fugleungen
                                            din hjelp. Å oppfostre en fugleunge
                                            krever 1-2 uker med tett oppfølging
                                            og hyppig mating, etterfulgt av noen
                                            roligere uker der fuglen gradvis får
                                            mer frihet og lærer å klare seg
                                            selv. Det kan være både krevende og
                                            følelsesmessig, men Fuglehjelpen vil
                                            veilede deg underveis og hjelpe deg
                                            med råd i prosessen.
                                        </p>
                                        <br />
                                        <br />
                                        <p>
                                            Under står det tips og råd til å
                                            fostre opp fugleunger.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offwhite-div">
                    <div className="sub-div-box">
                        <div className="sidebyside alt">
                            <div className="sub-div-text">
                                <h1 id="fugleunger">FOSTRE OPP FUGLEUNGER</h1>
                                <ol className="helplist" start={1}>
                                    <li>
                                        Varme:
                                        <p>
                                            {" "}
                                            Varme er det første fugleungen skal
                                            ha, spesielt fugleunger uten fjær.
                                            De trenger varme hele tiden. Hold
                                            den tett i hendene, mot kroppen,
                                            eller bruk en varmepute, et
                                            oppvarmet håndkle, en
                                            varmtvannsflaske pakket inn i tøy,
                                            osv. Et lunt sted med høy
                                            romtemperatur kan være forskjellen
                                            mellom liv og død. Fugleungen må bli
                                            varm før den klarer å ta til seg
                                            mat.
                                        </p>
                                    </li>
                                    <li>
                                        Mating av de yngste fugleungene:
                                        <p>
                                            {" "}
                                            Hvis fugleungen enda ikke har fått
                                            opp øyene (under 1 uke gammel) blir
                                            det aktuelt med mating gjennom
                                            slange som føres ned spiserøret (NB!
                                            Dette gjøres kun av kyndige. Kontakt
                                            fuglehjelpen).
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="img-main">
                                <img
                                    src="/fuglinod/fuglinod07.jpg"
                                    alt="Fugl som får hjelp"
                                />
                            </div>
                        </div>
                        <div className="sidebyside">
                            <div className="img-main">
                                <img
                                    src="/fuglinod/fuglinod08.jpg"
                                    alt="Fugl som får hjelp"
                                />
                            </div>
                            <div className="sub-div-text">
                                <ol className="helplist" start={3}>
                                    <li>
                                        Mating av svake fugleunger med åpne
                                        øyne:
                                        <p>
                                            {" "}
                                            Om ungen virker svak, er flytende
                                            føde best. Vann og flytende føde gis
                                            dråpevis med pipette. Revolum
                                            (næringsoppløsning med druesukker,
                                            fås på apotek) er anbefalt til svake
                                            fugler, og laktosefri
                                            morsmelkerstatning er spesielt bra
                                            for dueunger. Når fugleungen livner
                                            til, kan du gi rå eggeplomme blandet
                                            med vann eller oppmatingsfôr fra
                                            dyrebutikk. Jo yngre, jo oftere må
                                            den mates. Vanligvis piper den og
                                            vibrerer med vingene når den er
                                            sulten.
                                        </p>
                                    </li>
                                    <li>
                                        Mating av større fugleunger med
                                        fjær/fjærpinner:
                                        <p>
                                            {" "}
                                            Når fugleungen har fått fjær eller
                                            fjærpinner, kan den begynne med fast
                                            og myk mat. Gi små biter, og drypp
                                            litt vann på maten om den ikke er
                                            fuktig nok. Fast føde er drøyere og
                                            det kan derfor nå gå flere timer
                                            mellom hver mating, men gi minst tre
                                            måltider om dagen.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="sidebyside alt">
                            <div className="sub-div-text">
                                <ol className="helplist" start={5}>
                                    <li>
                                        Hvordan mate ulike fugleunger:
                                        Tårnseilerens
                                        <p>
                                            {" "}
                                            oppgaping skjer kun øyeblikksvis,
                                            mens de fleste{" "}
                                            <span className="greentext p-demi">
                                                småfugl, trost, skjære og kråke
                                            </span>{" "}
                                            gaper villig opp. Putt maten (i myk
                                            konsistens) ned i gapet. Dytt hver
                                            munnfull ned med en finger.{" "}
                                            <span className="greentext p-demi">
                                                Ender, gjess, måker og ugler
                                            </span>{" "}
                                            mfl. gaper ikke, men snapper heller
                                            maten til seg. Litt bevegelse eller
                                            berøring mot nebbet kan stimulere
                                            reaksjonen.{" "}
                                            <span className="greentext p-demi">
                                                Dueunger
                                            </span>{" "}
                                            er vanskeligere, da de forventer et
                                            nebb rundt sitt eget. Du må da klare
                                            å holde ungens nebb halvåpent med
                                            den ene hånden, mens maten føres inn
                                            med den andre. Pinsett kan brukes om
                                            fuglen er liten
                                        </p>
                                    </li>
                                    <li>
                                        Hva slags mat kan du gi?:
                                        <p>
                                            {" "}
                                            Fugleunger trenger proteinrik mat
                                            for å vokse. Selv frøspisere får
                                            vanligvis insekter i starten. Alle{" "}
                                            <span className="greentext p-demi">
                                                gapeunger
                                            </span>{" "}
                                            kan få rå karbonadedeig (usaltet) og
                                            hardkokt egg, gjerne med litt knust
                                            skall for kalsium. Arter som{" "}
                                            <span className="greentext p-demi">
                                                duer og ender
                                            </span>{" "}
                                            kan få egg most med kokt ris, erter,
                                            blader, frø/gryn sammen med
                                            blandingsprodukter som hønsefôr og
                                            oppmatingsfôr for frøspisende
                                            fugler.
                                            <span className="greentext p-demi">
                                                Trost, skjære, kråke, ugle og
                                                flere småfugl
                                            </span>{" "}
                                            kan få oppbløtt valpefôr (som Hills
                                            eller Eukanuba). Også{" "}
                                            <span className="greentext p-demi">
                                                måker
                                            </span>{" "}
                                            kan få oppbløtt valpefor, men
                                            foretrekker rå fisk, spesielt
                                            brisling, som spises med innmat og
                                            alt. Kutt opp i passende stykker.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="img-main">
                                <img
                                    src="/fuglinod/fuglinod09.jpg"
                                    alt="Fugl som får hjelp"
                                />
                            </div>
                        </div>
                        <div className="sidebyside">
                            <div className="img-main">
                                <img
                                    src="/fuglinod/fuglinod10.jpg"
                                    alt="Fugl som får hjelp"
                                />
                            </div>
                            <div className="sub-div-text">
                                <ol className="helplist" start={7}>
                                    <li>
                                        Fugleunger blir selvspisende rundt 3 - 4
                                        ukers alderen:
                                        <p>
                                            {" "}
                                            Legg litt igjen av maten du mater
                                            med, så fuglen kan øve seg på å
                                            spise selv. For duer og frøspisende
                                            småfugl, spurver, finker, meiser og
                                            stær, start med en skål med smått
                                            grovmalt fôr uten skall:
                                            kanarifuglfrø til dueunger,
                                            havregryn til spurver og pilfink,
                                            solsikkekjerner til meiser og stær.
                                            Etter hvert kan de få vanlig korn.
                                            “Villfuglblanding”, solsikkefrø med
                                            skall og meiseboller. Dueblanding
                                            (med erter og mais) egner seg for
                                            duer og ender. Sett også frem
                                            fuglesand for fordøyelsen og friskt
                                            vann til enhver tid. Ugler spiser
                                            fjærrester, hår eller benbiter i
                                            kjøttmaten for ikke å få mavesår.
                                            <br />
                                            <br />
                                            Selv når fuglen spiser selv og flyr,
                                            trenger den fortsatt litt
                                            oppfølging. Prøv å venne fuglen til
                                            de mat- og leverforhold den møter
                                            ute i det fri. La den bli vant til å
                                            fly, bevege seg fritt, å se andre
                                            fugler omkring.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="sidebyside alt">
                            <div className="sub-div-text">
                                <ol className="helplist" start={8}>
                                    <li>
                                        Renhold:
                                        <p>
                                            {" "}
                                            Etter mating kommer det avføring.
                                            Skjæreunger er nøye på å presentere
                                            denne alt etter første munnfull. De
                                            vender da bakdelen mot materen, slik
                                            at vedkommende har sjanse til å
                                            fjerne skittposen (Pass på! hinnen
                                            rundt går fort i stykker). Ha en
                                            spiseskje klar, og ta i mot
                                            nedfallet. Skjæreunger og dueunger
                                            har også andre instinkt for å holde
                                            redet rent. De går noen skritt
                                            baklengs, til de kommer til redets
                                            ytterkant, og så lar de det stå til.
                                            Den som mater en dueunge i fanget,
                                            bør være på vakt når ungen
                                            målbevisst går tre skritt bakover.
                                            Ha en fuktig klut klar under
                                            matingen og hold nebb (nesebor) og
                                            fuglefjes rent for lettstivnende
                                            matrester. Redet bør fores med mykt
                                            og lett utskiftbart papir e.l.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="img-main">
                                <img
                                    src="/fuglinod/fuglinod11.jpg"
                                    alt="Fugl som får hjelp"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FuglINod;
