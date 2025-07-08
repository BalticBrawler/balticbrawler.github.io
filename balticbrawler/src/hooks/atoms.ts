import { atomWithHash } from "jotai-location";

const zoomImageAtom = atomWithHash<string>("zoomImage", "", {
                setHash: "default",
                deserialize: (x) => x,
                serialize: (x) => x,
            });

export default zoomImageAtom;
    