import { Box, Card, Link, Typography } from "@mui/material";
import UrbanArtworkIcon from "/urban_artworx_logo.avif";
import WarfactorIcon from "/warfactor_logo.png";

function Sponsors() {
    const sponsors = [
        {
            img: UrbanArtworkIcon,
            title: "test sp",
            link: "https://urban-artworx.com/",
        },
        {
            img: WarfactorIcon,
            title: "test sp",
            link: "https://warfactor.eu/",
        },
    ];
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                margin: 1,
                backgroundColor: "#333333AA",
            }}
        >
            <Typography variant="h4" fontWeight="bold" margin={4}>
                Sponsoren
            </Typography>
            <Box
                flex={1}
                alignContent="center"
                alignSelf="center"
                display="flex"
                flexWrap="wrap"
            >
                {sponsors.map((x) => (
                    <Link m={1} href={x.link}>
                        <img src={x.img} width={300}></img>
                    </Link>
                ))}
            </Box>
        </Card>
    );
}

export default Sponsors;
