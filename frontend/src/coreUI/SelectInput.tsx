import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent} from '@mui/material/Select';
import { UsersContext } from '../components/userView/UsersViewWrapper';
import moment from 'moment'

type Props = {
    options: string[]
    handleFilter: (data: any) => void;
    name: string;
    title: string;
}

const SelectInput = ({ title = '', name = '', options = [], handleFilter = (data: any) => console.log('selected: ', data) }) => {
    const [, , , filter] = useContext(UsersContext)

    const handleChange = (e: SelectChangeEvent) => {
        handleFilter({ [e.target.name]: e.target.value })
    };
    return (
        <Box sx={{ width: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter[name]}
                    label={title}
                    onChange={handleChange}
                    name={name}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {options.map((option: any, i: number) => (
                        <MenuItem value={option.country} key={i}>{option.country}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectInput