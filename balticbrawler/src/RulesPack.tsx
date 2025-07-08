import { Box, Card, Typography } from "@mui/material";
import TournamentSummary from "./components/TournamentSummary";
import RulesPackElement from "./components/RulePackElement";
import TournamentSchedule from "./components/TournamentSchedule";
import useIsMobile from "./hooks/useIsMobile";
import FurtherInfo from "./components/FurtherInfo";
import GeneralInfo from "./components/GeneralInfo";
import PairingRankingInfo from "./components/PairingRankingInfo";
import ArmyListInfo from "./components/ArmyListInfo";
import MajorLayouts from "./components/MajorLayouts";
import TournamentFaq from "./components/TournamentFaq";
import ScoringMatrix from "./components/ScoringMatrix";

function RulesPack() {
    const [, xPadding, topMargin] = useIsMobile();

    return (
        <Box
            display="flex"
            mt={topMargin}
            mx="auto"
            px={xPadding}
            width="100%"
            flexDirection="column"
            maxWidth={1600}
            alignSelf="stretch"
            justifySelf="center"
        >
            <Box justifySelf="center">
                <Card>
                    <Box justifySelf="center">
                        <Typography
                            variant="h3"
                            justifySelf="center"
                            m={2}
                            textAlign="center"
                        >
                            Beach Clash Rulespack
                        </Typography>
                        <Typography
                            variant="h6"
                            justifySelf="center"
                            textAlign="center"
                            m={0}
                        >
                            12.07-13.07.2025 • 5 Spiele • 2000 Punkte • In
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
                justifyContent="center"
                content={<TournamentSchedule />}
            />
            <RulesPackElement
                header="Veranstaltungsort und Verpflegung"
                content={<FurtherInfo />}
            />
            <RulesPackElement
                header="Allgemeines und Regeln"
                content={<GeneralInfo />}
            />
            <RulesPackElement
                header="Pairings / Ranking"
                content={<PairingRankingInfo />}
            />
            <RulesPackElement
                header="Armeelisten und Spielfiguren"
                content={<ArmyListInfo />}
            />
            <RulesPackElement header="Layouts" content={<MajorLayouts />} />
            <RulesPackElement
                header="Turnier FAQ"
                content={<TournamentFaq />}
            />
            <RulesPackElement
                header="20:0 Matrix"
                justifyContent="center"
                content={<ScoringMatrix />}
            />
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
