import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionSummary,
    Box,
    Typography,
    AccordionDetails,
} from "@mui/material";
import { ReactNode } from "react";

function RulesPackElement(props: { header: string; content?: ReactNode }) {
    return (
        <Accordion
            style={{
                margin: 8,
                marginLeft: 100,
                marginRight: 100,
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
