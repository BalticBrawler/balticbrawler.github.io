import { CasinoOutlined } from "@mui/icons-material";
import { Box, colors, Button, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import bbImageWhite from "/Logo_white.png";

function MainPage() {
    const navigate = useNavigate();

    const menuItems = [
        // { icon: <Home />, title: "Start", page: "home" },
        // { icon: <Home />, title: "Test", page: "test" },
        // { icon: <Home />, title: "Start", page: "start" },
        {
            icon: <CasinoOutlined />,
            title: "Turnier",
            page: "turnier",
        },
    ];

    const iconHeaderWidth = 50;
    return (
        <Box display="flex" flexGrow={1} flexDirection="column">
            <Box
                display="flex"
                flexDirection="row"
                flex={1}
                alignItems="center"
                justifyContent="space-around"
                bgcolor={colors.blueGrey[800]}
                role="presentation"
            >
                {/* <LogoIcon sx={{ fontSize: 100, color: "#FFFFFF" }} /> */}
                <img src={bbImageWhite} width={iconHeaderWidth} />

                {menuItems.map((item) => (
                    <Button onClick={() => navigate("/" + item.page)}>
                        <Box
                            flexDirection="row"
                            display="flex"
                            alignItems="center"
                        >
                            {item.icon}
                            <Typography m={1}>{item.title}</Typography>
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
                <img src={bbImageWhite} width={iconHeaderWidth} />

                {/* <Divider color={colors.grey[50]} /> */}
            </Box>

            <Box display="flex" flexGrow={1}>
                <Outlet />
            </Box>
        </Box>
    );
}

export default MainPage;
