import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionSummary,
    Box,
    Typography,
    AccordionDetails,
} from "@mui/material";
import { ReactNode, useState } from "react";

function RulesPackElement(props: { header: string; content?: ReactNode }) {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <Accordion
            expanded={isExpanded}
            onChange={() => setExpanded((x) => !x)}
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
