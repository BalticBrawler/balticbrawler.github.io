import { Box, Typography } from "@mui/material";
import ZoomableImage from "./ZoomableImage";
import useIsMobile from "../hooks/useIsMobile";

function MapLayouts(props: {
    maps: { mission?: string; map: string }[];
    prefix?: string;
}) {
    const [isMobile] = useIsMobile();

    const terrainFeatures = [
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
            img: "/Layouts/Terrain0.png",
            decription: "Länge: 5” / Breite: 2,5” / Höhe: 5”",
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
        <>
            {props.maps.map((x, i) => (
                <Box key={x.map} justifySelf="center" justifyItems="center">
                    <Typography variant="h5">
                        {props.prefix ?? "Spiel"} {i + 1}
                    </Typography>
                    {x.mission && <Typography ml={1}>{x.mission}</Typography>}
                    <ZoomableImage img={x.map}></ZoomableImage>
                </Box>
            ))}
            <Box justifySelf="center" justifyItems="center">
                <Typography variant="h4" mt={2}>
                    Terrain Index
                </Typography>
                <Box>
                    {!isMobile &&
                        terrainFeatures.map((x) => (
                            <Box
                                key={x.img}
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
                                key={x.img}
                                display="flex"
                                flexDirection="column"
                                alignItems="flex-start"
                                my={4}
                            >
                                <Box flex={1} width={200}>
                                    <img src={x.img} />
                                </Box>
                                <Box flex={1}>{x.decription}</Box>
                            </Box>
                        ))}
                </Box>
            </Box>
        </>
    );
}

export default MapLayouts;
