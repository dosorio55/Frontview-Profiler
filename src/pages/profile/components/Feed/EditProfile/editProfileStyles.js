import { Box, styled, TextField } from "@mui/material";

export const StyledGrid = styled(Box)(({
  display: "grid",
  gridTemplateColumns: '4fr 7fr',
  padding: 20,
  gap: '1rem',
  flexWrap: 'wrap'
}));

export const StyledUl = styled('ul')(({
  display: "flex",
  padding: 20
}));

export const StyledLi = styled('li')(({
  display: "flex",
  gap: 8,
  alignItems: 'center',
  padding: '0 .7rem',
  cursor: 'pointer'
}));

export const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: 'column',
  gap: 15,
  borderRadius: theme.shape.borderRadius,
  transition: { duration: theme.transitions.duration.standard },
  border: '1px solid rgb(227, 242, 253)',

  '&:hover': {
    boxShadow: 'rgba(32, 40, 45, 0.08) 0px 2px 14px 0px'
  }
}));

export const ElementsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '.7rem 1rem',
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
}));

export const TextInputStyled = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50]
}));

export const SocialsContainer = styled(Box)(({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
}));
