import ImageRotator from "../assets/components/ImageRotator";

function OmOss() {
    const leftImages = [
        "/omoss/omoss_slideshow01.jpg",
        "/omoss/omoss_slideshow03.jpg",
        "/omoss/omoss_slideshow05.jpg",
    ];

    const rightImages = [
        "/omoss/omoss_slideshow02.jpg",
        "/omoss/omoss_slideshow04.jpg",
        "/omoss/omoss_slideshow06.jpg",
    ];

    return (
        <>
            <div className="hero-banner-main hero-img-omoss">
                <div className="hero-circle-wrapper">
                    <div className="hero-circle circle-movement">
                        <div className="hero-inner-circle">
                            <div className="hero-text alt-movement">
                                <p className="hero-h1 alt-hero">OM OSS</p>
                                <p className="hero-p alt-text">
                                    Vår idylliske rehabiliteringsgård holder til
                                    i Moss. Her har vi 7 store
                                    rehabiliteringsbur og en stor dam tilpasset
                                    ulike fuglearter.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="green-div">
                <div className="sub-div-box">
                    <div className="sidebyside">
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

            <div className="white-div">
                <div className="sub-div-box">
                    <div className="sidebyside">
                        <div className="logo-img"></div>
                        <div className="sub-div-text">
                            <h1>HVEM ER FUGLEHJELPEN?</h1>
                            <p>
                                Fuglehjelpen er en idealistisk organisasjon med
                                fokus på vern og rehabilitering av fugl.
                                Kompetanseområdene strekker seg fra praktisk
                                rådgivning på telefon, henting av skadet fugl,
                                levering til veterinær, rehabilitering,
                                ringmerking, drift av duetårn og behandling
                                katastroferammet fugl.
                            </p>
                            <br />
                            <br />
                            <p>
                                Alt arbeid skjer på frivillig basis. Vi har
                                tilholdsted og mottak for skadet fugl i Moss,
                                men har frivillige på flere lokasjoner så ring
                                oss gjerne uansett hvor du er. Fuglehjelpen er
                                en av landets eldste hjelpeorganisasjoner for
                                fugl.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offwhite-div">
                <div className="sub-div-box">
                    <div className="sidebyside alt">
                        <div className="sub-div-text">
                            <h1>FUGLEHJELPENS HISTORIE</h1>
                            <p>
                                Fuglehjelpen ble startet i 1999 av
                                fugleentusiast Pelle Wickstrøm, med bakgrunn i
                                Byfuglens Interessegruppe fra 1989. Fra Sverige
                                hadde han med seg impulser fra KFVs Riksförbund
                                (Katastrohjälp - Foglar och Vilt) og
                                Fågelcentralen, organ for rehabilitering av
                                skadet vilt og fugl. Ideen var å kunne tilby et
                                lignede hjelpeapparat for fugl i Norge, hvor det
                                ikke eksisterte noe slikt.
                            </p>
                            <br />
                            <br />
                            <p>
                                De første årene hadde Wickstrøm et nært
                                samarbeid med veterinær (Dr. Scient) og
                                fugleentusiast Lars Moe ved Veterinærhøgskolen i
                                Oslo om uvikling av fuglekirurgi (operasjon av
                                vinger og ben, samt proteseutvikling).
                                Prosjektet ble en del av undervisningen ved
                                høyskolen, men på lik linje med andre offentlig
                                instanser utøves ikke praktisk fuglehjelp idag.
                            </p>
                        </div>
                        <div className="img-main">
                            <img
                                src="/omoss/omoss01.jpg"
                                alt="Pelle Wickstrøm"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="sidebyside">
                            <div className="img-main">
                                <img
                                    src="/omoss/omoss02.jpg"
                                    alt="Due i duetårn"
                                />
                            </div>
                            <div className="sub-div-text">
                                <p>
                                    På slutten av 90-tallet samarbeidet
                                    Fuglehjelpen med Institutt for Biovitenskap
                                    ved Universitetet i Oslo, hvor skadde fugler
                                    kunne rehabiliteres som en del av
                                    biologiundervisningen på instituttets eget
                                    område på Blindern. Utendørsavdelingen ble
                                    lagt ned i begynnelsen av 2000-tallet og
                                    Fuglehjelpen etablerte i kjølevannet av
                                    dette sine egne rehabiliteringssteder i
                                    samarbeide med frivillige fuglehjelpere og
                                    veterinærer.
                                </p>
                                <br />
                                <br />
                                <p>
                                    I 1996 ble duetårnene innført til Norge, et
                                    tiltak inspirert fra andre storbyer i Europa
                                    for human bestandsregulering av byduer.
                                    Tårnene ble innført og drives den dag i dag
                                    av Fuglehjelpen. Kunder har vært
                                    Jernbaneverket, Gardermoen Lufthavn, Oslo
                                    Sporveier, Norsk Hydro, Oslo Kommune og
                                    andre aktører med behov for
                                    bestandsregulering.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white-div">
                <div className="sub-div-box">
                    <div className="sidebyside alt">
                        <div className="sub-div-text">
                            <h1>DUETÅRNENE I NORGE</h1>
                            <p>
                                Duetårnene i Norge innføres og drives av
                                Fuglehjelpen. Et duetårn er en enkel,
                                frittstående, arkitektonisk innretning, gjerne 8
                                -kantet i formen og med plass for inntil 30-40
                                redeplasser. Duetårn har i en årrekke vært
                                benyttet i europeiske storbyer med gode
                                erfaringer og positive resultater. Fuglehjelpen
                                lanserte ideen i Norge i 1996 med det første
                                tårnet ved Akerselven i Oslo med støtte fra
                                Dyrebeskyttelsen Norge. Tårnene drives fortsatt
                                av Fuglehjelpen og har vært opprettet i Oslo,
                                Asker, Drammen, Halden, Gardermoen, Sarpsborg og
                                Bergen.
                            </p>
                        </div>
                        <div className="img-main">
                            <img src="/omoss/omoss03.jpg" alt="Duetårn" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="offwhite-div">
                <div className="sub-div-box">
                    <div className="sidebyside">
                        <div className="img-main">
                            <img src="/omoss/omoss04.jpg" alt="Duetårn" />
                        </div>
                        <div className="sub-div-text">
                            <h1>FORDELER MED DUETÅRN</h1>
                            <p>
                                <span className="greentext p-demi">
                                    Trygt samlingssted for duer:{" "}
                                </span>
                                Hensiketen til duetårn er å beskytte mot angrep
                                og forstyrrelser nedenfra, gi duene ly, mat og
                                tilholdsted. Ved å tilby en alternativ
                                rasteplass på et egnet sted, kan man bidra til
                                at duene flokker seg hit fremfor andre steder
                                som for eksempel ved restauranter og butikker
                                som ikke ønsker besøk av duer, og deres
                                ekskrementer, der det håndteres og selges mat.
                                Ved duetårnene havner avføringen deres på
                                gressplen som absorberer den organisk, uten at
                                det er til sjenanse.
                            </p>
                            <br />
                            <br />
                            <p>
                                <span className="greentext p-demi">
                                    Kontrollert mating:{" "}
                                </span>
                                Mating av duer kan være til sjenanse og
                                tiltrekke seg skadedyr dersom det gjøres på
                                uegnede steder og mat blir liggende igjen.
                                Mating i regi av Fuglehjelpen ved duetårn sikrer
                                artsriktig mat i kontrollerte former, og
                                fôringen holder duene friske og sterke igjennom
                                årets sesonger. Duetårnene har fôringskasser
                                montert på tårnene og ukentlig oppfølging av
                                frivillige. Maten holdes over bakkenivå og det
                                fylles ikke på mer enn nødvendig, og tårnene
                                viser tydelig hvor duene kan spise og folk kan
                                fôre.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="sidebyside alt">
                            <div className="sub-div-text">
                                <p>
                                    <span className="greentext p-demi">
                                        Tilsyn og helsekontroll:{" "}
                                    </span>
                                    Når lokale dueflokker samles på faste
                                    steder, gir det gode muligheter for
                                    dyrevelferdstiltak. Observasjon av bestanden
                                    over tid kan gi bedre oversikt over
                                    helsetilstanden blant duene. Individer med
                                    sykdom eller skade kan oppdages, innfanges,
                                    og behandles. Faremomenter som for eksempel
                                    tråd som sitter fast rundt beina, kan
                                    fjernes før det leder til skade eller død.
                                    Samtidig kan observasjoner av lokale
                                    dueflokker over tid bidra til å oppdage mer
                                    overordnede sykdomstrender. Når duer samles
                                    på et fast sted, kan vi i Fuglehjelpen
                                    foreta ukentlige tellinger av individer i
                                    området på faste tidspunkt. Resultatene
                                    rapporteres månedlig til oss. Denne
                                    informasjonen kan blant annet si noe om
                                    størrelsen på flokken, og gjøre det lettere
                                    å oppdage endringer.
                                </p>
                                <br />
                                <br />
                                <p>
                                    I tillegg til sin miljø- og dyrevernsmessige
                                    verdi er duetårnet også et levende kunstverk
                                    som symboliserer en kommune som tar vare på
                                    duene sine.
                                </p>
                            </div>
                            <div className="img-main">
                                <img src="/omoss/omoss05.jpg" alt="Due" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OmOss;
