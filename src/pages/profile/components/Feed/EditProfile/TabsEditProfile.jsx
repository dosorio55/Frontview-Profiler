import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { FiPenTool } from 'react-icons/fi';
import { GiBrain, GiSandsOfTime } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';

const TabsEditProfile = ({ editTabs, setEditTabs }) => {

  const navigate = useNavigate();

  const handleChange = (event, newValue) => setEditTabs(newValue);

  const handleNavigate = () => {
    console.log('navegando');
    navigate('/profile')
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={editTabs}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
      >

        <Tab value="profile" label="profile"
          iconPosition='start' icon={<BsFillFileEarmarkPersonFill style={{ width: "18px", height: "18px" }} />} />

        <Tab value="skills" label="skills" onClick={handleNavigate}
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