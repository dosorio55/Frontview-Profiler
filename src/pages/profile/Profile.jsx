import React, { useEffect, useState } from 'react'
import Feed from './components/Feed/Feed';
import SideBar from './SideBar';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import { BASE_URL } from '../../context/api/context';

export const EditModeContext = React.createContext({ editState: false });
export const UserProfileContext = React.createContext();

const Profile = () => {

  const [editMode, setEditMode] = useState(false);
  const [userProfile, setUserProfile] = useState([])
  const [userProjects, setUserProjects] = useState([])

  const jwtToken = JSON.parse(localStorage.getItem("currentUser")).token;

  useEffect(() => {
    fetch(`${BASE_URL}/profiles/personal`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    })
      .then(response => response.json())
      .then(data => setUserProfile(data[0]))

    fetch(`${BASE_URL}/project/personal`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(res => res.json())
      .then(data => setUserProjects(data))
  }, [jwtToken]);

  const handleEditMode = () => setEditMode((prevState) => !prevState);

  return (

    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <EditModeContext.Provider value={{ editState: editMode, handleEditMode: handleEditMode }}>
          <SideBar />
          <UserProfileContext.Provider value={{user: userProfile, projects: userProjects }}>
            <Feed />
          </UserProfileContext.Provider>
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