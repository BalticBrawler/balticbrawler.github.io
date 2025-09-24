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
import useIsMobile from "../../hooks/useIsMobile";

const textMargin = 5;

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
                    <Typography>25.10.2025</Typography>
                    <Typography>08:15 - 21:00 Uhr</Typography>
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
            link: "https://www.tabletopturniere.de/t3_tournament.php?tid=38840",
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
                    <Typography m={textMargin} justifySelf="center">
                        <Typography display="block" variant="h5">
                            Wir heißen euch zu unserem Beach Clash RTT 2 in
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
                            Alles was ihr neben eurer Armee, Missionskarten,
                            Maßband und Schachuhr braucht, sind heiße Würfel und
                            Bock auf ein geiles Turnier.
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
                        Zum Mittagessen erwartet euch ein tolles Buffet mit
                        Fisch, Fleisch und vegetarischen Gerichten.
                    </Typography>
                    <Typography></Typography>

                    <Typography m={textMargin - 2} my={0} variant="h6">
                        Sponsoren
                    </Typography>
                    <Typography m={textMargin} my={1}>
                        Ein riesen Dank geht an unsere{" "}
                        <Link href="/sponsoren" underline="always">
                            Sponsoren{" "}
                        </Link>
                        {", "}
                        die uns helfen den einen oder anderen Klasse Preis und
                        Giveaway zur Verfügung stellen.
                    </Typography>
                </Box>
            </Card>
        </Box>
    );
}

export default Tournaments;
