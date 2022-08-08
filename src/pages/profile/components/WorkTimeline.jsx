import React from 'react'
import { Box, Divider, styled, Typography } from '@mui/material';

const GridContainer = styled(Box)(({
    display: "grid",
    gridTemplateColumns: '3fr .2fr 6fr',
    gap: 2
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    height: "1rem"
}));

const WorkTimeline = () => {
    return (
        <GridContainer>
            <StyledBox>
                <Typography color="secondary">
                    2022
                </Typography>
            </StyledBox>
            <Divider orientation="vertical" />
            <Box sx={{ px: 1 }}>
                <Typography component={'span'} variant={'body2'}>
                    Senior Product Designer
                </Typography>
                <Typography>
                    Amazon Ink
                </Typography>
            </Box>
        </GridContainer>
    )
}

export default WorkTimeline