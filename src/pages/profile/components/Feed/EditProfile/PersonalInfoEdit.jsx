import { Avatar, Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { ContainerBox, ElementsContainer, SocialsContainer, StyledGrid, TextInputStyled } from './editProfileStyles'
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { UserProfileContext } from '../../../../../App';
import { BASE_URL } from '../../../../../context/api/context';
import { useNavigate } from 'react-router-dom';

const PersonalInfoEdit = () => {

    const { name, image, description, headline } = useContext(UserProfileContext).user;
    const fetchProfile = useContext(UserProfileContext).fetchProfile;
    const jwtToken = JSON.parse(localStorage.getItem("currentUser")).token;

    const navigate = useNavigate()

    const formInitialState = {
        name,
        // image,
        description,
        headline
    }

    const [formState, setFormState] = useState(formInitialState);

    const handleForm = (event) => setFormState({ ...formState, [event.target.name]: event.target.value });


    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`${BASE_URL}/profiles/edit`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify(formState)
        }).then(() => fetchProfile())
        .finally(()=> navigate('/profile/personal-info'))

    }

    return (
        <form onSubmit={handleSubmit}>
            <StyledGrid >
                <ContainerBox >
                    <ElementsContainer sx={{ borderBottom: '1px solid rgb(227, 242, 253)' }}>
                        <Typography variant="subtitle2" component="p" color="initial">
                            Personal Information
                        </Typography>
                    </ElementsContainer>
                    <ElementsContainer sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '.7rem' }}>
                        <Box flex={1}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Avatar
                                    alt={name}
                                    src={image}
                                    sx={{ width: 100, height: 100 }}
                                />
                                <Typography variant="subtitle2" component="p" color="initial" sx={{ p: '.5rem' }}>
                                    {name}
                                </Typography>
                                {/* <Button variant='contained' color='secondary'>Update Picture</Button> */}
                            </Box>
                        </Box>
                        <Box flex={1} sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <TextInputStyled
                                id="outlined"
                                label="Name"
                                name='name'
                                color='secondary'
                                fullWidth
                                value={formState.name}
                                onChange={handleForm}
                            />
                            {/* <TextInputStyled
                                id="outlined"
                                label="Surname"
                                color='secondary'
                                fullWidth
                                value={name}
                            onChange={handleChange}
                            /> */}
                            <TextInputStyled
                                id="outlined"
                                label="Headline"
                                name='headline'
                                color='secondary'
                                fullWidth
                                value={formState.headline}
                                onChange={handleForm}
                            />
                        </Box>
                    </ElementsContainer>
                </ContainerBox>
                {/* ---------------------- ABOUT ME EDIT ----------------------- */}
                <ContainerBox>
                    <ElementsContainer sx={{ borderBottom: '1px solid rgb(227, 242, 253)' }}>
                        <Typography variant="subtitle2" component="p" color="initial">
                            About Me
                        </Typography>
                    </ElementsContainer>
                    <ElementsContainer sx={{ gap: '1rem' }}>
                        <TextInputStyled
                            id="outlined-multiline-flexible"
                            label="Description"
                            name='description'
                            multiline
                            fullWidth
                            color="secondary"
                            maxRows={4}
                            value={formState.description}
                            onChange={handleForm}
                        />

                    </ElementsContainer>
                </ContainerBox>
                {/* ----------------------------------SOCIAL MEDIA--------------------- */}
                <ContainerBox>
                    <ElementsContainer sx={{ borderBottom: '1px solid rgb(227, 242, 253)' }}>
                        <Typography variant="subtitle2" component="p" color="initial">
                            Social Media
                        </Typography>
                    </ElementsContainer>
                    <ElementsContainer sx={{ gap: '1rem' }}>
                        <SocialsContainer>
                            <BsFacebook style={{ padding: '.1rem', width: "25px", height: "25px", color: "#4267b2" }} />
                            <TextInputStyled
                                id="outlined-multiline-flexible"
                                label="Facebook Profile Url"
                                fullWidth
                                color="secondary"
                                maxRows={4}
                                value=''
                                sx={{ backgroundColor: 'palette.grey[50]', borderRadius: '5px' }}
                            // onChange={handleChange}
                            />
                        </SocialsContainer>
                        <SocialsContainer>
                            <BsGithub style={{ padding: '.1rem', width: "25px", height: "25px" }} />
                            <TextInputStyled
                                id="outlined-multiline-flexible"
                                label="GitHub Profile Url"
                                color='secondary'
                                multiline
                                fullWidth
                                maxRows={4}
                            // value={description}
                            // onChange={handleChange}
                            />
                        </SocialsContainer>
                        <SocialsContainer>
                            <AiFillLinkedin style={{ padding: '.1rem', width: "25px", height: "25px", color: "#0e76a8" }} />
                            <TextInputStyled
                                id="outlined-multiline-flexible"
                                label="LinkedIn Profile Url"
                                color='secondary'
                                multiline
                                fullWidth
                                maxRows={4}
                            // value={description}
                            // onChange={handleChange}
                            />
                        </SocialsContainer>

                        <Button type='submit' variant='contained' color='secondary'>Update Profile</Button>
                    </ElementsContainer>
                </ContainerBox>
            </StyledGrid>
        </form>
    )
}

export default PersonalInfoEdit