import {
    Box,
    CssBaseline,
    Modal,
    ThemeProvider,
    Typography,
    colors,
    createTheme,
} from "@mui/material";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import Tournaments from "./Tournaments";
import Sponsors from "./Sponsors";
import News from "./News";
import Impressum from "./Impressum";
import Location from "./Location";
import Gallery from "./Gallery";
import gtImages from "./data/gtImages";
import RulesPack from "./RulesPack";

import "./App.css";
import { useAtom } from "jotai";
import zoomImageAtom from "./hooks/atoms";
import { RESET } from "jotai/utils";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Tnt from "./Tnt";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
            children: [
                {
                    path: "/",
                    element: <Tournaments />,
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
                    path: "/turnier",
                    element: <Tournaments />,
                },
                {
                    path: "/gallery",
                    element: <Gallery />,
                },
                {
                    path: "/rulespack",
                    element: <RulesPack />,
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
                {
                    path: "/tnt",
                    element: <Tnt />,
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
