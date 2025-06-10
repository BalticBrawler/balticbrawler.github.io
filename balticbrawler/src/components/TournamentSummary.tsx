import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function TournamentSummary() {
    const tableContents = [
        {
            header: "Veranstaltungsort",
            value: "Weissenhäuser Strand, Seestraße 1, 23758 Wangels",
        },
        {
            header: "Kontakt",
            value: "Mail: BeachClashWh40k@web.de\r\nDiscord: Jänke|T oder Kopfnusspalme",
        },
        {
            header: "Verpflegung",
            value: "Mittagsessen (Buffet) und eine Kaffee-/Wasserflatrate sind inklusive",
        },
        { header: "Parken", value: "Das Parken ist für euch kostenlos" },
        {
            header: "Anmeldung",
            value: "TabletopTurniere.de und bestcoastpairings.com",
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
    return (
        <Box justifySelf="center">
            {tableContents.map((x) => (
                <Box display="flex" flexDirection="row" my={1}>
                    <Typography width={200}>{x.header}:</Typography>
                    <Typography>{x.value}</Typography>
                </Box>
            ))}
        </Box>
    );
}

export default TournamentSummary;
