import { Box, Card } from "@mui/material";
import MapLayouts from "./tournaments/major2025/components/MapLayouts";
import useIsMobile from "./hooks/useIsMobile";

function Tnt() {
    const [, xPadding, topMargin] = useIsMobile();
    const maps = [
        {
            mission: "Crucible of Battle - Scorched Earth",
            map: "/tntMaps/tnt_1.png",
        },
        {
            mission: "Crucible of Battle - Scorched Earth",
            map: "/tntMaps/tnt_2.png",
        },
        {
            mission: "Crucible of Battle - Scorched Earth",
            map: "/tntMaps/tnt_3.png",
        },
        {
            mission: "Crucible of Battle - Scorched Earth",
            map: "/tntMaps/tnt_4.png",
        },
        {
            mission: "Crucible of Battle - Scorched Earth",
            map: "/tntMaps/tnt_5.png",
        },
    ];

    return (
        <Box
            display="flex"
            mt={topMargin}
            mx="auto"
            px={xPadding}
            width="100%"
            flexDirection="column"
            maxWidth={1600}
            alignSelf="stretch"
            justifySelf="center"
        >
            <Card>
                <Box maxWidth={900} mx="auto">
                    <MapLayouts maps={maps} prefix="Map" />;
                </Box>
            </Card>
        </Box>
    );
}

export default Tnt;
