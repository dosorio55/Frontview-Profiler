import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


const SkillInput = ({ habilities }) => {

    console.log(habilities);

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Autocomplete
                freeSolo
                id="skills-search-input"
                disableClearable
                options={habilities.map(skill => skill)}
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
    );
}

export default SkillInput