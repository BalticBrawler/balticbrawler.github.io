import { Box, Card, Link, Typography } from "@mui/material";
import UrbanArtworkIcon from "/urban_artworx_logo.avif";
import WarfactorIcon from "/warfactor_logo.png";
import TableTopBasics from "/TableTopBasics.jfif";
import KutamiIcon from "/Kutami-SlimForMail_Web.png";
import TaschengeldDiebIcon from "/taschengelddieb.png";
import SafeAndSoundIcon from "/safeandsound.png";
import DaRedButtonIcon from "/da_red_button_logo.webp";
import MicroArtStudioIcon from "/microartstudio-logo.jpg";
import useIsMobile from "./hooks/useIsMobile";

function Sponsors() {
    const [, xPadding, topPadding] = useIsMobile();

    const sponsors = [
        {
            img: TableTopBasics,
            link: "https://tabletopbasics.de/",
            height: "200px",
        },
        {
            img: UrbanArtworkIcon,
            link: "https://urban-artworx.com/",
        },
        {
            img: WarfactorIcon,
            link: "https://warfactor.eu/",
        },
        {
            img: KutamiIcon,
            link: "https://www.kutami.de/",
        },
        {
            img: TaschengeldDiebIcon,
            link: "https://taschengelddieb.de/",
        },
        {
            img: SafeAndSoundIcon,
            link: "https://www.safeandsound.pl/en_GB/index",
            height: "200px",
        },
        {
            img: DaRedButtonIcon,
            link: "https://www.daredbutton.com/",
            height: "200px",
        },
        {
            img: MicroArtStudioIcon,
            link: "https://shop.microartstudio.com/en/",
        },
        {
            img: "",
            link: "",
        },
        {
            img: "",
            link: "",
        },
    ];

    return (
        <Card
            style={{
                marginLeft: xPadding * 4,
                marginRight: xPadding * 4,
                marginTop: topPadding,
            }}
        >
            <Typography variant="h4" fontWeight="bold" margin={4}>
                Sponsoren
            </Typography>
            <Box
                justifyContent="center"
                flex={1}
                alignContent="center"
                alignSelf="center"
                alignItems="center"
                display="flex"
                flexWrap="wrap"
            >
                {sponsors.map((x) => (
                    <Link m={1} href={x.link} target="_blank">
                        <img
                            src={x.img}
                            width={!x.height ? 200 : ""}
                            height={x.height}
                        ></img>
                    </Link>
                ))}
            </Box>
        </Card>
    );
}

export default Sponsors;
