import { ArrowDropDown, Close, Instagram } from "@mui/icons-material";
import {
    AppBar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    Divider,
    IconButton,
    Link,
    SwipeableDrawer,
    Typography,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import bbImageWhite from "/beach_clash.svg";
import backgroundImage from "/Orks_background.png";
import backgroundLogo from "/beach_clash.svg";
import { useState } from "react";
import useIsMobile from "./hooks/useIsMobile";

function MainPage() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [isMobile] = useIsMobile();

    const menuItems = [
        // { icon: <Home />, title: "Start", page: "home" },
        // { icon: <Home />, title: "Test", page: "test" },
        // { icon: <Home />, title: "Start", page: "start" },
        {
            title: "News",
            page: "news",
        },
        {
            title: "Beach Clash",
            page: "turnier",
        },
        {
            title: "Rules Pack",
            // page: "rulespack",
            link: "https://docs.google.com/document/d/1SCjZPIsNNzeeONwtyJw7lgZC4_8Sopr3/edit?usp=drive_link&ouid=101976672733285031757&rtpof=true&sd=true",
        },
        {
            // icon: < />,
            title: "Location",
            page: "location",
            link: "",
            // link: "https://www.weissenhaeuserstrand.de/tagungshotel-ostsee/tagungsraeume-strandhotel/",
        },
        {
            // icon: < />,
            title: "Sponsoren",
            page: "sponsoren",
        },
    ];

    const iconHeaderWidth = 50;
    return (
        <Box
            display="flex"
            flexGrow={1}
            flexDirection="column"
            minHeight="100vh"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "stretch",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
            }}
        >
            <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                // container={container}
                variant="temporary"
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                PaperProps={{
                    sx: {
                        background: "#37474f99",
                        // backgroundColor: "#37474f99",
                    },
                }}
                // sx={{
                //     display: { xs: "block", sm: "none" },
                //     "& .MuiDrawer-paper": {
                //         boxSizing: "border-box",
                //         width: 100,
                //     },
                // }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    sx={{
                        p: 2,
                        height: 1,
                        // backgroundColor: "",
                    }}
                >
                    <IconButton sx={{ mb: 1 }} onClick={() => setOpen(false)}>
                        <Close color="primary" />
                    </IconButton>

                    <Divider sx={{ mb: 2 }} />

                    {menuItems.map((item) => (
                        <Button
                            onClick={() => {
                                if (item.page) {
                                    navigate("/" + item.page);
                                } else if (item.link) {
                                    window.open(item.link);
                                }
                                setOpen(false);
                            }}
                        >
                            <Box
                                width={200}
                                flexDirection="row"
                                display="flex"
                                alignItems="center"
                            >
                                <Typography m={1}>{item.title}</Typography>
                            </Box>
                        </Button>
                    ))}
                </Box>
            </SwipeableDrawer>
            <Box>
                <AppBar
                    style={{
                        background: "#37474f99",
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        flex={1}
                        flexGrow={0}
                        alignItems="center"
                        justifyContent="space-around"
                        role="presentation"
                    >
                        {/* <LogoIcon sx={{ fontSize: 100, color: "#FFFFFF" }} /> */}
                        <img
                            src={bbImageWhite}
                            width={iconHeaderWidth}
                            style={{
                                marginLeft: 12,
                                marginRight: 12,
                            }}
                        />

                        <Box flexGrow={1}>
                            <Box
                                display="flex"
                                flexDirection="row"
                                flexWrap="revert"
                                justifyContent="center"
                            >
                                {menuItems
                                    .filter(
                                        (x) =>
                                            !isMobile ||
                                            (window.location.pathname === "/" &&
                                                x.page === "turnier") ||
                                            window.location.pathname ===
                                                "/" + x.page
                                    )
                                    .map((item) => (
                                        <Button
                                            onClick={() => {
                                                if (isMobile) {
                                                    setOpen(true);
                                                    return;
                                                }
                                                if (item.page) {
                                                    navigate("/" + item.page);
                                                } else if (item.link) {
                                                    window.open(item.link);
                                                }
                                                setOpen(false);
                                            }}
                                        >
                                            <Box
                                                flexDirection="row"
                                                display="flex"
                                                alignItems="center"
                                            >
                                                <Typography m={1}>
                                                    {item.title}
                                                </Typography>
                                                {isMobile && (
                                                    <ArrowDropDown></ArrowDropDown>
                                                )}
                                            </Box>
                                        </Button>

                                        // <ListItem key={item.title} disablePadding>
                                        //     <ListItemButton
                                        //         onClick={() => navigate("/" + item.page)}
                                        //     >
                                        //         <ListItemIcon>{item.icon}</ListItemIcon>
                                        //         <ListItemText primary={item.title} />
                                        //     </ListItemButton>
                                        // </ListItem>
                                    ))}
                            </Box>
                        </Box>
                        <img
                            src={bbImageWhite}
                            width={iconHeaderWidth}
                            style={{
                                marginLeft: 12,
                                marginRight: 12,
                            }}
                        />

                        {/* <Divider color={colors.grey[50]} /> */}
                    </Box>
                </AppBar>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                flexGrow={1}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "stretch",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <Box
                    display="flex"
                    flexGrow={1}
                    flexDirection="column"
                    paddingTop="50px"
                    paddingX={0}
                    style={{
                        backgroundImage: `url(${backgroundLogo})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize:
                            window.visualViewport!.height <
                            window.visualViewport!.width
                                ? window.visualViewport?.height
                                : window.visualViewport?.width,
                        backgroundAttachment: "fixed",
                    }}
                >
                    <Card style={{ flexGrow: 0 }}>
                        <CardActionArea
                            href="https://www.instagram.com/baltic_brawlerhl/"
                            sx={{
                                flexGrow: 1,
                                flexDirection: "column",
                                alignItems: "stretch",
                            }}
                        >
                            <CardContent
                                style={{
                                    padding: 0,
                                    justifyItems: "center",
                                }}
                            >
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    alignContent="center"
                                    justifyItems="center"
                                    alignItems="center"
                                    alignSelf="center"
                                >
                                    <Button href="https://www.instagram.com/baltic_brawlerhl/">
                                        <Instagram />
                                    </Button>
                                    <Typography>
                                        Folgt uns auch auf Instagram
                                    </Typography>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Outlet />
                </Box>
                <Box ml={10}>
                    <Button
                        variant="text"
                        onClick={() => navigate("impressum")}
                    >
                        <Link>Impressum</Link>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default MainPage;
