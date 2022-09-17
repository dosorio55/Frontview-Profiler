import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import programingLang from '../../../../../../constants/programingLang';
import { Button } from '@mui/material';

const capitalize = string => string[0].toUpperCase() + string.slice(1);

const SkillInput = ({ handleAddSkill }) => {

    console.log();

    return (
        <form onSubmit={handleAddSkill}>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Autocomplete
                    freeSolo
                    id="skills-search-input"
                    disableClearable
                    options={programingLang.map(skill => capitalize(skill))}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Add A New Skill"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
            </Stack>
            <Button variant='contained' color='secondary' size='small' type='submit' onClick={handleAddSkill}>Add Skill</Button>
        </form>
    );
}

export default SkillInput