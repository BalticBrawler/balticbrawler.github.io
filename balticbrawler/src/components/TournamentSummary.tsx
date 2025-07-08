import { Link, Typography } from "@mui/material";
import { ReactNode } from "react";
import RulesPackList from "./RulesPackList";

function TournamentSummary() {
    const tableContents: { header: ReactNode; value: ReactNode }[] = [
        {
            header: "Veranstaltungsort",
            value: (
                <>
                    <Link href="https://www.weissenhaeuserstrand.de/unterkuenfte/">
                        Weissenhäuser Strand
                    </Link>
                    {" - "}
                    <Link href="https://maps.app.goo.gl/fuBoWt7qfMquW3eZA">
                        Seestraße 1, 23758 Wangels
                    </Link>
                </>
            ),
        },
        {
            header: "Kontakt",
            value: (
                <>
                    <Link href="mailto:BeachClashWh40k@web.de">
                        BeachClashWh40k@web.de
                    </Link>
                    <Typography>Discord: Jänke|T oder Kopfnusspalme</Typography>
                </>
            ),
        },
        {
            header: "Verpflegung",
            value: (
                <>
                    <Typography>
                        Mittagsessen (Buffet) und eine Kaffee-/Wasserflatrate
                        sind inklusive
                    </Typography>
                </>
            ),
        },
        {
            header: "Parken",
            value: "Das Parken ist für euch kostenlos", // Parken verlinken
        },
        {
            header: "Anmeldung",
            value: (
                <>
                    <Link href="https://www.tabletopturniere.de/t3_tournament.php?uri=beach-clash-2025-gt">
                        TableTopTurniere.de
                    </Link>
                    {" und "}
                    <Link href="https://www.bestcoastpairings.com/">
                        BestCoastPairings.com
                    </Link>
                </>
            ),
        },
        {
            header: "Startgeld",
            value: "119€ / Schüler, Azubis und Studenten 89€",
        },
        {
            header: <Link href="http://paypal.me/BastianKlitzke">Paypal</Link>, // paypalme
            value: (
                <>
                    <Typography>
                        BeachClashwh40k@web.de (Familie und Freunde)
                    </Typography>
                    <Typography>
                        VWZ: Beach Clash Major / Vorname „Nickname“ Nachname
                    </Typography>
                </>
            ),
        },
        {
            header: "Ticket-Rückgabe",
            value: "Rückgabe bis 14 Tage vorher (28.06.2025)",
        },
        { header: "Regeldeadline", value: "04.07.2025" },
        { header: "Listenabgabe", value: "09.07.2025" },
        {
            header: (
                <Typography
                    display="inline"
                    fontWeight="bold"
                    style={{ textDecoration: "underline" }}
                >
                    Wichtige Regelinfo
                </Typography>
            ),
            value: (
                <>
                    <Typography>
                        Aus aktuellem Anlass haben wir uns (wenn bis zum
                        09.07.25 von GW nichts kommt) für Folgendes entschieden,
                        was sowohl für die Imperial, als auch die Chaos Knights
                        gilt:
                    </Typography>
                    <li>
                        Es dürfen maximal 3 große Knight Modelle gespielt werden
                    </li>
                    <li>
                        Davon darf nur 1 Modell aus der Cerastus-Reihe vorkommen
                    </li>
                </>
            ),
        },
    ];
    return <RulesPackList tableContent={tableContents} />;
}

export default TournamentSummary;
