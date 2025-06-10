import { Box, Card, Typography } from "@mui/material";
import TournamentSummary from "./components/TournamentSummary";
import RulesPackElement from "./components/RulePackElement";
import TournamentSchedule from "./components/TournamentSchedule";

function RulesPack() {
    return (
        <Box mt={10} maxWidth={1200}>
            <Box mx={10}>
                <Card>
                    <Box justifySelf="center">
                        <Typography variant="h3" justifySelf="center" m={2}>
                            Beach Clash Rulespack
                        </Typography>
                        <Typography variant="h6" justifySelf="center" m={0}>
                            12.07-13.07..2025 • 5 Spiele • 2000 Punkte • In
                            Nomine Imperatoris • Matched Play
                        </Typography>
                    </Box>
                </Card>
            </Box>

            <RulesPackElement
                header="Turnierübersicht"
                content={<TournamentSummary />}
            />
            <RulesPackElement
                header="Turnierablauf"
                content={<TournamentSchedule />}
            />
            <RulesPackElement
                header="Weitere Informationen und Regeln"
                content={<></>}
            />
            <RulesPackElement header="Layouts" content={<></>} />
            <RulesPackElement header="Speiseplan" content={<></>} />
            <RulesPackElement header="WEgbeschreibung" content={<></>} />
            <RulesPackElement header="FAQ" content={<></>} />
        </Box>
    );
}

// anmeldung
// turnierübersicht
// Turnierablauf
// weiter Info und regeln
// layouts
// speiseplan
// wegbeschreibung
// faq

export default RulesPack;
