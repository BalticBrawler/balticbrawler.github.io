import { Link, Typography } from "@mui/material";
import { ReactNode } from "react";
import RulesPackList from "./RulesPackList";

function MiniaturesInfo() {
    const tableContent: { header: string; value: ReactNode }[] = [
        {
            header: "Bemalung",
            value: (
                <>
                    <Typography>
                        Die Bemalung muss dem Battle-Ready-Standard entsprechen:
                    </Typography>
                    <li>Alles muss vollständig gebaut sein</li>
                    <li>
                        drei Grundfarben, Shades oder Highlights sind erkennbar
                    </li>
                    <li>eine minimale Gestaltung der Base ist sichtbar</li>
                </>
            ),
        },
        {
            header: "Bases",
            value: (
                <Typography>
                    Alle Modelle müssen auf aktuellen Bases stehen. Dafür zählen
                    die GW Angaben und die{" "}
                    <Link href="https://tinyurl.com/2chywnz5">WTC-Tabelle</Link>
                    .
                </Typography>
            ),
        },
        {
            header: "Count as",
            value: (
                <>
                    <Typography>
                        Gerne dürft ihr mit „count as Modellen“ spielen, wenn
                        sie vorher von der Orga abgesegnet wurden.
                    </Typography>
                    <Typography>
                        Meldet euch hierfür bitte rechtzeitig vor dem Turnier.
                    </Typography>
                </>
            ),
        },
        {
            header: "WYSIWYG",
            value: (
                <>
                    <Typography>
                        Es muss erkennbar sein, welche Ausrüstung ein Modell
                        besitzt und zu welcher Einheit es gehört.
                    </Typography>
                    <Typography>
                        Wenn ihr euch nicht sicher seid, fragt vor dem Turnier
                        bei der Orga nach.
                    </Typography>
                    <Typography>
                        (Weitere Infos hierfür findet ihr im Turnier FAQ)
                    </Typography>
                </>
            ),
        },
    ];

    return <RulesPackList tableContent={tableContent} />;
}

export default MiniaturesInfo;
