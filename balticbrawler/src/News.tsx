import { Box, Card, Link, Typography } from "@mui/material";
import useIsMobile from "./hooks/useIsMobile";

function News() {
    const [, xPadding, topPadding] = useIsMobile();

    const newsGT = [
        {
            date: "01.06.2025",
            content: (
                <Typography>
                    <Typography display="block">
                        Jetzt haben wir unser Rules Pack vervollständigt und die
                        Missionen zu den einzelnen Maps ergänzt.
                    </Typography>
                    <Typography display="block" mt={1}></Typography>
                </Typography>
            ),
        },
        {
            date: "21.05.2025",
            content: (
                <Typography>
                    <Typography display="block">
                        Wir freuen uns, euch mitteilen zu können, dass das
                        vorläufige Rules Pack für unser bevorstehendes Turnier
                        nun bereit ist! Ihr findet dort alle wichtigen
                        Informationen zu den Regeln, dem Ablauf und allen
                        weiteren Details.
                    </Typography>
                    <Typography display="block" mt={1}>
                        👉 Das Rules Pack könnt ihr{" "}
                        <Link
                            href="https://docs.google.com/document/d/1eEIr9jXLXeQTsxiOXuH8tS3E6HMpNtWk/edit?tab=t.0"
                            underline="always"
                        >
                            hier
                        </Link>{" "}
                        ansehen.
                    </Typography>
                    <Typography display="block" mt={1}>
                        Lest euch das Dokument durch und meldet euch gerne, wenn
                        ihr Fragen oder Anmerkungen habt.
                    </Typography>
                    <Typography display="block" mt={1}>
                        Wir wünschen euch viel Spaß bei den Vorbereitungen und
                        freuen uns auf ein spannendes Turnier!
                    </Typography>
                </Typography>
            ),
        },
        {
            date: "10.05.2025",
            content: (
                <Typography>
                    <Typography display="block">
                        🍽️ Der Speiseplan ist da! Der Hunger kann kommen – unser
                        offizieller Speiseplan für das Beach Clash Major 2025
                        steht fest! Ob deftig, vegetarisch oder fischverliebt –
                        für jeden Geschmack ist etwas dabei. Den Plan ihr könnt
                        ihn euch{" "}
                        <Link
                            href="/Speiseplan_BeachClashMajor_2025.pdf"
                            underline="always"
                        >
                            hier
                        </Link>{" "}
                        ansehen.
                    </Typography>
                </Typography>
            ),
        },
    ];
    const newsRTT = [
        {
            date: "18.10.2024",
            content: (
                <Typography>
                    <Typography display="block">
                        So Leute, wir haben heute für alle Tische Matten mit
                        Aufstellungszonen geordert, damit es euch wirklich an
                        nix fehlt und ihr maximal verwöhnt werdet. Ihr braucht
                        also weder Marker mitbringen oder platzieren, noch das
                        Gelände umbauen. Und jeder wird auf einer Matte mit
                        Aufstellungszonen spielen. Wir versuchen euch einfach
                        den maximalen Spielspaß zu verschaffen 🤗.
                    </Typography>
                    <Typography display="block" marginTop={1}>
                        Also meldet euch an, wenn ihr es noch nicht seid und
                        empfehlt uns gerne weiter ✌️
                    </Typography>
                </Typography>
            ),
        },
    ];
    return (
        <Box
            flex={1}
            flexDirection="column"
            justifyItems="stretch"
            alignItems="stretch"
            mt={topPadding}
            mx={xPadding}
            paddingBottom={10}
        >
            <Card>
                <Typography variant="h4" m={2}>
                    Beach Clash 2025 Major
                </Typography>
                {/* <MenuButton /> */}
            </Card>
            {newsGT.map((x) => (
                <Card
                    sx={{
                        margin: 1,
                        marginTop: 4,
                        paddingX: 4,
                        paddingY: 2,
                    }}
                >
                    <Box>
                        <Typography variant="h5" margin={2}>
                            {x.date}
                        </Typography>
                        <Typography marginBottom={2}>{x.content}</Typography>
                    </Box>
                </Card>
            ))}

            <Card style={{ marginTop: 100 }}>
                <Typography variant="h4" m={2}>
                    Beach Clash 2024 - RTT
                </Typography>
            </Card>
            {newsRTT.map((x) => (
                <Card
                    sx={{
                        margin: 1,
                        marginTop: 4,
                        paddingX: 4,
                        paddingY: 2,
                    }}
                >
                    <Box>
                        <Typography variant="h5" margin={2}>
                            {x.date}
                        </Typography>
                        <Typography marginBottom={2}>{x.content}</Typography>
                    </Box>
                </Card>
            ))}
        </Box>
    );
}

export default News;
