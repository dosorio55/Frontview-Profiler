import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { FiPenTool } from 'react-icons/fi';
import { GiBrain, GiSandsOfTime } from 'react-icons/gi';

const TabsEditProfile = ({editTabs, setEditTabs}) => {

  const handleChange = (event, newValue) => setEditTabs(newValue);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={editTabs}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >

        <Tab value="profile" label="profile"
          iconPosition='start' icon={<BsFillFileEarmarkPersonFill style={{ width: "18px", height: "18px" }} />} />
        <Tab value="skils" label="skils"
          iconPosition='start' icon={<GiBrain style={{ width: "18px", height: "18px" }} />} />

        <Tab value="timeline" label="timeline"
          iconPosition='start' icon={<GiSandsOfTime style={{ width: "18px", height: "18px" }} />} />
        <Tab value="projects" label="projects"
          iconPosition='start' icon={<FiPenTool style={{ width: "18px", height: "18px" }} />} />

      </Tabs>
    </Box>
  )
}

export default TabsEditProfile