import { Suspense } from "react";
import LazyImage from "./LocationImages/LazyImage";
import { Box, Card, Typography, Link } from "@mui/material";
import { Launch } from "@mui/icons-material";
import useIsMobile from "./hooks/useIsMobile";

function Location() {
    const [isMobile, xPadding, topPadding] = useIsMobile();

    const textMargin = isMobile ? 2 : 5;

    const images = [
        {
            title: "Das Hotel",
            images: [
                { src: "/locationImages/Eingang.jpeg" },
                // { src: "/locationImages/Zugang_1.jpeg", maxWidth: 430 },
                { src: "/locationImages/Zugang_2.jpeg", maxWidth: "100%" },
            ],
        },
        {
            title: "Die Veranstaltungsräume",
            images: [
                { src: "/locationImages/Raum_4.jpeg" },
                { src: "/locationImages/Raum_1.jpeg" },
                { src: "/locationImages/Raum_2.jpeg" },
                { src: "/locationImages/Raum_3.jpeg" },
            ],
        },
        {
            title: "Das Restaurant",
            images: [
                { src: "/locationImages/Restaurant_1.jpeg" },
                { src: "/locationImages/Restaurant_2.jpeg" },
                { src: "/locationImages/Chill_1.jpeg" },
            ],
        },
    ];

    // <img src={placeholder} alt={alt} />
    return (
        <Box justifyItems="center" mx={xPadding} mt={topPadding}>
            <Typography
                alignSelf="center"
                textAlign="center"
                variant="h2"
                fontFamily="sans-serif"
                m={0}
            ></Typography>
            <Card
                sx={{
                    flexDirection: "column",
                    margin: 1,
                    padding: 1,
                }}
            >
                <Box>
                    <Typography m={textMargin}>
                        <Typography display="block">
                            Unser Beach Clash findet im schönen{" "}
                            <Link
                                href="https://www.weissenhaeuserstrand.de/tagungen/tagungsraeume-strandhotel/"
                                underline="always"
                            >
                                Strandhotel - Weißenhäuser Strand{" "}
                                <Launch
                                    fontSize="small"
                                    style={{ verticalAlign: "text-bottom" }}
                                />
                            </Link>{" "}
                            statt, nur einen Steinwurf vom Meer entfernt.
                        </Typography>

                        <Typography display="block" mt={1}>
                            Neben tollen Unterkünften sind das subtropische
                            Badeparadies, das Abenteuer Dschungelland oder ein
                            tolles Wellnessangebot nur einige der Attraktionen
                            des Ferien- und Freizeitparks Weissenhäuser Strand.
                        </Typography>

                        <Typography display="block" mt={1}>
                            Ihr habt also auch die Möglichkeit, Tabletop und
                            Familie unter einen Hut zu bekommen.
                        </Typography>
                    </Typography>

                    {images.map((x) => (
                        <>
                            <Typography m={textMargin - 2} mb={0} variant="h6">
                                {x.title}
                            </Typography>
                            {x.images.map((i) => (
                                <Suspense
                                    fallback={
                                        <Typography>Loading...</Typography>
                                    }
                                >
                                    <Box mx={textMargin}>
                                        <LazyImage
                                            src={i.src}
                                            width={i.maxWidth}
                                        />
                                    </Box>
                                </Suspense>
                            ))}
                        </>
                    ))}
                </Box>
            </Card>
        </Box>
    );
}

export default Location;
