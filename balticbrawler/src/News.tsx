import { Box, Card, Typography } from "@mui/material";
import useIsMobile from "./hooks/useIsMobile";

function News() {
    const [, xPadding, topPadding] = useIsMobile();

    const news = [
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
        <Box mt={topPadding} mx={xPadding}>
            {news.map((x) => (
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
