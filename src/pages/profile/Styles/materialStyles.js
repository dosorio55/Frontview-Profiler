import { Box, Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: 'column',
    padding: "1.125rem",
    borderRadius: theme.shape.borderRadius,
    minHeight: "20vh"
}));

export const ProjectsGrid = styled(Box)(({
    display: "grid",
    gridTemplateColumns: '1fr 1fr 1fr',
    padding: "1.125rem",
    paddingBottom: "0.8rem",
    alignItems: "center",
    gap: 15
  }));