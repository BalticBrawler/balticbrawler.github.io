import { Box, Typography } from "@mui/material";
import ZoomableImage from "./ZoomableImage";
import useIsMobile from "../hooks/useIsMobile";

function MapLayouts() {
    const [isMobile] = useIsMobile();

    const terrainFeatures = [
        {
            img: "/Layouts/Terrain0.png",
            decription: "Länge: 5” / Breite: 2,5” / Höhe: 5”",
        },
        {
            img: "/Layouts/Terrain1.png",
            decription: (
                <>
                    <Typography>Länge: 9” / Breite: 5” / Höhe: 9,5”</Typography>
                    <Typography>
                        **Alle Ruinen werden ohne Etagen gespielt**
                    </Typography>
                </>
            ),
        },
        {
            img: "/Layouts/Terrain2.png",
            decription: (
                <>
                    <Typography>Länge: 9” / Breite: 5” / Höhe: 5”</Typography>
                    <Typography>
                        **Alle Ruinen werden ohne Etagen gespielt**
                    </Typography>
                </>
            ),
        },
        {
            img: "/Layouts/Terrain3.png",
            decription:
                "Wenn sich 2 Geländezonen berühren, werden diese als separate Geländezonen betrachtet.",
        },
        {
            img: "/Layouts/Terrain4.png",
            decription: "Dieser Teil der Ruine ist kleiner als 4”.",
        },
        {
            img: "/Layouts/Terrain5.png",
            decription: (
                <>
                    <Typography>
                        Dort kann{" "}
                        <Typography display="inline" fontWeight="bold">
                            keine
                        </Typography>{" "}
                        Sichtlinie zwischen den Ruinen gezogen werden.
                    </Typography>
                </>
            ),
        },
        {
            img: "/Layouts/Terrain6.png",
            decription:
                "An dieser Stelle passt JEDES Modell durch, darf seine Bewegung aber nicht im Gelände beenden.",
        },
    ];
    return (
        <Box>
            <Box justifySelf="center" justifyItems="center">
                <Typography variant="h5">Spiel 1</Typography>
                <Typography ml={1}>Hammer and Anvil - Linchpin</Typography>
                <ZoomableImage img="/Layouts/Layout1.jpg"></ZoomableImage>
            </Box>
            <Box justifySelf="center" justifyItems="center">
                <Typography variant="h5">Spiel 2</Typography>
                <Typography ml={1}>
                    Search and Destroy - Scorched Earth
                </Typography>
                <ZoomableImage img="/Layouts/Layout2.jpg"></ZoomableImage>
            </Box>
            <Box justifySelf="center" justifyItems="center">
                <Typography variant="h5">Spiel 3</Typography>
                <Typography ml={1}>Crucible of Battle - Terraform</Typography>
                <ZoomableImage img="/Layouts/Layout3.jpg"></ZoomableImage>
            </Box>
            <Box justifySelf="center" justifyItems="center">
                <Typography variant="h5">Spiel 4</Typography>
                <Typography ml={1}>
                    Hammer and Anvil - Hidden Supplies
                </Typography>
                <ZoomableImage img="/Layouts/Layout4.jpg"></ZoomableImage>
            </Box>
            <Box justifySelf="center" justifyItems="center">
                <Typography variant="h5">Spiel 5</Typography>
                <Typography ml={1}>Tipping Point - Take and hold</Typography>
                <ZoomableImage img="/Layouts/Layout5.jpg"></ZoomableImage>
            </Box>
            <Box justifySelf="center" justifyItems="center">
                <Typography variant="h4" mt={2}>
                    Terrain Index
                </Typography>
                <Box>
                    {!isMobile &&
                        terrainFeatures.map((x) => (
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                m={2}
                            >
                                <Box width={300}>
                                    <Box justifySelf="center">
                                        <img src={x.img} />
                                    </Box>
                                </Box>
                                <Box flex={1}>{x.decription}</Box>
                            </Box>
                        ))}
                    {isMobile &&
                        terrainFeatures.map((x) => (
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                my={4}
                            >
                                <Box flex={1}>
                                    <img src={x.img} />
                                </Box>
                                <Box flex={1}>{x.decription}</Box>
                            </Box>
                        ))}
                </Box>
            </Box>
        </Box>
    );
}

export default MapLayouts;
