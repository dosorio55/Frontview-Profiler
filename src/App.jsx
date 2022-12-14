import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './core/Header';
import Profile from './pages/profile/Profile';
import Form from './pages/form/Form';
import Home from './pages/home/Home';
import LoginModal from './shared/loginModal/LoginModal';
import React, { useEffect, useState } from 'react';
import Network from './pages/network/Network';
import NetworkProfile from './pages/NetworkProfile/NetworkProfile';
import { AuthProvider, useGetState } from './context/auth';
import Footer from './core/Footer';
import { BASE_URL } from './context/api/context';
import PersonalInfo from './pages/profile/components/Feed/PersonalInfo';
import EditProfile from './pages/profile/components/Feed/EditProfile/EditProfile';

export const ModalContext = React.createContext();
export const UserProfileContext = React.createContext();

function App() {
  //we most reevaluate this
  const initialState = localStorage.getItem("currentUser")
    ? true
    : false;

  const token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).token
    : false;

  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(initialState);
  const [userProfile, setUserProfile] = useState([]);
  const [userProjects, setUserProjects] = useState([]);

  const fetchProfile = () => {
    fetch(`${BASE_URL}/profiles/personal`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setUserProfile(data[0]));
  }

  const fetchProjects = ()=> {
    fetch(`${BASE_URL}/project/personal`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json())
      .then(data => setUserProjects(data))
  }

  useEffect(() => {
    if (token) {
      fetchProfile()
      fetchProjects()
    };

  }, [token]);

  const handleLogin = () => {
    setLogin(!login)
  }

  const handleModal = () => setModal(prevState => !prevState);

  return (
    <AuthProvider>
      <Router>
        <UserProfileContext.Provider value={{ user: userProfile, projects: userProjects, fetchProfile: fetchProfile, fetchProjects: fetchProjects }}>
          <ModalContext.Provider value={handleModal}>
            <Header loginValue={login} setLogin={handleLogin}></Header>
            <LoginModal modalValue={modal} setLogin={handleLogin}></LoginModal>
          </ModalContext.Provider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add-profile' element={<Form />} />
            <Route path='/profile' element={<Profile />} >
              <Route index path='personal-info' element={<PersonalInfo />} />
              <Route path='edit-info' element={<EditProfile />} />
              <Route path='network' element={<Network />} />
            </Route>
            <Route path='/network/:_id' element={<NetworkProfile />} />
            <Route path='*' />
          </Routes>
        </UserProfileContext.Provider>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
