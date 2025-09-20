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
            value: "Pause",
        },
        {
            header: "17:15 - 20:30",
            value: "Spiel 3",
        },
    ];

    const days = [{ day: "Samstag, 25.10.2025", schedule: saturday }];

    return (
        <>
            <Typography variant="h3" justifySelf="center" alignSelf="center">
                Folgt...
            </Typography>
            <Box
                display="flex"
                justifySelf="flex-start"
                alignItems="stretch"
                justifyItems="stretch"
                flexDirection="row"
                flexWrap="wrap"
                gap={2}
            >
                {false &&
                    days.map((x) => (
                        <Box
                            key={x.day}
                            display="flex"
                            flexGrow={1}
                            flexDirection="column"
                            alignItems="flex-start"
                            flex={1}
                            minWidth={300}
                        >
                            <Typography
                                justifySelf="center"
                                alignSelf="center"
                                variant="h5"
                            >
                                {x.day}
                            </Typography>
                            <Box justifySelf="flex-start">
                                {x.schedule.map((x) => (
                                    <Box
                                        key={x.header}
                                        display="flex"
                                        flexDirection="row"
                                        my={1}
                                        alignSelf="flex-start"
                                        gap={2}
                                    >
                                        <Typography
                                            alignSelf="left"
                                            textAlign="left"
                                        >
                                            {x.header}
                                        </Typography>
                                        <Typography flex={1} ml={5} width={300}>
                                            {x.value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ))}
            </Box>
        </>
    );
}

export default TournamentSchedule;
