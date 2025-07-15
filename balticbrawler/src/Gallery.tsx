import { Box, Card, Modal } from "@mui/material";
import ImageList from "@mui/material/ImageList/ImageList";
import ImageListItem from "@mui/material/ImageListItem/ImageListItem";
import { useState } from "react";
import ReactSimpleImageViewer from "react-simple-image-viewer";
import useIsMobile from "./hooks/useIsMobile";

const major2025_1 = [...Array(39).keys()].map(
    (i) => `./BeachClash/Major2025/BeachClashMajor2025_Tag1_${i + 1}.jpg`
);
const major2025_2 = [...Array(21).keys()].map(
    (i) => `./BeachClash/Major2025/BeachClashMajor2025_Tag2_${i + 1}.jpg`
);
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

const beachLoungeOffset = major2025_1.length + major2025_2.length;
const otherImagesOffset = beachLoungeOffset + beachLoungeImages.length;

const allImages = major2025_1
    .concat(major2025_2)
    .concat(beachLoungeImages)
    .concat(images);

function Gallery() {
    const [openImage, setOpenImage] = useState<number | null>(null);

    const [isMobile, xPadding] = useIsMobile();

    return (
        <>
            <Card sx={{ margin: xPadding, marginTop: 10 }}>
                <Box>
                    <ImageList
                        variant="masonry"
                        gap={30}
                        cols={isMobile ? 1 : 5}
                    >
                        {major2025_1.concat(major2025_2).map((item, index) => (
                            <ImageListItem
                                key={item}
                                onClick={() => setOpenImage(index)}
                                sx={{ cursor: "zoom-in", margin: 1 }}
                            >
                                <img
                                    loading="lazy"
                                    width={200}
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
                <Box>
                    <ImageList
                        variant="woven"
                        gap={xPadding}
                        cols={isMobile ? 1 : 3}
                    >
                        {beachLoungeImages.map((item, index) => (
                            <ImageListItem
                                key={item}
                                onClick={() =>
                                    setOpenImage(index + beachLoungeOffset)
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
                                setOpenImage(index + otherImagesOffset)
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
                    src={allImages}
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
