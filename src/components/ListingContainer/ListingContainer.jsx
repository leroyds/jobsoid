import './listing.scss'
import { useEffect, useState } from "react";
import { API, BASE_URL } from "../../constants/apis";
import ListItem from "../ListItem/ListItem";
import DepartmentListitem from "../DepartmentListItem/DepartmentListitem";

function ListingContainer() {
    const [jobsList, setJobsList] = useState([]);


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
        <div className="listing-container">
            {
                Object.keys(jobsList).map(key => {
                    return <DepartmentListitem key={key} data={jobsList[key]}/>
                })
            }
        </div>
    );
}

export default ListingContainer;