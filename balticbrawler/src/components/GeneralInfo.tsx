import { Typography } from "@mui/material";
import { ReactNode } from "react";
import RulesPackList from "./RulesPackList";

function GeneralInfo() {
    const generalContent: {
        header: string;
        value: ReactNode;
        footer?: ReactNode;
    }[] = [
        {
            header: "Spielutensilien",
            value: (
                <>
                    <Typography>
                        Würfel, Schachuhr, Maßband etc. müssen mitgebracht
                        werden.
                    </Typography>
                    <Typography fontWeight="bold" mt={1}>
                        Marker werden von uns gestellt und müssen nicht
                        mitgebracht werden!
                    </Typography>
                </>
            ),
        },
        {
            header: "Andauernde Effekte",
            value: "Andauernde Effekte müssen kenntlich gemacht werden.",
        },
        {
            header: "Scoring Sheets",
            value: (
                <>
                    <Typography>
                        Scoring Sheets werden wir euch zur Verfügung stellen.
                    </Typography>
                    <Typography>
                        Wer möchte, kann natürlich auch das Scoring per App
                        durchführen, wenn beide Spieler damit einverstanden
                        sind.
                    </Typography>
                </>
            ),
        },
        {
            header: "Schachuhr/Spielzeit",
            value: (
                <>
                    <Typography>
                        Das Benutzen einer Schachuhr ist erwünscht (Infos
                        hierfür findet ihr im Turnier FAQ).
                    </Typography>
                    <Typography>
                        Die Spielzeit beträgt 3:15 Stunden inklusive
                        Armeevorstellung.
                    </Typography>
                </>
            ),
        },
        {
            header: "Schiedsrichter",
            value: "Es werden ausreichend Schiedsrichter zur Verfügung stehen.",
        },
        {
            header: "Spielverhalten",
            value: (
                <>
                    <Typography>
                        Wir erwarten regelkonformes Verhalten. Bei Fehlverhalten
                        oder Betrug behalten wir uns vor, Strafpunkte zu
                        vergeben.
                    </Typography>
                    <Typography>
                        Geht mit eurem Gegenspieler fair und respektvoll um, so
                        wie ihr es euch andersherum auch wünscht.
                    </Typography>
                    <Typography>
                        Wir empfehlen euch, im Sinne des fairen Spiels zu
                        handeln (‚play by intent‘) und einander offen auf
                        mögliche ‚Gotcha‘-Momente hinzuweisen.
                    </Typography>
                </>
            ),
        },
        {
            header: "Foto-/Filmerlaubnis",
            value: "Alle Teilnehmer stimmen zu, im Rahmen des Turniers, aufgenommen und veröffentlicht zu werden.",
        },
        {
            header: "Verzichtserklärung",
            value: "Wir übernehmen keine Haftung für Schäden und Verluste.",
        },
        {
            header: "Best Painted",
            value: "Best Painted wird durch die Spieler selber gewählt. Weitere Informationen erhaltet ihr direkt vor Ort.",
        },
        {
            header: "Gültige Quellen",
            value: (
                <>
                    <Typography>
                        Es gelten die aktuellen GW-FAQs und das aktuelle Balance
                        Dataslate.
                    </Typography>
                    <Typography>
                        Zusätzlich kommt das WTC FAQ zur Anwendung.
                    </Typography>
                </>
            ),
        },
    ];

    return <RulesPackList tableContent={generalContent} />;
}

export default GeneralInfo;
