import { Box, Card, Typography } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";

import TournamentSummary from "./components/TournamentSummary";
import TournamentSchedule from "./components/TournamentSchedule";
import FurtherInfo from "./components/FurtherInfo";
import GeneralInfo from "./components/GeneralInfo";
import PairingRankingInfo from "./components/PairingRankingInfo";
import ArmyListInfo from "./components/ArmyListInfo";
import Layouts from "./components/Layouts";
import TournamentFaq from "./components/TournamentFaq";
import ScoringMatrix from "../components/ScoringMatrix";
import RulesPackElement from "../components/RulePackElement";

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
                            04.01.2025 • 3 Spiele • 2000 Punkte • In Nomine
                            Imperatoris • Matched Play
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
            <RulesPackElement header="Layouts" content={<Layouts />} />
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

export default RulesPack;
