import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import programingLang from '../../../../../../constants/programingLang';
import { Button } from '@mui/material';
import { useState } from 'react';

const capitalize = string => string[0].toUpperCase() + string.slice(1);

const SkillInput = ({ handleAddSkill, setSkillState }) => {


    // console.log(setnew);
    // const skillsForm = (event) => {
    //     setSkillState(event.target.value)
    // }

    return (
        <form onSubmit={handleAddSkill} style={{ display: 'flex', gap: '1rem' }}>
            <Stack flex={1} spacing={2} sx={{ width: '100%' }}>
                <Autocomplete
                    freeSolo
                    id="skills-search-input"
                    disableClearable
                    options={programingLang.map(skill => capitalize(skill))}
                    renderInput={(params) => {
                        { params.inputProps.value && setSkillState(params.inputProps.value) }
                        return <>
                            <TextField
                                {...params}
                                label="Add A New Skill"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        </>
                    }}
                />
            </Stack>
            <Button variant='contained' color='secondary' size='small' type='submit' onClick={handleAddSkill}>Add Skill</Button>
        </form>
    );
}

export default SkillInput