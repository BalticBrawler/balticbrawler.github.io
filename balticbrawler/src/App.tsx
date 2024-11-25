import {
    CssBaseline,
    ThemeProvider,
    Typography,
    colors,
    createTheme,
} from "@mui/material";

import {
    RouterProvider,
    createBrowserRouter,
    redirectDocument,
} from "react-router-dom";
import MainPage from "./MainPage";
import Tournaments from "./Tournaments";
import Sponsors from "./Sponsors";
import News from "./News";
import Impressum from "./Impressum";
import Location from "./Location";

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
                    path: "/rulespack",
                    element: <Tournaments />,
                    loader: async () =>
                        redirectDocument(
                            "https://docs.google.com/document/d/1SCjZPIsNNzeeONwtyJw7lgZC4_8Sopr3/edit?usp=drive_link&ouid=101976672733285031757&rtpof=true&sd=true"
                        ),
                },
                {
                    path: "/location",
                    element: <Location />,
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
            MuiCard: {
                styleOverrides: {
                    root: {
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        margin: 1,
                        backgroundColor: "#333333BB",
                    },
                },
                defaultProps: {
                    variant: "outlined",
                },
            },
        },
    });

    return (
        <ThemeProvider theme={themeDark}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
