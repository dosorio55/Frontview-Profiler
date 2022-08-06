import { Avatar, Box, CircularProgress, Paper, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../context/api/context';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import MyWork from './components/MyWork/MyWork';

const StyledBox = styled(Box)(({
    padding: "1.5rem",
    backgroundColor: "#e3f2fd",
    borderRadius: '1rem'
}));

const StyledPaper = styled(Paper)(({
    display: "flex",
    padding: "1.125rem",
    borderRadius: '1rem'

}));

const ProfileBox = styled(Box)(({
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center'
}));

const BubbleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(3)
}));

const Feed = () => {

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
    }, [jwtToken]);


    /*   const handleEdit = () => {
        setEditMode(!editMode)
      } */

    const addProjectModal = () => {
        setProjectModal(!projectModal)
    }

    const { name, headline, description, habilities, image } = profile

    return (
        <StyledBox style={{ margin: "1.5rem" }}>
            {loading ?
                <CircularProgress />
                : <>
                    <BubbleBox>
                        <StyledPaper elevation={0}>
                            <ProfileBox>
                                <Avatar
                                    alt={name}
                                    src={image}
                                    sx={{ width: 56, height: 56 }}
                                />
                                <Typography variant="h6" component="p" color="initial">
                                    {name}
                                </Typography>
                            </ProfileBox>
                            <Typography variant="body1" component="p" color="initial">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit sapiente necessitatibus tempore, recusandae autem accusamus cum voluptates ullam illum fugiat aliquid nisi incidunt vitae magni magnam, obcaecati ut quia a deleniti vero mollitia tempora ex. Sunt necessitatibus suscipit repellat.
                            </Typography>
                        </StyledPaper>

                        <StyledPaper elevation={0}>
                            <ProfileBox>
                                <Avatar
                                    alt={name}
                                    src={image}
                                    sx={{ width: 56, height: 56 }}
                                />
                                <Typography variant="h6" component="p" color="initial">
                                    {name}
                                </Typography>
                            </ProfileBox>
                            <Typography variant="body1" component="p" color="initial">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit sapiente necessitatibus tempore, recusandae autem accusamus cum voluptates ullam illum fugiat aliquid nisi incidunt vitae magni magnam, obcaecati ut quia a deleniti vero mollitia tempora ex. Sunt necessitatibus suscipit repellat.
                            </Typography>
                        </StyledPaper>
                    </BubbleBox>

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
                </>}

        </StyledBox>
    )
}

export default Feed