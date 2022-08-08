import { Box, styled } from "@mui/material";

export const StyledPaper = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: "1.125rem",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    // flexGrow: 1
}));