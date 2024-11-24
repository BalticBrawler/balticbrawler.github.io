function LazyImage(props: { src: string; width?: number | string }) {
    return (
        <img src={props.src} style={{ maxWidth: props.width ?? "100%" }}></img>
    );
}

export default LazyImage;
