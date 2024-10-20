import { CasinoOutlined, Close, Menu } from "@mui/icons-material";
import {
    AppBar,
    Box,
    Button,
    Divider,
    IconButton,
    SwipeableDrawer,
    Typography,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import bbImageWhite from "/Logo_white.png";
import backgroundImage from "/Orks_background.png";
import { useEffect, useState } from "react";

function MainPage() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    const isMobile = width <= 768;

    const menuItems = [
        // { icon: <Home />, title: "Start", page: "home" },
        // { icon: <Home />, title: "Test", page: "test" },
        // { icon: <Home />, title: "Start", page: "start" },
        {
            icon: <CasinoOutlined />,
            title: "Beach Clash",
            page: "turnier",
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
                                navigate("/" + item.page);
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
                        <img src={bbImageWhite} width={iconHeaderWidth} />

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
                                            window.location.pathname ==
                                                "/" + x.page
                                    )
                                    .map((item) => (
                                        <Button
                                            onClick={() => {
                                                if (isMobile) {
                                                    setOpen(true);
                                                    return;
                                                }
                                                navigate("/" + item.page);
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
                        <img src={bbImageWhite} width={iconHeaderWidth} />

                        {isMobile && (
                            <IconButton
                                sx={{ mx: 1 }}
                                edge="start"
                                color="primary"
                                onClick={() => setOpen(true)}
                            >
                                <Menu />
                            </IconButton>
                        )}
                        {/* <Divider color={colors.grey[50]} /> */}
                    </Box>
                </AppBar>
            </Box>
            <Box
                display="flex"
                flexGrow={1}
                paddingTop={10}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "stretch",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
}

export default MainPage;
