import {
    CssBaseline,
    ThemeProvider,
    Typography,
    colors,
    createTheme,
} from "@mui/material";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage from "./StartPage";
import MainPage from "./MainPage";
import Tournaments from "./Tournaments";
import Sponsors from "./Sponsors";

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
                    path: "/start",
                    element: <StartPage />,
                },
                {
                    path: "/turnier",
                    element: <Tournaments />,
                },
                {
                    path: "/sponsoren",
                    element: <Sponsors />,
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
    });

    return (
        <ThemeProvider theme={themeDark}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;

