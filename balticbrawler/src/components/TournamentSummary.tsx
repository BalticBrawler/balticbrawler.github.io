import { Link, Typography } from "@mui/material";
import { ReactNode } from "react";
import RulesPackList from "./RulesPackList";

function TournamentSummary() {
    const tableContents: { header: string; value: ReactNode }[] = [
        {
            header: "Veranstaltungsort",
            value: (
                <Link href="https://maps.app.goo.gl/fuBoWt7qfMquW3eZA">
                    "Weissenhäuser Strand, Seestraße 1, 23758 Wangels"
                </Link>
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
            value: "Mittagsessen (Buffet) und eine Kaffee-/Wasserflatrate sind inklusive",
        },
        { header: "Parken", value: "Das Parken ist für euch kostenlos" },
        {
            header: "Anmeldung",
            value: (
                <>
                    <Link href="https://www.tabletopturniere.de/t3_tournament.php?uri=beach-clash-2025-gt">
                        https://www.tabletopturniere.de
                    </Link>
                    {" und "}
                    <Link href="https://www.bestcoastpairings.com/">
                        https://www.bestcoastpairings.com/
                    </Link>
                </>
            ),
        },
        {
            header: "Startgeld",
            value: "119€ / Schüler, Azubis und Studenten 89€",
        },
        {
            header: "Paypal",
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
        { header: "Listenabgabe", value: "06.07.2025" },
    ];
    return <RulesPackList tableContent={tableContents} />;
}

export default TournamentSummary;
