import { ArrowDropDown } from "@mui/icons-material";
import {
    Box,
    Button,
    ClickAwayListener,
    Paper,
    Popper,
    Stack,
    Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function MenuItem(props: {
    isMobile: boolean;
    isMainItem: boolean;
    width?: number;
    item: {
        title: string;
        page?: string;
        link?: string;
        subMenuItems?: { title: string; page?: string; link?: string }[];
    };
    setOpen: (x: boolean) => void;
}) {
    const navigate = useNavigate();
    const ref = useRef<HTMLButtonElement | null>(null);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClose = useCallback(() => {
        if (props.isMobile || !props.isMainItem) {
            return;
        }
        setAnchorEl(null);
    }, [props.isMainItem, props.isMobile]);

    useEffect(() => {
        function handleMouseOut(e: MouseEvent) {
            // e.relatedTarget ist null, wenn Maus aus dem Fenster rausgeht
            if (!e.relatedTarget) {
                handleClose();
            }
        }

        if (anchorEl) {
            document.addEventListener("mouseout", handleMouseOut);
        }

        return () => {
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, [anchorEl, handleClose]);

    const item = props.item;

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // Close deferred so the original click can propagate to the clicked element first
    const closeDeferred = () => {
        setTimeout(() => setAnchorEl(null), 0);
    };
    return (
        <>
            <Button
                key={item.title}
                ref={ref}
                onMouseEnter={handleOpen}
                onMouseLeave={(e) => {
                    // nur schließen, wenn nicht in den Popper gewechselt wird
                    const related = e.relatedTarget as HTMLElement | null;
                    if (related && related.closest("#my-popper")) return;
                    handleClose();
                }}
                onClick={() => {
                    if (props.isMainItem && props.isMobile) {
                        props.setOpen(true);
                        return;
                    }
                    if (item.page) {
                        navigate("/" + item.page);
                    } else if (item.link) {
                        window.open(item.link);
                    }
                    props.setOpen(false);
                }}
            >
                <Box
                    width={props.width}
                    flexDirection="row"
                    display="flex"
                    alignItems="center"
                >
                    <Typography m={1}>{item.title}</Typography>
                    {props.isMobile && props.isMainItem && (
                        <ArrowDropDown></ArrowDropDown>
                    )}
                </Box>
            </Button>
            {item.subMenuItems?.length && !props.isMainItem && (
                <Box display="flex" ml={2}>
                    <Box
                        display="flex"
                        flexGrow={1}
                        flexDirection="column"
                        borderColor={green[200]}
                        borderLeft={1}
                    >
                        {item.subMenuItems.map((i) => (
                            <Button
                                sx={{ justifyContent: "left" }}
                                onClick={() => {
                                    if (i.page) {
                                        navigate("/" + i.page);
                                    } else if (i.link) {
                                        window.open(i.link);
                                    }
                                    props.setOpen(false);
                                }}
                            >
                                {i.title}
                            </Button>
                        ))}
                    </Box>
                </Box>
            )}
            {item.subMenuItems && props.isMainItem && (
                <Popper
                    id="my-popper"
                    open={!!anchorEl}
                    anchorEl={anchorEl}
                    sx={{ zIndex: 100 }}
                    placement="bottom-start"
                    disablePortal
                    onMouseLeave={() => {
                        handleClose();
                    }}
                >
                    <ClickAwayListener
                        mouseEvent="onMouseDown"
                        onClickAway={closeDeferred}
                    >
                        <Paper
                            sx={{
                                p: 1,
                                minWidth: 180,
                                background: "#333333FA",
                            }}
                        >
                            <Stack spacing={1}>
                                {item.subMenuItems.map((i) => (
                                    <Button
                                        onClick={() => {
                                            if (i.page) {
                                                navigate("/" + i.page);
                                            } else if (i.link) {
                                                window.open(i.link);
                                            }
                                            props.setOpen(false);
                                        }}
                                    >
                                        {i.title}
                                    </Button>
                                ))}
                            </Stack>
                        </Paper>
                    </ClickAwayListener>
                </Popper>
            )}
        </>
    );
}

export default MenuItem;
