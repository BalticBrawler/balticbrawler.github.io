import {
    Box,
    CssBaseline,
    Modal,
    ThemeProvider,
    Typography,
    colors,
    createTheme,
} from "@mui/material";

import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import MainPage from "./MainPage";
import Major2025 from "./tournaments/major1/Major2025";
import Sponsors from "./Sponsors";
import News from "./News";
import Impressum from "./Impressum";
import Location from "./Location";
import gtImages from "./data/gtImages";

import "./App.css";
import { useAtom } from "jotai";
import zoomImageAtom from "./hooks/atoms";
import { RESET } from "jotai/utils";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import RTT2025 from "./tournaments/rtt1/RTT2025";
import RTT2025_2 from "./tournaments/rtt2/RTT2025_2";
import Major2025_RulesPack from "./tournaments/major1/Major2025_RulesPack";
import RTT1_RulesPack from "./tournaments/rtt1/RulesPack";
import RTT2_RulesPack from "./tournaments/rtt2/RulesPack";
import GalleryMajor2025 from "./tournaments/major1/GalleryMajor2025";
import GalleryRtt2025 from "./tournaments/rtt1/GalleryRtt2025";
import GalleryBeachLounge from "./GalleryBeachLounge";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
            children: [
                {
                    path: "/",
                    element: <Navigate to="/rtt2025_2" replace />,
                },
                {
                    path: "/home",
                    element: <Typography>Home</Typography>,
                },
                {
                    path: "/news",
                    element: <News />,
                },
                {
                    path: "/major2025",
                    element: <Major2025 />,
                },
                {
                    path: "/rtt2025",
                    element: <RTT2025 />,
                },
                {
                    path: "/rtt2025_2",
                    element: <RTT2025_2 />,
                },
                {
                    path: "/beachlounge",
                    element: <GalleryBeachLounge />,
                },
                {
                    path: "/gallerymajor2025",
                    element: <GalleryMajor2025 />,
                },
                {
                    path: "/galleryrtt2025",
                    element: <GalleryRtt2025 />,
                },
                {
                    path: "/rulespackgt1",
                    element: <Major2025_RulesPack />,
                },
                {
                    path: "/rulespackrtt2",
                    element: <RTT2_RulesPack />,
                },
                {
                    path: "/rulespackrtt1",
                    element: <RTT1_RulesPack />,
                },
                {
                    path: "/location",
                    element: <Location images={gtImages} />,
                },
                {
                    path: "/sponsoren",
                    element: <Sponsors />,
                },
                {
                    path: "/impressum",
                    element: <Impressum />,
                },
            ],
        },
    ]);

    const themeDark = createTheme({
        palette: {
            background: {
                default: colors.blueGrey[900],
            },
            text: {
                primary: "#ffffff",
            },
            primary: {
                main: colors.green[200],
            },
        },
        components: {
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#333333DD",
                    },
                },
            },

            MuiAccordionSummary: {
                styleOverrides: {
                    root: {
                        justifyContent: "center",
                    },
                    content: {
                        justifyContent: "center",
                    },
                },
            },

            MuiDialogContent: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#333333FF",
                    },
                },
            },
            MuiDialogActions: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#333333FF",
                    },
                },
            },
            MuiDialogTitle: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#333333FF",
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        margin: 1,
                        backgroundColor: "#333333DD",
                    },
                },
                defaultProps: {
                    variant: "outlined",
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        textAlign: "center",
                    },
                },
            },
            MuiPopover: {
                styleOverrides: {
                    paper: {
                        background: "#333333FF",
                    },
                },
            },
            MuiPopper: {
                styleOverrides: {
                    root: {
                        background: "#33333300",
                    },
                },
            },
        },
    });

    const [zoomImage, setZoomImage] = useAtom(zoomImageAtom);

    return (
        <ThemeProvider theme={themeDark}>
            <CssBaseline />
            <RouterProvider router={router} />

            <Modal
                open={!!zoomImage}
                onClose={() => setZoomImage(RESET)}
                sx={{ overflow: "scroll" }}
            >
                <Box
                    width="100%"
                    height="100%"
                    alignContent="center"
                    justifyItems="center"
                >
                    <TransformWrapper
                        minScale={0.5}
                        maxScale={5}
                        wheel={{ step: 80 }}
                        doubleClick={{ disabled: false }}
                        centerOnInit
                    >
                        <TransformComponent
                            wrapperStyle={{ width: "100%", height: "100%" }}
                            contentStyle={{
                                width: "fit-content",
                                height: "fit-content",
                            }}
                        >
                            <img src={zoomImage} width="100%" />
                        </TransformComponent>
                    </TransformWrapper>
                </Box>
            </Modal>
        </ThemeProvider>
    );
}

export default App;
