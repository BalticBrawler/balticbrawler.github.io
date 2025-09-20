import { Box, Link, Typography } from "@mui/material";
import { ReactNode } from "react";
import RulesPackList from "../../components/RulesPackList";
import BeachClashMajor_2025_Map from "/BeachClashMajor_2025_Map.png";
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
                            Möwenbräu (Baltic Festsaal)
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
                        Es wird an beiden Tagen ein tolles Buffet geben.
                    </Typography>
                    <Typography>
                        Partner und Familienangehörige dürfen gegen Aufpreis am
                        Buffet teilnehmen. Kontaktiert uns dafür aber bitte
                        rechtzeitig (bis 04.07.25), damit wir uns mit der Küche
                        abstimmen können.
                    </Typography>
                    <Typography>
                        In der Pause von 16:45-17:15Uhr (Tag 1) servieren wir
                        euch frische Waffeln.
                    </Typography>

                    <Box justifySelf="flex-start" mt={1}>
                        <Link
                            justifySelf="center"
                            href="/Speiseplan_BeachClashMajor_2025.pdf"
                        >
                            <img
                                width="100%"
                                src="/Speiseplan_BeachClashMajor_2025.png"
                                style={{ maxWidth: 500 }}
                            />
                        </Link>
                    </Box>
                </>
            ),
        },
    ];

    return (
        <>
            <ZoomableImage img={BeachClashMajor_2025_Map} />
            <RulesPackList id="essen" tableContent={roomAndFoodContent} />
        </>
    );
}

export default FurtherInfo;
