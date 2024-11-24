import { Box, Button, Card, Typography } from "@mui/material";
import useIsMobile from "./hooks/useIsMobile";

function Impressum() {
    const [, xPadding, topPadding] = useIsMobile();
    return (
        <Box justifyContent="end" mx={xPadding} mt={topPadding}>
            <Card>
                <Box display="flex" flexDirection="column" m={2}>
                    <Typography display="block" variant="h5">
                        Impressum:
                    </Typography>
                    <Typography display="block" my={1}>
                        Baltic Brawler
                    </Typography>
                    <Typography display="block">Mirco Kähler</Typography>
                    <Typography display="block">Egon-Nickel-Str. 5</Typography>
                    <Typography display="block">23560 Lübeck</Typography>
                    <Button variant="text" href="mailto:BeachClashwh40k@web.de">
                        BeachClashwh40k@web.de
                    </Button>
                </Box>
            </Card>
        </Box>
    );
}

export default Impressum;
