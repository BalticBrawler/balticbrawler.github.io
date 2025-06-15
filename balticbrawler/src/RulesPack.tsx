import { Box, Card, Typography } from "@mui/material";
import TournamentSummary from "./components/TournamentSummary";
import RulesPackElement from "./components/RulePackElement";
import TournamentSchedule from "./components/TournamentSchedule";
import useIsMobile from "./hooks/useIsMobile";
import FurtherInfo from "./components/FurtherInfo";
import GeneralInfo from "./components/GeneralInfo";
import PairingRankingInfo from "./components/PairingRankingInfo";
import ArmyListInfo from "./components/ArmyListInfo";
import MiniaturesInfo from "./components/MiniaturesInfo";
import MapLayouts from "./components/MapLayouts";
import TournamentFaq from "./components/TournamentFaq";

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
            <RulesPackElement header="Armeelisten" content={<ArmyListInfo />} />
            <RulesPackElement
                header="Spielfiguren"
                content={<MiniaturesInfo />}
            />
            <RulesPackElement header="Layouts" content={<MapLayouts />} />
            <RulesPackElement
                header="Turnier FAQ"
                content={<TournamentFaq />}
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
