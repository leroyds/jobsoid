import './listing.scss'
import { useEffect, useState } from "react";
import { API, BASE_URL } from "../../constants/apis";
import ListItem from "../ListItem/ListItem";
import DepartmentListitem from "../DepartmentListItem/DepartmentListitem";
import { Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SelectWrapper from '../SelectWrapper/SelectWrapper';
import { getFilterParameters } from '../../utils/utils';
import FilterLabel from '../FilterLabel/FilterLabel';

function ListingContainer() {
    const [jobsList, setJobsList] = useState([]);
    const [jobsCount, setJobsCount] = useState(0);
    const [filters, setFilters] = useState();

    const [search, setSearch] = useState('');
    const [department, setDepartment] = useState('');
    const [location, setLocation] = useState('');
    const [functionValue, setFunctionValue] = useState('');
    const [isSearchActive, setIsSearchActive] = useState('');

    useEffect(() => {
        fetchData();
    },[]);

    useEffect(() => {
        fetchData();
    }, [department, location, functionValue, isSearchActive, isSearchActive])

    const fetchData = function () {
        fetch(`${BASE_URL}${API.LISTING.GET_JOBS}${getFilterParameters(department, location, functionValue, search)}`)
        .then(response => {
            localStorage.setItem('jobsListing', response)
            return response.json();
        })
        .then(data => {
            const dataObj = {};
            setJobsCount(data.length);
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

    const onSearch = () => {
        setIsSearchActive(true);
    }

    const clearFilter = (label) => {
        if(label === 'Department') {
            setDepartment('')
        }
        if(label==='Location') {
            setLocation('')
        }
        if(label==='Function') {
            setFunctionValue('')
        }
        if(label==='search'){
            setSearch('');
            setIsSearchActive(false);
        }
    }

    const clearAll = () => {
        setDepartment('');
        setLocation('');
        setFunctionValue('');
        setSearch('');
        setIsSearchActive(false);
    }

    return (
        <Container  className="listing-container">
            <div className='listing-container__filters'>
                <TextField
                    className='listing-container__search'
                    label="Search for job"
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => {
                        if(e.key==='Enter') onSearch()
                    }}
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={onSearch}>
                                <SearchIcon />
                            </IconButton>
                        ),
                    }}
                    style={{backgroundColor: 'white'}}
                />
                <div className='listing-container__filters__select-container'>
                    <SelectWrapper
                        label='Department'
                        value={department}
                        setValue={setDepartment}
                        api={API.LISTING.GET_DEPARTMENTS}
                        filters={filters}
                        setFilters={setFilters}
                    />
                    <SelectWrapper
                        label='Location'
                        value={location}
                        setValue={setLocation}
                        api={API.LISTING.GET_LOCATIONS}
                        filters={filters}
                        setFilters={setFilters}
                    />
                    <SelectWrapper
                        label='Function'
                        value={functionValue}
                        setValue={setFunctionValue}
                        api={API.LISTING.GET_FUNCTIONS}
                        filters={filters}
                        setFilters={setFilters}
                    />
                </div>
            </div>

            {
                (isSearchActive || department || location || functionValue) &&
                <div className='listing-container__filters box'>
                    <div>
                        <FilterLabel
                            filterCheckOn={department}
                            filters={filters}
                            label={'Department'}
                            clearFilter={clearFilter}
                        />

                        <FilterLabel
                            filterCheckOn={location}
                            filters={filters}
                            label={'Location'}
                            clearFilter={clearFilter}
                        />

                        <FilterLabel
                            filterCheckOn={functionValue}
                            filters={filters}
                            label={'Function'}
                            clearFilter={clearFilter}
                        />

                        <FilterLabel
                            isSearch={true}
                            filterCheckOn={isSearchActive}
                            search={search}
                            clearFilter={clearFilter}
                        />
                    </div>
                    <Button onClick={clearAll}>
                        clear All
                    </Button>
                </div>
            }
            

            <div className="listing-container__listing">
                {
                    jobsCount > 0 ? 
                        Object.keys(jobsList).map(key => {
                            return <DepartmentListitem key={key} data={jobsList[key]}/>
                        })
                        :
                        <Typography variant='h6'>
                            No Results Found
                        </Typography>
                }
            </div>
        </Container>
    );
}

export default ListingContainer;