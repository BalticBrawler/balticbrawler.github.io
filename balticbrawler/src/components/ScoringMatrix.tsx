import {
    Box,
    // Table,
    // TableBody,
    // TableCell,
    // TableContainer,
    // TableHead,
    // TableRow,
} from "@mui/material";

function ScoringMatrix() {
    // const matrix = [
    //     { diff: "0", winner: 10, loser: 10 },
    //     { diff: "1-5", winner: 11, loser: 9 },
    //     { diff: "6-10", winner: 12, loser: 8 },
    //     { diff: "11-15", winner: 13, loser: 7 },
    //     { diff: "16-20", winner: 14, loser: 6 },
    //     { diff: "21-25", winner: 15, loser: 5 },
    //     { diff: "26-30", winner: 16, loser: 4 },
    //     { diff: "31-35", winner: 17, loser: 3 },
    //     { diff: "36-40", winner: 18, loser: 2 },
    //     { diff: "41-45", winner: 19, loser: 1 },
    //     { diff: "46+", winner: 20, loser: 0 },
    // ];

    return (
        <Box justifySelf="center" width="100%">
            <img src="Matrix.png" width="100%" />
            {/* <TableContainer>
                <Table size="small" sx={{ border: "1px solid" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Differenz</TableCell>
                            <TableCell>Gewinner</TableCell>
                            <TableCell>Verlierer</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {matrix.map((x) => (
                            <TableRow>
                                <TableCell>{x.diff}</TableCell>
                                <TableCell>{x.winner}</TableCell>
                                <TableCell>{x.loser}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}
        </Box>
    );
}

export default ScoringMatrix;
