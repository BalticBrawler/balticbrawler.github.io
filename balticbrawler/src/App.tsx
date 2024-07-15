import viteLogo from "/BB_logo.jpeg";
import "./App.css";
import Container from "@mui/material/Container";
import { CssBaseline, ThemeProvider, colors, createTheme } from "@mui/material";

function App() {
    const themeDark = createTheme({
        palette: {
            background: {
                default: colors.blueGrey[900],
            },
            text: {
                primary: "#ffffff",
            },
        },
    });

    return (
        <ThemeProvider theme={themeDark}>
            <CssBaseline />
            <Container>
                <h2>Hier entsteht die Seite der Baltic Brawler</h2>
                <img src={viteLogo} height={300} />
            </Container>
        </ThemeProvider>
    );
}

export default App;

