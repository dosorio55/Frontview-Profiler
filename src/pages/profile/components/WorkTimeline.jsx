import React from 'react'
import { Box, Divider, styled, Typography } from '@mui/material';
import "./ArrowTimeline.scss"

const GridContainer = styled(Box)(({
    display: "grid",
    gridTemplateColumns: '4fr .1fr 6fr',
    gap: 3,
    paddingTop: 10
}));

const WorkTimeline = () => {
    return (
        <GridContainer>
            <div>
                <div className='arrow'>
                    <Typography color="secondary">
                        2022
                    </Typography>
                </div>
            </div>
            <Divider orientation="vertical" />
            <Box sx={{ px: 1 }}>
                <Typography component={'span'} variant={'body2'}>
                    Senior Product Designer
                </Typography>
                <Typography>
                    Amazon Ink
                </Typography>
            </Box>
            <div>
                <div className='arrow'>
                    <Typography color="secondary">
                        2022
                    </Typography>
                </div>
            </div>
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