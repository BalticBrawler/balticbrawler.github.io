import { Link, Typography } from "@mui/material";
import { ReactNode } from "react";
import RulesPackList from "../../components/RulesPackList";

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
                    <Link href="https://www.tabletopturniere.de/t3_tournament.php?tid=38840">
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
            value: "49€ / Schüler, Azubis und Studenten 35€",
        },
        {
            header: <Link href="http://paypal.me/BastianKlitzke">Paypal</Link>, // paypalme
            value: (
                <>
                    <Typography>
                        BeachClashwh40k@web.de (Familie und Freunde)
                    </Typography>
                    <Typography>
                        VWZ: Beach Clash / Vorname „Nickname“ Nachname
                    </Typography>
                </>
            ),
        },
        {
            header: "Ticket-Rückgabe",
            value: "Rückgabe bis 14 Tage vorher (11.11.2025)",
        },
        { header: "Regeldeadline", value: "18.10.2025" },
        { header: "Listenabgabe", value: "18.10.2025" },
    ];
    return <RulesPackList tableContent={tableContents} />;
}

export default TournamentSummary;
