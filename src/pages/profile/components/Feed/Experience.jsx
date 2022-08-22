import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import images from '../../../../constants/images'

const capitalize = string => string[0].toUpperCase() + string.slice(1);

const IconBox = styled(Box)(({
    height: 40,
}));

const StyledBox = styled(Box)(({
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}));

const BoxContainer = styled(Box)(({
    display: "flex",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    minHeight: "5rem"
}));


const Experience = ({ habilities }) => {

    let skillsGap;
    habilities?.length > 3 ? skillsGap = 3 : skillsGap = 4;

    return (
        <BoxContainer className="skills_cards" sx={{ gap: skillsGap, margin: "auto 0", p: 2}}>
            {habilities?.map(skill =>
                <StyledBox key={skill} flex={1}>
                    <IconBox>
                        <img src={images[skill]} alt={skill} style={{ height: "100%" }} />
                    </IconBox>
                    <Typography variant="span" color="body2">
                        {capitalize(skill)}
                    </Typography>
                </StyledBox>
            )}
        </BoxContainer>
    )
}

export default Experience