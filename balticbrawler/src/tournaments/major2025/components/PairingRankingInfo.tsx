import { ReactNode } from "react";
import RulesPackList from "./RulesPackList";
import { Typography } from "@mui/material";

function PairingRankingInfo() {
    const tableContents: { header: string; value: ReactNode }[] = [
        {
            header: "Pairings",
            value: (
                <>
                    <Typography>Spiel 1 wird zufällig gepaart.</Typography>
                    <Typography>
                        Ab Spiel 2 wird Random in den Brackets gepaart.
                    </Typography>
                </>
            ),
        },
        {
            header: "Platzierungen",
            value: "Ranking nach SUN/20:0 Pkt/Wins SoS/Battle Points SoS.",
        },
    ];
    return <RulesPackList tableContent={tableContents}></RulesPackList>;
}

export default PairingRankingInfo;
