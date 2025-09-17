import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import useIsMobile from "../../hooks/useIsMobile";

function RulesPackList(props: {
    id?: string;
    tableContent: {
        header: ReactNode;
        value: ReactNode;
        footer?: ReactNode;
    }[];
}) {
    const [isMobile] = useIsMobile();
    return (
        <Box id={props.id} justifySelf="left">
            {props.tableContent.map((x, i) => (
                <Box
                    key={i}
                    display="flex"
                    flexDirection={isMobile ? "column" : "row"}
                    my={1}
                    maxWidth={900}
                >
                    <Typography width={200}>{x.header}:</Typography>
                    <Typography flex={1} mx={isMobile ? 4 : 0}>
                        {x.value}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}

export default RulesPackList;
