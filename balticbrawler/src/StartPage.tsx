import Box from "@mui/material/Box";
import viteLogo from "/BB_logo.jpeg";

function StartPage() {
    return (
        <Box
            display="flex"
            flex={1}
            flexGrow={1}
            flexDirection="column"
            alignItems="center"
        >
            <h2>Hier entsteht die Seite der Baltic Brawler</h2>
            <img src={viteLogo} height={300} />
        </Box>
    );
}

export default StartPage;
