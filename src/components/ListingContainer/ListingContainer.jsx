import './listing.scss'
import { useEffect, useState } from "react";
import { API, BASE_URL } from "../../constants/apis";
import ListItem from "../ListItem/ListItem";
import DepartmentListitem from "../DepartmentListItem/DepartmentListitem";
import { Container, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SelectWrapper from '../SelectWrapper/SelectWrapper';

function ListingContainer() {
    const [jobsList, setJobsList] = useState([]);
    const [department, setDepartment] = useState('');
    const [location, setLocation] = useState('');
    const [functionValue, setFunctionValue] = useState();

    useEffect(() => {
        fetchData();
        if(!localStorage.getItem('jobsListing')){
        }
    },[]);

    const fetchData = function () {
        fetch(`${BASE_URL}${API.LISTING.GET_JOBS}`)
        .then(response => {
            localStorage.setItem('jobsListing', response)
            return response.json();
        })
        .then(data => {
            const dataObj = {}
            if(data) {
                data.map(job => {
                    if(dataObj[job.department.id]) {
                        dataObj[job.department.id].push(job);
                    } else {
                        dataObj[job.department.id] = [job]
                    }
                })
            }
            setJobsList(dataObj);
        })
    }

    

    return (
        <Container  className="listing-container">
            <TextField
                className='listing-container__search'
                label="Search for job"
                variant="outlined"
                // value={searchText}
                // onChange={handleChange}
                // onKeyPress={handleKeyPress}
                InputProps={{
                    endAdornment: (
                        <IconButton onClick={''}>
                            <SearchIcon />
                        </IconButton>
                    ),
                }}
            />
            <div>
                <SelectWrapper
                    label='Department'
                    value={department}
                    setValue={setDepartment}
                    api={API.LISTING.GET_DEPARTMENTS}
                />
                <SelectWrapper
                    label='Location'
                    value={location}
                    setValue={setLocation}
                    api={API.LISTING.GET_LOCATIONS}
                />
                <SelectWrapper
                    label='Function'
                    value={functionValue}
                    setValue={setFunctionValue}
                    api={API.LISTING.GET_FUNCTIONS}
                />
            </div>
            

            <div className="listing-container__listing">
                {
                    Object.keys(jobsList).map(key => {
                        return <DepartmentListitem key={key} data={jobsList[key]}/>
                    })
                }
            </div>
        </Container>
    );
}

export default ListingContainer;