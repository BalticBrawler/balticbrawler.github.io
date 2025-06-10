import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function TournamentSchedule() {
    const saturday = [
        {
            header: "08:15 - 08:45",
            value: "Check In",
        },
        {
            header: "08:45 - 09:15",
            value: "Begrüßung",
        },
        {
            header: "09:15 - 12:30",
            value: "Spiel 1",
        },
        { header: "12:30 - 13:30", value: "Mittagspause" },
        {
            header: "13:30 - 16:45",
            value: "Spiel 2",
        },
        {
            header: "16:45 - 17:15",
            value: "Pause **Waffeln**",
        },
        {
            header: "17:15 - 20:30",
            value: "Spiel 3",
        },
    ];
    const sunday = [
        {
            header: "08:30 - 09:00",
            value: "Begrüßung",
        },
        {
            header: "09:15 - 12:30",
            value: "Spiel 4",
        },
        { header: "12:30 - 13:30", value: "Mittagspause / **Best Painted**" },
        {
            header: "13:30 - 16:45",
            value: "Spiel 5",
        },
        {
            header: "16:45 - 17:00",
            value: "Auswertung",
        },
        {
            header: "17:00 - 17:30",
            value: "Siegerehrung",
        },
    ];

    return (
        <Box display="flex" justifySelf="center" flexDirection="row">
            <Box>
                <Typography justifySelf="center" variant="h5">
                    Samstag
                </Typography>
                {saturday.map((x) => (
                    <Box display="flex" flexDirection="row" my={1}>
                        <Typography textAlign="right">{x.header}:</Typography>
                        <Typography ml={4}>{x.value}</Typography>
                    </Box>
                ))}
            </Box>
            <Box width={100} />
            <Box>
                <Typography justifySelf="center" variant="h5">
                    Sonntag
                </Typography>
                {sunday.map((x) => (
                    <Box display="flex" flexDirection="row" my={1}>
                        <Typography textAlign="right">{x.header}:</Typography>
                        <Typography ml={4}>{x.value}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default TournamentSchedule;
