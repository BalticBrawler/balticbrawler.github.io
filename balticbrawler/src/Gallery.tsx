import { Box, Card, Modal, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList/ImageList";
import ImageListItem from "@mui/material/ImageListItem/ImageListItem";
import { useState } from "react";
import ReactSimpleImageViewer from "react-simple-image-viewer";
import useIsMobile from "./hooks/useIsMobile";

function Gallery() {
    const [openImage, setOpenImage] = useState<number | null>(null);

    const beachLoungeImages = [...Array(13).keys()].map(
        (i) => `./BeachClash/BeachLounge/BeachLounge${i + 1}.jpg`
    );
    const prepImages = [...Array(9).keys()].map(
        (i) => `./BeachClash/RTT/small/Prep_${i + 1}.jpg`
    );
    const turnierImages = [...Array(36).keys()].map(
        (i) => `./BeachClash/RTT/small/Turnier_${i + 1}.jpg`
    );
    const bestPaintedImages = [...Array(13).keys()].map(
        (i) => `./BeachClash/RTT/small/BestPainted_${i + 1}.jpg`
    );
    const winnersImages = [...Array(6).keys()].map(
        (i) => `./BeachClash/RTT/small/Siegerehrung_${i + 1}.jpg`
    );

    const images = prepImages
        .concat(turnierImages)
        .concat(bestPaintedImages)
        .concat(winnersImages);
    const [isMobile, xPadding] = useIsMobile();

    return (
        <>
            <Card sx={{ margin: xPadding, marginTop: 10 }}>
                <Box>
                    <Typography variant="h2" justifySelf="center" my={2}>
                        Beach Lounge
                    </Typography>
                    <ImageList
                        variant="woven"
                        gap={xPadding}
                        cols={isMobile ? 1 : 3}
                    >
                        {beachLoungeImages.map((item, index) => (
                            <ImageListItem
                                key={item}
                                onClick={() => setOpenImage(index)}
                                sx={{ cursor: "zoom-in", margin: 1 }}
                            >
                                <img
                                    loading="lazy"
                                    width={300}
                                    src={item}
                                    alt={item}
                                    srcSet={`${item}`}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Card>
            <Card sx={{ margin: xPadding, marginTop: 10 }}>
                <ImageList
                    variant="woven"
                    gap={xPadding}
                    cols={isMobile ? 1 : 3}
                >
                    {images.map((item, index) => (
                        <ImageListItem
                            key={item}
                            onClick={() =>
                                setOpenImage(index + beachLoungeImages.length)
                            }
                            sx={{ cursor: "zoom-in", margin: 1 }}
                        >
                            <img
                                loading="lazy"
                                width={300}
                                src={item}
                                alt={item}
                                srcSet={`${item}`}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Card>
            <Modal open={openImage !== null}>
                <ReactSimpleImageViewer
                    // src={images.map((i) => i.replace("/small", ""))}
                    src={beachLoungeImages.concat(images)}
                    currentIndex={openImage!}
                    disableScroll={false}
                    onClose={() => setOpenImage(null)}
                    closeOnClickOutside={true}
                    backgroundStyle={{ background: "#12121288" }}
                ></ReactSimpleImageViewer>
            </Modal>
        </>
    );
}

export default Gallery;
