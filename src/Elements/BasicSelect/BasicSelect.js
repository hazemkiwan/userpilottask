import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const BasicSelect = (props) => {
    const {value, onSelectChange, className, id, noneOption, data, label} = props
    return (
        <FormControl>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                value={value} 
                onChange={onSelectChange} 
                labelId={id}
                className= {className}
            >
                {noneOption && <MenuItem value=""><em>None</em></MenuItem>}
                {data.map((row, key) => {
                    return (<MenuItem value={row.value} key={key}>{row.name}</MenuItem>)
                })}
            </Select>
        </FormControl>
    )
}

export default BasicSelect