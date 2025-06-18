import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionSummary,
    Box,
    Typography,
    AccordionDetails,
} from "@mui/material";
import { useAtom } from "jotai";
import { atomWithHash } from "jotai-location";
import { RESET } from "jotai/utils";
import { ReactNode, useMemo } from "react";

function RulesPackElement(props: { header: string; content?: ReactNode }) {
    const atom = useMemo(
        () =>
            atomWithHash(props.header, false, {
                setHash: "replaceState",
                deserialize: (x) => x === "1",
                serialize: (x) => (x ? "1" : "0"),
            }),
        [props.header]
    );

    const [isExpanded, setExpanded] = useAtom(atom);

    return (
        <Accordion
            expanded={isExpanded}
            onChange={() => setExpanded((x) => (x ? RESET : true))}
            style={{
                margin: 8,
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMore color="primary" />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Box>
                    <Typography
                        variant="h5"
                        justifySelf="center"
                        color="primary"
                        textAlign="center"
                    >
                        {props.header}
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>{props.content}</AccordionDetails>
        </Accordion>
    );
}

export default RulesPackElement;
