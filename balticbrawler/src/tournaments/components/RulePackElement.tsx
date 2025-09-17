import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionSummary,
    Box,
    Typography,
    AccordionDetails,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";

function RulesPackElement(props: {
    header: string;
    content?: ReactNode;
    mx?: number | "auto";
    justifyContent?: "left" | "center";
    sections?: string[];
}) {
    const isExpandedCookie = Cookies.get(props.header) === "true";
    const [isExpanded, setExpanded] = useState(isExpandedCookie);

    useEffect(() => {
        const current = Cookies.get(props.header) === "true";
        if (current !== isExpanded) {
            Cookies.set(props.header, isExpanded ? "true" : "false");
        }
    }, [isExpanded, props.header]);

    // const { hash } = useLocation();

    // useEffect(() => {
    //     const overwriteExpanded =
    //         !isExpanded &&
    //         !!props.sections &&
    //         !!hash &&
    //         props.sections.includes(hash);
    //     if (overwriteExpanded) {
    //         setExpanded(true);
    //     }
    // }, []);

    return (
        <Accordion
            expanded={isExpanded}
            onChange={() => {
                setExpanded((x) => {
                    Cookies.set(props.header, isExpanded ? "true" : "false");
                    return x ? false : true;
                });
            }}
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
            <AccordionDetails>
                <Box maxWidth={900} mx={props.mx ?? "auto"}>
                    <Box
                        justifySelf={props.justifyContent ?? "left"}
                        width="100%"
                    >
                        {props.content}
                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>
    );
}

export default RulesPackElement;
