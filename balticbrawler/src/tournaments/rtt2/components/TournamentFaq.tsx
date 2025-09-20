import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import RulesPackList from "../../components/RulesPackList";

function TournamentFaq() {
    const tableContent: { header: string; value: ReactNode }[] = [
        {
            header: "Schachuhr",
            value: (
                <>
                    <Typography>
                        Sobald ein Spieler mit Schachuhr spielen möchte, wird
                        das Spiel mit einer Schachuhr ausgetragen!
                    </Typography>
                    <Typography>
                        Nach der Armeevorstellung prüft ihr hierfür die Zeit,
                        die laut BCP für das Spiel übrig bleibt
                    </Typography>
                    <Typography>
                        (diese wird von der Orga auf einer Leinwand übertragen)
                        und stellt eure Schachuhr dementsprechend ein.
                    </Typography>
                    <Typography>
                        Jedem Spieler stehen dabei maximal 1:30 Stunden zur
                        Verfügung.
                    </Typography>

                    <Typography
                        mt={2}
                        fontWeight="bold"
                        sx={{ textDecoration: "underline" }}
                    >
                        Ein Spieler hat keine Zeit mehr auf der Uhr:
                    </Typography>
                    <Typography>
                        Ab dem Zeitpunkt darf dieser Spieler nicht mehr aktiv
                        handeln. D.h. er darf keine Modelle mehr bewegen, sich
                        im Nahkampf nicht wehren, nicht schießen oder andere
                        Aktionen tätigen, die eine Entscheidung des Spielers
                        erfordern.
                    </Typography>
                    <Typography mt={1} sx={{ textDecoration: "underline" }}>
                        Er darf nur noch:
                    </Typography>
                    <Box>
                        <li>
                            <Typography display="inline">
                                Schutzwürfe (Keine feel no pain Würfe) und
                                Battleschock Tests tätigen. (Bei beiden sind
                                keine Re-Rolls durch Fähigkeiten oder Stratagems
                                erlaubt!)
                            </Typography>
                        </li>
                    </Box>
                    <Box>
                        <li>
                            <Typography display="inline">
                                Primary weiter scoren.
                            </Typography>
                        </li>
                    </Box>
                    <Box>
                        <li>
                            <Typography display="inline">
                                Secondaries die er auf der Hand hat erfüllen,
                                falls dies ohne weiteres Handeln möglich ist.
                            </Typography>
                            <Typography>
                                (Es werden keine neuen Secondaries mehr
                                gezogen!)
                            </Typography>
                        </li>
                    </Box>
                    <Typography fontWeight="bold" mt={1}>
                        Der Spieler ist verpflichtet die Schutzwürfe und
                        Battleschock Tests so schnell wie möglich abzuhandeln,
                        um nach Möglichkeit keine zusätzliche Zeit zu
                        verbrauchen!
                    </Typography>
                    <Typography mt={2} fontWeight="bold">
                        Beide Spieler haben keine Zeit mehr (Spielzeit ist
                        vorbei):
                    </Typography>
                    <Typography>
                        Es gibt einen Cut und kein Spieler kann mehr handeln
                        oder scoren. Das Spiel wird an der Stelle beendet.
                    </Typography>
                </>
            ),
        },
        {
            header: "WYSIWYG",
            value: (
                <>
                    <Typography>
                        Generell gilt, dass die Bewaffnung stets gut und schnell
                        für jeden erkennbar sein soll, damit es nicht zu
                        Missverständnissen kommt oder der Gegenspieler ständig
                        nachfragen muss, welche Bewaffnung ein Modell nun hat.
                    </Typography>
                    <Typography mt={2}>
                        Sollten Modelle innerhalb einer Unit anders gebaut sein,
                        als ihr sie spielen wollt, könnt ihr einen Waffentyp für
                        die gesamte Unit ansagen.
                    </Typography>
                    <Typography fontWeight="bold">
                        Beispiel: Ihr spielt einen Trupp Terminatoren, bei dem 2
                        eine Power Fist ausgerüstet haben und der Rest
                        Chainfists. An der Stelle könnt ihr die Unit so
                        deklarieren, dass sie entweder Alle eine Power Fist oder
                        Alle eine Chainfist tragen.
                    </Typography>
                    <Typography fontWeight="bold">
                        Dies muss bei der Armeevorstellung deutlich kommuniziert
                        werden. Verfügung.
                    </Typography>

                    <Typography mt={2}>
                        Habt ihr mehrere Modelle des gleichen Typs in einer
                        Armee, die die selbe Bewaffnung tragen können, könnt ihr
                        auch hier deklarieren, dass{" "}
                        <Typography display="inline" fontWeight="bold">
                            ALLE
                        </Typography>{" "}
                        die selbe Bewaffnung besitzen, auch wenn sie
                        unterschiedlich gebaut sind.
                    </Typography>

                    <Typography fontWeight="bold">
                        Beispiel: Ihr spielt Chaos Knights und wollt, dass Alle
                        einen Havoc Launcher haben, obwohl einige mit Heavy
                        Stubbern ausgestattet sind. Dies muss bei der
                        Armeevorstellung deutlich kommuniziert werden.
                    </Typography>
                </>
            ),
        },
    ];
    return <RulesPackList tableContent={tableContent} />;
}

export default TournamentFaq;
