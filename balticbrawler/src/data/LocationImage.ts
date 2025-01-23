interface LocationImage {
    title: string;
    images: {
        src: string;
        maxWidth?: string;
    }[];
    description?:string;
}

export default LocationImage;