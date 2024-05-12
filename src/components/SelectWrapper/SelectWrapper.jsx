import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/apis";

const SelectWrapper = ({label, value, setValue, api}) => {

    const [filtersList, setFiltersList] = useState([]);

    useEffect(() => {
        fetchFiltersList();
    }, [])

    const fetchFiltersList = () => {
        fetch(`${BASE_URL}${api}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setFiltersList(data);
        })
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
            <Select
                value={value}
                label={label}
                onChange={handleChange}
                labelId={`${label}-select-label`}
                id={`${label}-select`}
            >
                {
                    filtersList.map(item => (
                        <MenuItem value={item.id}>{item.title}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
}
 
export default SelectWrapper;