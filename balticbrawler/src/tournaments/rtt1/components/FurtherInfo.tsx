import { Typography } from "@mui/material";
import { ReactNode } from "react";
import RulesPackList from "../../components/RulesPackList";
import BeachClash_202501_Map from "/BeachClash_202501_Map.png";
import ZoomableImage from "../../components/ZoomableImage";

function FurtherInfo() {
    const roomAndFoodContent: {
        header: string;
        value: ReactNode;
        footer?: ReactNode;
    }[] = [
        {
            header: "Wegbeschreibung",
            value: (
                <>
                    <Typography>
                        Das Turnier findet im{" "}
                        <Typography display="inline" fontWeight="bold">
                            Tagungszentrum (Raum Schleswig-Holstein)
                        </Typography>{" "}
                        statt.
                    </Typography>
                    <Typography fontWeight="bold">
                        Nutzt am besten die Einfahrt G!
                    </Typography>
                </>
            ),
        },
        {
            header: "Parken",
            value: (
                <>
                    <Typography>
                        Das Parken ist für euch kostenlos, ihr bekommt vor Ort
                        ein Parkticket.
                    </Typography>
                </>
            ),
        },
        {
            header: "Getränke",
            value: (
                <>
                    <Typography>
                        Eine Kaffee-/Wasser Flatrate ist inklusive.{" "}
                    </Typography>
                    <Typography>
                        Weitere Getränke können vor Ort erworben werden.
                    </Typography>
                </>
            ),
        },
        {
            header: "Verpflegung",
            value: (
                <>
                    <Typography maxWidth={500}>
                        Ein Mittagessen (wählbar aus 3 tollen Gerichten) ist
                        inklusive.
                    </Typography>
                    <Typography>
                        Gegessen wird im Restaurant Sonnenrose (ca. 50m
                        entfernt).
                    </Typography>
                </>
            ),
        },
    ];

    return (
        <>
            <ZoomableImage img={BeachClash_202501_Map} />
            <RulesPackList id="essen" tableContent={roomAndFoodContent} />
        </>
    );
}

export default FurtherInfo;
