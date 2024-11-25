import { Box, Card, Link, Typography } from "@mui/material";
import UrbanArtworkIcon from "/urban_artworx_logo.avif";
import WarfactorIcon from "/warfactor_logo.png";
import TableTopBasics from "/TableTopBasics.jfif";
import KutamiIcon from "/Kutami-SlimForMail_Web.png";
import TaschengeldDiebIcon from "/taschengelddieb.png";
import SafeAndSoundIcon from "/safeandsound.png";
import DaRedButtonIcon from "/da_red_button_logo.webp";
import MicroArtStudioIcon from "/microartstudio-logo.jpg";
import MontanaCansIcon from "/MontanaCansLogo.svg";
import BattlegroundTableTopIcon from "/battleground-tabletop.png";
import GameMatEuIcon from "/Gamemat_eu_logo.svg";
import useIsMobile from "./hooks/useIsMobile";

function Sponsors() {
    const [, xPadding, topPadding] = useIsMobile();

    const sponsors1 = [
        {
            img: TableTopBasics,
            link: "https://tabletopbasics.de/",
            height: "200px",
        },
        {
            img: SafeAndSoundIcon,
            link: "https://www.safeandsound.pl/en_GB/index",
            height: "200px",
            translation: 25,
        },
        {
            img: DaRedButtonIcon,
            link: "https://www.daredbutton.com/",
            height: "200px",
            translation: -20,
        },
    ];
    const sponsors2 = [
        {
            img: UrbanArtworkIcon,
            link: "https://urban-artworx.com/",
            background: "white",
            small: true,
        },
        {
            img: WarfactorIcon,
            link: "https://warfactor.eu/",
            background: "white",
            small: true,
        },
        {
            img: KutamiIcon,
            link: "https://www.kutami.de/",
            background: "white",
            small: true,
        },
        {
            img: TaschengeldDiebIcon,
            link: "https://taschengelddieb.de/",
            background: "white",
            small: true,
        },
        {
            img: MicroArtStudioIcon,
            link: "https://shop.microartstudio.com/en/",
            background: "white",
            small: true,
        },
        {
            img: BattlegroundTableTopIcon,
            link: "https://www.battleground-tabletop.de/",
            background: "white",
            small: true,
        },
        {
            img: MontanaCansIcon,
            link: "https://www.montana-cans.com/de/",
            background: "white",
            small: true,
        },
        {
            img: GameMatEuIcon,
            link: "https://www.gamemat.eu/?lang=1&cur=1",
            background: "white",
            small: true,
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
                {/* <Grid
                container
                spacing={2}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            > */}
                {sponsors1.map((x) => (
                    // <Grid item xs={3} sx={{ background: "" }}>
                    <Link m={1} href={x.link} target="_blank">
                        <Box
                            justifyContent="center"
                            justifyItems="center"
                            alignItems="center"
                            padding={1}
                        >
                            <img
                                src={x.img}
                                // width={!x.height ? 200 : ""}
                                // height={x.height}
                                width={200}
                                // style={{ marginLeft: x.translation }}
                            ></img>
                        </Box>
                    </Link>
                    // </Grid>
                ))}
            </Box>
            <Box
                justifyContent="center"
                flex={1}
                alignContent="center"
                alignSelf="center"
                alignItems="center"
                display="flex"
                flexWrap="wrap"
            >
                {sponsors2.map((x) => (
                    // <Grid item xs={3} sx={{ background: "" }}>
                    <Link m={1} href={x.link} target="_blank">
                        <Box
                            justifyContent="center"
                            justifyItems="center"
                            alignItems="center"
                            sx={{ background: x.background }}
                            height={x.small ? 85 : undefined}
                            display="flex"
                            padding={1}
                        >
                            <img
                                src={x.img}
                                // width={!x.height ? 200 : ""}
                                // height={x.height}
                                width={200}
                                // style={{ marginLeft: x.translation }}
                            ></img>
                        </Box>
                    </Link>
                    // </Grid>
                ))}
            </Box>
            {/* </Grid> */}
        </Card>
    );
}

export default Sponsors;
