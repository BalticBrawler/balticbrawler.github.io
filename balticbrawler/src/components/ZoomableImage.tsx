import { Modal, Box } from "@mui/material";
import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function ZoomableImage(props: { img: string }) {
    const [zoom, setZoom] = useState(false);

    return (
        <>
            <Box
                justifySelf="center"
                sx={{ cursor: "zoom-in" }}
                onClick={() => setZoom(true)}
            >
                <img src={props.img} width="100%" />
            </Box>
            <Modal
                open={zoom}
                onClose={() => setZoom(false)}
                sx={{ overflow: "scroll" }}
            >
                <Box
                    width="100%"
                    height="100%"
                    alignContent="center"
                    justifyItems="center"
                >
                    <TransformWrapper
                        minScale={1}
                        maxScale={4}
                        wheel={{ step: 80 }}
                        doubleClick={{ disabled: false }}
                    >
                        <TransformComponent>
                            <img src={props.img} width="100%" />
                        </TransformComponent>
                    </TransformWrapper>
                </Box>
            </Modal>
        </>
    );
}

export default ZoomableImage;
