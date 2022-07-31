import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../context/api/context';
import AddProject from './components/addProject/AddProject';
import MyWork from './components/MyWork/MyWork';
import Experience from './components/Experience/Experience';
import ProfileSocials from './components/ProfileSocials/ProfileSocials';
import AboutMe from './components/AboutMe/AboutMe';
import './Profile.scss'
import NavBar from './components/NavBar/NavBar';


const Profile = () => {

  const jwtToken = JSON.parse(localStorage.getItem("currentUser")).token

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    fetch(`${BASE_URL}/project/personal`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(res => res.json())
      .then(data => {
        setProjects(data)
        console.log(data)
      })
  };

  useEffect(() => {
    setLoading(true)
    //get profile
    fetch(`${BASE_URL}/profiles/personal`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setProfile(data[0]);
        console.log(data[0])
      })
      .finally(() => {
        setLoading(false);
      });

    fetch(`${BASE_URL}/project/personal`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(res => res.json())
      .then(data => {
        setProjects(data)
        console.log(data)
      })
    // getProjects()
  }, [jwtToken]);


  const handleEdit = () => {
    setEditMode(!editMode)
  }

  const addProjectModal = () => {
    setProjectModal(!projectModal)
  }

  const { name, headline, description, habilities, image } = profile
  return (

    <div className='header'>
      <p>{loading}</p>


      <div id='user' className='container header__container'>

        <h5 >Hello I am</h5>
        <h1>{name}</h1>
        <h5 className='text-light'>{headline}</h5>


        <ProfileSocials />

        <div className='ImageMe'>

          <img className='ImageMe__img' src={image} alt="profile foto" />
        </div>

        <NavBar handleEdit={handleEdit} editMode={editMode}></NavBar>


      </div>

      <AboutMe description={description}></AboutMe>

      {habilities && <Experience habilities={habilities}></Experience>}



      <section id='portfolio' className='portafolioSection'>
        <h5>My Recent Work</h5>
        <h2>Portafolio</h2>
        <div className='container portfolio__container'>
          {projects && projects.map((project) =>

            <MyWork
              key={project._id}
              project={project}
              getProjects={getProjects}
              editMode={editMode}
            ></MyWork>
          )}
          {editMode &&
            <article className='portfolio__item'>
              <p className='btn parrafo' onClick={addProjectModal}>add a new project</p>
            </article>
          }
        </div>
      </section>

      {/* ===================================================Modal ===================== */}
      {projectModal &&
        <AddProject

          modalSetter={setProjectModal}
          getProjects={getProjects}
        >
        </AddProject>}
    </div>
  )
}

export default Profile