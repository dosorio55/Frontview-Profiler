import React from 'react'
import './Experience.scss'
import { FaReact } from 'react-icons/fa'
import { Box, styled, Typography } from '@mui/material'
import images from '../../../../constants/images'

const capitalize = string => string[0].toUpperCase() + string.slice(1);

const IconBox = styled(Box)(({
    height: 30,
}));

const StyledBox = styled(Box)(({
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}));

const Experience = ({ habilities }) => {

    return (
        <Box className="skills_cards" sx={{display:"flex", flexWrap: "wrap", gap: 3, py: 1, justifyContent: "center", alignItems: "center", minHeight: "5rem" }}>
            {habilities?.map(skill =>
                <StyledBox key={skill}>
                    <IconBox>
                        <img src={images[skill]} alt={skill} style={{height: "100%"}}/>
                    </IconBox>
                    <Typography variant="subtitle2" color="initial">
                        {capitalize(skill)}
                    </Typography>
                </StyledBox>
            )}
        </Box>
    )
}

export default Experience