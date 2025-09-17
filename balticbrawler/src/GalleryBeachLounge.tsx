import { Box, Card, Modal } from "@mui/material";
import ImageList from "@mui/material/ImageList/ImageList";
import ImageListItem from "@mui/material/ImageListItem/ImageListItem";
import { useState } from "react";
import ReactSimpleImageViewer from "react-simple-image-viewer";
import useIsMobile from "./hooks/useIsMobile";

const beachLoungeImages = [...Array(13).keys()].map(
    (i) => `./BeachClash/BeachLounge/BeachLounge${i + 1}.jpg`
);

function GalleryBeachLounge() {
    const [openImage, setOpenImage] = useState<number | null>(null);

    const [isMobile, xPadding] = useIsMobile();

    return (
        <>
            <Card sx={{ margin: xPadding, marginTop: 10 }}>
                <Box>
                    <ImageList
                        variant="woven"
                        gap={xPadding}
                        cols={isMobile ? 1 : 5}
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
            <Modal open={openImage !== null}>
                <ReactSimpleImageViewer
                    src={beachLoungeImages}
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

export default GalleryBeachLounge;
