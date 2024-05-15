import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/apis";

const SelectWrapper = ({ label, value, setValue, api, setFilters, filters }) => {

    const [filtersList, setFiltersList] = useState([]);
    let [filtersObjWithIdAsKey, setFiltersObjWithIdAsKey] = useState()

    useEffect(() => {
        fetchFiltersList();
    }, [])

    useEffect(() => {
        if (filtersList) {
            const obj = {}
            filtersList.map(filter => {
                obj[filter.id] = filter;
            })
            setFiltersObjWithIdAsKey(obj);
        } else {
            setFiltersObjWithIdAsKey(null)
        }

    }, [filtersList])

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
        const value = event.target.value
        setValue(value);
        const filter = { ...filters };
        filter[label] = filtersObjWithIdAsKey[value];
        setFilters(filter)
    };

    return (
        <FormControl style={{ width: '33%', backgroundColor: 'white' }}>
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
                        <MenuItem value={item.id} key={item.id}>{item.title}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
}

export default SelectWrapper;