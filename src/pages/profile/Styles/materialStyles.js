import { Box, Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
    display: "flex",
    padding: "1.125rem",
    borderRadius: theme.shape.borderRadius,
    minHeight: "20vh"
}));