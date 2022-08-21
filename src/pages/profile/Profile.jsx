import React, { useState } from 'react'
import Feed from './components/Feed/Feed';
import SideBar from './SideBar';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';

export const EditModeContext = React.createContext({ editState: false });

const Profile = () => {

  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => setEditMode((prevState) => !prevState);

  return (

    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <EditModeContext.Provider value={{ editState: editMode, handleEditMode: handleEditMode }}>
          <SideBar />
          <Feed />
        </EditModeContext.Provider>
      </Stack>
    </Box>
  )
}

export default Profile

{/* ===================================================Modal ===================== */ }
{/*       {projectModal &&
  <AddProject

    modalSetter={setProjectModal}
    getProjects={getProjects}
  >
  </AddProject>} */}