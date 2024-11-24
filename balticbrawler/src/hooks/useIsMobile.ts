import { useEffect, useState } from "react";

function useIsMobile(){
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [xPadding, setXPadding] = useState<number>(10);
    const [topPadding, setTopPadding] = useState<string>("52px");
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        setIsMobile(width <= 768 ? true : false)
    }, [width])

    useEffect(() => {
        setTopPadding("52px")
        setXPadding(isMobile ? 4 : 10)
    }, [isMobile])

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);


    return [isMobile, xPadding, topPadding] as [boolean, number, string | number]
}

export default useIsMobile;