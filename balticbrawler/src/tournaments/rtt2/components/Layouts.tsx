import MapLayouts from "../../components/MapLayouts";

function Layouts() {
    const maps = [
        {
            mission: "Tipping Point - Take and Hold",
            map: "/Layouts/2510RTT/Layout1.png",
        },
        {
            mission: "Crucible of Battle - Terraform",
            map: "/Layouts/2510RTT/Layout2.png",
        },
        {
            mission: "Search and Destroy - Scortched Earth",
            map: "/Layouts/2510RTT/Layout3.png",
        },
    ];

    return <MapLayouts maps={maps} />;
}

export default Layouts;
