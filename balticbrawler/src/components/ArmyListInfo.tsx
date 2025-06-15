import { ReactNode } from "react";
import RulesPackList from "./RulesPackList";
import { Link, Typography } from "@mui/material";

function ArmyListInfo() {
    const tableContent: { header: string; value: ReactNode }[] = [
        {
            header: "Format",
            value: (
                <Typography>
                    Die Listen müssen über{" "}
                    <Link href="https://www.newrecruit.eu/">Newrecruit</Link>{" "}
                    oder der Warhammer 40K App erstellt werden.
                </Typography>
            ),
        },
        {
            header: "Listenabgabe",
            value: (
                <Typography>
                    Stellt eure Listen bitte bei{" "}
                    <Link href="https://www.bestcoastpairings.com/event/U1ApR1JWIpci?active_tab=overview">
                        BCP
                    </Link>{" "}
                    bis zur Deadline (s.o.) ein.
                </Typography>
            ),
        },
        {
            header: "Listenkontrolle",
            value: "Die Listenkontrolle übernimmt die Orga.",
        },
        {
            header: "Befestigungen",
            value: "Befestigungen sind nicht erlaubt.",
        },
    ];

    return <RulesPackList tableContent={tableContent} />;
}

export default ArmyListInfo;
