import { Box } from "@mui/material";
import { useAtom } from "jotai";
import zoomImageAtom from "../hooks/atoms";

function ZoomableImage(props: { img: string }) {
    const [, setZoomImage] = useAtom(zoomImageAtom);

    return (
        <>
            <Box
                justifySelf="center"
                sx={{ cursor: "zoom-in" }}
                onClick={() => setZoomImage(props.img)}
            >
                <img src={props.img} width="100%" />
            </Box>
        </>
    );
}

export default ZoomableImage;
