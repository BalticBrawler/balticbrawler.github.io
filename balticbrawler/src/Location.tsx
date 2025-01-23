import { Suspense } from "react";
import {
    Box,
    Card,
    Typography,
    Link,
    ImageList,
    ImageListItem,
} from "@mui/material";
import { Launch } from "@mui/icons-material";
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
                }}
            >
                <Typography m={textMargin}>
                    <Typography display="block">
                        Unser Beach Clash findet im schönen{" "}
                        <Link
                            href="https://www.weissenhaeuserstrand.de/tagungen/tagungsraeume-strandhotel/"
                            underline="always"
                        >
                            Weißenhäuser Strand{" "}
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
                        <Box mx={textMargin}>
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
                            {/* <LazyImage src={x.images[0].src} /> */}
                        </Box>
                    </Suspense>
                </Box>
            </Card>
            {props.images.map((x) => (
                <Card
                    sx={{
                        flexDirection: "column",
                        margin: 1,
                        marginTop: 5,
                        padding: 1,
                        alignItems: "center",
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
