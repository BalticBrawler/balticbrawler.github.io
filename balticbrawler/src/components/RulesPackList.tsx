import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import useIsMobile from "../hooks/useIsMobile";

function RulesPackList(props: {
    tableContent: {
        header: string;
        value: ReactNode;
        footer?: ReactNode;
    }[];
}) {
    const [isMobile] = useIsMobile();
    return (
        <Box justifySelf="center">
            {props.tableContent.map((x) => (
                <Box>
                    <Box
                        display="flex"
                        flexDirection={isMobile ? "column" : "row"}
                        my={1}
                        maxWidth={968}
                    >
                        <Typography width={200}>{x.header}:</Typography>
                        <Typography flex={1} mx={isMobile ? 4 : 0}>
                            {x.value}
                        </Typography>
                    </Box>
                    {x.footer}
                </Box>
            ))}
        </Box>
    );
}

export default RulesPackList;
