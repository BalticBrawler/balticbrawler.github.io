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
                    <Typography>
                        Parken könnt ihr auf allen Parkplätzen des Geländes, wir
                        empfehlen euch allerdings die rot eingekreisten
                        Parkplätze zu nutzen.
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
                        Es wird für euch ein tolles Buffet geben.
                    </Typography>
                    <Typography>
                        Partner und Familienangehörige dürfen gegen Aufpreis am
                        Buffet teilnehmen. Kontaktiert uns dafür aber bitte
                        rechtzeitig (bis 18.10.25), damit wir uns mit der Küche
                        abstimmen können.
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
