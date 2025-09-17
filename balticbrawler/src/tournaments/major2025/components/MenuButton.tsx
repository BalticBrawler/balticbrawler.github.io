import { useState, useRef } from "react";
import {
    ToggleButton,
    Button,
    Popper,
    Paper,
    ClickAwayListener,
    Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuButton() {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <>
            <ToggleButton
                value="popup"
                selected={open}
                onChange={handleToggle}
                ref={anchorRef}
            >
                <MenuIcon />
            </ToggleButton>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                placement="bottom"
                transition
            >
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Paper sx={{ p: 0, mt: 0, boxShadow: 3 }}>
                        <Stack direction="column" spacing={0}>
                            <Button variant="outlined">Aktion 1</Button>
                            <Button variant="outlined">Aktion 2</Button>
                            <Button variant="outlined">Aktion 3</Button>
                        </Stack>
                    </Paper>
                </ClickAwayListener>
            </Popper>
        </>
    );
}
