import MapLayouts from "../../components/MapLayouts";

function MajorLayouts() {
    const maps = [
        {
            mission: "Hammer and Anvil - Linchpin",
            map: "/Layouts/2507GT/Layout1.jpg",
        },
        {
            mission: "Search and Destroy - Scorched Earth",
            map: "/Layouts/2507GT/Layout2.jpg",
        },
        {
            mission: "Crucible of Battle - Terraform",
            map: "/Layouts/2507GT/Layout3.jpg",
        },
        {
            mission: "Hammer and Anvil - Hidden Supplies",
            map: "/Layouts/2507GT/Layout4.jpg",
        },
        {
            mission: "Tipping Point - Take and hold",
            map: "/Layouts/2507GT/Layout5.jpg",
        },
    ];

    return <MapLayouts maps={maps} />;
}

export default MajorLayouts;
