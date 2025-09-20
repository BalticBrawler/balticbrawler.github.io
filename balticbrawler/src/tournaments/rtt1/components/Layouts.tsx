import MapLayouts from "../../components/MapLayouts";

function Layouts() {
    const maps = [
        {
            mission: "Hammer and Anvil - Take and Hold - Raise Banner",
            map: "/Layouts/2501RTT/Layout1.png",
        },
        {
            mission: "Search and Destroy – Scortched Earth – Swift Action",
            map: "/Layouts/2501RTT/Layout2.png",
        },
        {
            mission: "Crucible of Battle – Linchpin – Stalwars",
            map: "/Layouts/2501RTT/Layout3.png",
        },
    ];

    return (
        <>
            <MapLayouts maps={maps} />
        </>
    );
}

export default Layouts;
