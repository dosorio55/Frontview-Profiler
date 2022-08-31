import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import programingLang from '../../../../../../constants/programingLang';

const capitalize = string => string[0].toUpperCase() + string.slice(1);

const SkillInput = ({  }) => {

    console.log();

    return (
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
    );
}

export default SkillInput