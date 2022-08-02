import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../context/api/context';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import MyWork from './components/MyWork/MyWork';

const Feed = () => {

    const jwtToken = JSON.parse(localStorage.getItem("currentUser")).token

    const [profile, setProfile] = useState({});
    // const [loading, setLoading] = useState(false);
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
        // setLoading(true)
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
        /*       .finally(() => {
                setLoading(false);
              }); */

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
    }, [jwtToken]);


    /*   const handleEdit = () => {
        setEditMode(!editMode)
      } */

    const addProjectModal = () => {
        setProjectModal(!projectModal)
    }

    const { name, headline, description, habilities, image } = profile

    return (
        <Box bgcolor="lightBlue" flex={11}>
            <div>
                <h5 >Hello I am</h5>
                <h1>{name}</h1>
                <h5>{headline}</h5>
                <div>
                    <img src={image} alt="profile foto" />
                </div>
            </div>

            <AboutMe description={description} />

            {habilities && <Experience habilities={habilities}></Experience>}

            <section>
                <h5>My Recent Work</h5>
                <h2>Portafolio</h2>
                <div>
                    {projects && projects.map((project) =>

                        <MyWork
                            key={project._id}
                            project={project}
                            getProjects={getProjects}
                            editMode={editMode}
                        ></MyWork>
                    )}
                    {/*{editMode &&
                        <article className='portfolio__item'>
                            <p className='btn parrafo' onClick={addProjectModal}>add a new project</p>
                        </article>
                    } */}
                </div>
            </section>
        </Box>
    )
}

export default Feed