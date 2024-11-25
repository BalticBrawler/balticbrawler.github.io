import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    IconButton,
    Link,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import {
    AccessTime,
    GpsFixedOutlined,
    LaunchOutlined,
} from "@mui/icons-material";
import useIsMobile from "./hooks/useIsMobile";

const textMargin = 5;

// // Create the .ics URL
// const url = [
//     "BEGIN:VCALENDAR",
//     "VERSION:2.0",
//     "BEGIN:VEVENT",
//     "DTSTART:" + this.formatDate(this.state.event.startDate),
//     "DTEND:" + this.formatDate(this.state.event.endDate),
//     "SUMMARY: Beach Clash",
//     "DESCRIPTION: Warhammer Tunier" ,
//     "LOCATION:Weissenhäuser Strand, Seestraße 1, 23758 Wangels",
//     "BEGIN:VALARM",
//     "TRIGGER:-PT15M",
//     "REPEAT:1",
//     "DURATION:PT15M",
//     "ACTION:DISPLAY",
//     "DESCRIPTION:Reminder",
//     "END:VALARM",
//     "END:VEVENT",
//     "END:VCALENDAR"
// ].join("\n");

// const blob = new Blob([url], {type: 'text/calendar;charset=utf-8'});

// if (/msie\s|trident\/|edge\//i.test(window.navigator.userAgent)) {
//     // Open/Save link in IE and Edge
//     window.navigator.(blob, 'download.ics');
// } else {
//     // Open/Save link in Modern Browsers
//     window.open(encodeURI("data:text/calendar;charset=utf8," + url));
// }

function Tournaments() {
    const theme = useTheme();
    const [, xPadding, topPadding] = useIsMobile();

    const cards = [
        {
            icon: <AccessTime color="primary" />,
            link: "",
            contentHeader: "Datum",
            content: (
                <Box
                    display="flex"
                    flexDirection="column"
                    color={theme.palette.primary.main}
                >
                    <Typography>04.01.2025</Typography>
                    <Typography>09:00 - 21:00 Uhr</Typography>
                </Box>
            ),
        },
        {
            icon: <GpsFixedOutlined color="primary" />,
            link: "https://maps.app.goo.gl/fuBoWt7qfMquW3eZA",
            contentHeader: "Ort",
            content: (
                <Box
                    display="flex"
                    flexDirection="column"
                    color={theme.palette.primary.main}
                >
                    <Typography>Weissenhäuser Strand</Typography>
                    <Typography>Seestraße 1, 23758 Wangels</Typography>
                </Box>
            ),
        },
        {
            icon: <LaunchOutlined color="primary" />,
            link: "https://www.tabletopturniere.de/t3_tournament.php?tid=35978",
            contentHeader: "Anmeldung",
            content: (
                <Box
                    display="flex"
                    flexDirection="column"
                    color={theme.palette.primary.main}
                >
                    <Typography>über T3</Typography>
                </Box>
            ),
        },
    ];

    return (
        <Box
            flex={1}
            flexDirection="column"
            justifyItems="center"
            alignItems="stretch"
            mt={topPadding}
            mx={xPadding}
            paddingBottom={10}
        >
            <Box flex={1} flexDirection="column">
                <Box
                    display="flex"
                    flex={1}
                    flexDirection="row"
                    justifyContent="space-evenly"
                    alignItems="stretch"
                    alignContent="stretch"
                    flexWrap="wrap"
                >
                    {cards.map((x) => (
                        <Card>
                            <CardActionArea
                                href={x.link}
                                sx={{
                                    flexGrow: 1,
                                    flexDirection: "column",
                                    alignItems: "stretch",
                                }}
                            >
                                <CardContent>
                                    <ListItem
                                        alignItems="flex-start"
                                        disablePadding
                                    >
                                        <ListItemAvatar>
                                            <IconButton href={x.link}>
                                                {x.icon}
                                            </IconButton>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <>
                                                    {x.link ? (
                                                        <Link>
                                                            {x.contentHeader}
                                                        </Link>
                                                    ) : (
                                                        x.contentHeader
                                                    )}
                                                </>
                                            }
                                            secondary={x.content}
                                            secondaryTypographyProps={{
                                                color: "grey",
                                            }}
                                        ></ListItemText>
                                    </ListItem>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
            </Box>

            <Card>
                <Box
                    flex={1}
                    justifyItems="flex-start"
                    alignItems="center"
                    alignContent="stretch"
                    minHeight={500}
                >
                    <Typography
                        textAlign="center"
                        variant="h2"
                        fontFamily="sans-serif"
                        justifySelf="center"
                    >
                        {/* <Link href="https://www.tabletopturniere.de/t3_tournament.php?tid=35978"> */}
                        {/* </Link> */}
                    </Typography>
                    <Typography m={textMargin} justifySelf="center">
                        <Typography display="block" variant="h5">
                            Wir heißen euch zu unserem ersten Beach Clash in
                            einer tollen{" "}
                            <Link href="/location" underline="always">
                                Location
                            </Link>{" "}
                            willkommen.
                        </Typography>
                    </Typography>

                    <Typography m={textMargin - 2} mb={0} variant="h6">
                        Wir spielen
                    </Typography>

                    <Typography margin={textMargin} mt={1}>
                        <Typography display="block">
                            • 3 Runden nach aktuellen Missionen
                        </Typography>

                        <Typography display="block">• 2000 Punkte</Typography>
                        <Typography display="block">
                            • 3:15 h pro Runde
                        </Typography>
                        <Typography display="block">
                            • auf einheitlichem und standardisiertem Gelände
                        </Typography>
                    </Typography>

                    <Typography m={textMargin - 2} mb={0} variant="h6">
                        Besonderheit
                    </Typography>
                    <Typography m={textMargin} mt={1}>
                        <Typography display="block">
                            Den Auf- und Umbau der Tische übernehmen wir für
                            euch.
                        </Typography>
                        <Typography display="block">
                            Ihr müsst keine eigenen Marker mitbringen und auch
                            Scoresheets werden von uns gestellt.
                        </Typography>
                        <Typography mt={1} display="block">
                            Alles was ihr braucht sind eure Armeen,
                            Missionskarten, Schachuhr, Würfel und Bock auf ein
                            geiles Turnier.
                        </Typography>
                    </Typography>

                    <Typography m={textMargin - 2} my={0} variant="h6">
                        Was erwartet euch
                    </Typography>
                    <Typography m={textMargin} my={1}>
                        Kaffee und Wasser sind im Preis inbegriffen. Andere
                        Getränke können vor Ort bestellt werden und werden euch
                        an den Tischen serviert.
                    </Typography>
                    <Typography m={textMargin} my={1}>
                        Die Küche bereitet euch ein tolles Mittagessen. Ihr
                        könnt dabei aus drei Gerichten wählen.
                    </Typography>
                    <Typography></Typography>

                    <Typography m={textMargin - 2} my={0} variant="h6">
                        Sponsoren
                    </Typography>
                    <Typography m={textMargin} my={1}>
                        Einen Riesendank geht an unsere{" "}
                        <Link href="/sponsoren" underline="always">
                            Sponsoren{" "}
                        </Link>{", "}
                        die uns helfen den einen oder anderen Klasse Preis und
                        Giveaway zur Verfügung stellen.
                    </Typography>
                </Box>
            </Card>
            {/* 
            <Container m={2} mb={4}>
                <img
                    width="100%"
                    src="https://www.weissenhaeuserstrand.de/fileadmin/_processed_/3/1/csm_Weissenhaeuser-Strand-Bildergalerie-35_72038b31f4.jpg"
                ></img>
            </Container> */}
        </Box>
    );
}

export default Tournaments;
