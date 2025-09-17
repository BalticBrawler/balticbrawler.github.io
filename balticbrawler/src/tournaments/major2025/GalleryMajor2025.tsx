import { Box, Card, Modal } from "@mui/material";
import ImageList from "@mui/material/ImageList/ImageList";
import ImageListItem from "@mui/material/ImageListItem/ImageListItem";
import { useState } from "react";
import ReactSimpleImageViewer from "react-simple-image-viewer";
import useIsMobile from "../../hooks/useIsMobile";

const major2025_1 = [...Array(35).keys()].map(
    (i) => `./BeachClash/Major2025/BeachClashMajor2025_Tag1_${i + 1}.jpg`
);
const major2025_2 = [...Array(21).keys()].map(
    (i) => `./BeachClash/Major2025/BeachClashMajor2025_Tag2_${i + 1}.jpg`
);
const siegerehrung = [...Array(4).keys()].map(
    (i) => `./BeachClash/Major2025/Siegerehrung_${i + 1}.jpg`
);

const allImages = major2025_1.concat(major2025_2).concat(siegerehrung);

function GalleryMajor2025() {
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
                    <ImageList gap={30} cols={siegerehrung.length}>
                        {siegerehrung.map((item, index) => (
                            <ImageListItem
                                key={item}
                                onClick={() =>
                                    setOpenImage(
                                        index +
                                            major2025_1.length +
                                            major2025_2.length
                                    )
                                }
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
            <Modal open={openImage !== null}>
                <ReactSimpleImageViewer
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

export default GalleryMajor2025;
