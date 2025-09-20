import { Typography } from "@mui/material";
import MapLayouts from "../../components/MapLayouts";

function Layouts() {
    const maps = [
        {
            mission: "Hammer and Anvil - Linchpin",
            map: "/Layouts/Layout1.jpg",
        },
        {
            mission: "Search and Destroy - Scorched Earth",
            map: "/Layouts/Layout2.jpg",
        },
        {
            mission: "Crucible of Battle - Terraform",
            map: "/Layouts/Layout3.jpg",
        },
        {
            mission: "Hammer and Anvil - Hidden Supplies",
            map: "/Layouts/Layout4.jpg",
        },
        {
            mission: "Tipping Point - Take and hold",
            map: "/Layouts/Layout5.jpg",
        },
    ];

    return (
        <>
            <Typography variant="h3" justifySelf="center" alignSelf="center">
                Folgt...
            </Typography>
            {false && <MapLayouts maps={maps} />}
        </>
    );
}

export default Layouts;
