import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './core/header/Header';
import Profile from './pages/profile/Profile';
import Form from './pages/form/Form';
import Home from './pages/home/Home';
import LoginModal from './shared/loginModal/LoginModal';
import React, { useState } from 'react';
import Network from './pages/network/Network';
import NetworkProfile from './pages/NetworkProfile/NetworkProfile';
import { AuthProvider } from './context/auth';
import Footer from './core/footer/Footer';

export const ModalContext = React.createContext()

function App() {

  const initialState = localStorage.getItem("currentUser")
    ? true
    : false;

  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(initialState)

  const handleLogin = () => {
    setLogin(!login)
  }

  const handleModal = () => {
    setModal(!modal)
    console.log(modal)
  }

  return (
    <AuthProvider>
      <Router>
        <ModalContext.Provider value={handleModal}>
          <Header loginValue={login} setLogin={handleLogin}></Header>

          <LoginModal modalValue={modal} setLogin={handleLogin}></LoginModal>
        </ModalContext.Provider>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-profile' element={<Form />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/network' element={<Network />} />
          <Route path='/network/:_id' element={<NetworkProfile />} />
          <Route path='*' />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
