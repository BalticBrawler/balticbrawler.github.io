import { Suspense } from "react";
import {
    Box,
    Card,
    Typography,
    Link,
    ImageList,
    ImageListItem,
} from "@mui/material";
import useIsMobile from "./hooks/useIsMobile";
import LocationImage from "./data/LocationImage";

function Location(props: { images: LocationImage[] }) {
    const [isMobile, xPadding, topPadding] = useIsMobile();

    const textMargin = isMobile ? 2 : 5;

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
                    maxWidth: 1500,
                }}
            >
                <Typography
                    variant="h3"
                    alignSelf="center"
                    mt={2}
                    textAlign="center"
                >
                    <Link href="https://www.weissenhaeuserstrand.de/unterkuenfte/">
                        Weißenhäuser Strand
                    </Link>
                </Typography>
                <Typography
                    m={textMargin - 2}
                    variant="body1"
                    justifySelf="center"
                    textAlign="center"
                >
                    <Typography display="block" mt={1}>
                        Unser Beach Clash findet im schönen Weißenhäuser Strand
                        statt, nur einen Steinwurf vom Meer entfernt.
                    </Typography>

                    <Typography display="block" mt={1}>
                        Neben tollen Unterkünften sind das subtropische
                        Badeparadies, das Abenteuer Dschungelland oder ein
                        tolles Wellnessangebot nur einige der Attraktionen des
                        Ferien- und Freizeitparks Weissenhäuser Strand.
                    </Typography>

                    <Typography display="block" mt={1}>
                        Ihr habt also auch die Möglichkeit, Tabletop und Familie
                        unter einen Hut zu bekommen.
                    </Typography>
                </Typography>
                <Box justifySelf="center">
                    <Suspense fallback={<Typography>Loading...</Typography>}>
                        <Box
                            mx={textMargin}
                            maxWidth={1000}
                            justifySelf="center"
                        >
                            <ImageListItem
                                sx={{
                                    margin: 1,
                                }}
                            >
                                <img
                                    loading="lazy"
                                    src={
                                        "/locationImages/Major/Luftaufnahme.jpg"
                                    }
                                    alt={
                                        "/locationImages/Major/Luftaufnahme.jpg"
                                    }
                                    height={200}
                                />
                            </ImageListItem>
                        </Box>
                    </Suspense>
                </Box>
            </Card>
            {props.images.map((x) => (
                <Card
                    key={x.title}
                    sx={{
                        flexDirection: "column",
                        margin: 1,
                        marginTop: 5,
                        padding: 1,
                        alignItems: "center",
                        maxWidth: 1500,
                    }}
                >
                    <Typography
                        m={textMargin - 2}
                        mb={0}
                        variant="h6"
                        justifySelf="center"
                    >
                        {x.title}
                    </Typography>
                    <Typography
                        m={textMargin - 2}
                        mb={0}
                        variant="body1"
                        justifySelf="center"
                        textAlign="center"
                    >
                        {x.description}
                    </Typography>
                    {x.images.length > 1 && (
                        <ImageList
                            variant="quilted"
                            gap={8}
                            cols={isMobile ? 1 : Math.min(2, x.images.length)}
                        >
                            {x.images.map((item) => (
                                <ImageListItem
                                    key={item.src}
                                    sx={{
                                        margin: 1,
                                    }}
                                >
                                    <img
                                        loading="lazy"
                                        src={item.src}
                                        alt={item.src}
                                        srcSet={`${item.src}`}
                                        width={100}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    )}
                </Card>
            ))}
        </Box>
    );
}

export default Location;
