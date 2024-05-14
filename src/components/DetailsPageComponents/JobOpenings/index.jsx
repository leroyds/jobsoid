import { useEffect, useState } from "react";
import { API, BASE_URL } from "../../../constants/apis";
import TitleWithUnderline from "../../common/TitleWithUnderline/TitleWithUnderline";
import JobMetaDeta from "../../common/JobMetaData/JobMetaData";

const JobOpenings = ({className, departmentId}) => {
    const [openings, setOpenings] = useState([])
    useEffect(()=>{
        fetch(`${BASE_URL}${API.LISTING.GET_JOBS}?dept=${departmentId}`)
        .then(res=>{
            return res.json();
            
        })
        .then(res => {
            setOpenings(res);
        })
    }, [])

    return (
        <>
            {
                openings &&
                <div className='details__job-openings'>
                    <TitleWithUnderline variant="h6" text='OTHER JOB OPENINGS'/>
                    <div className='details__job-openings__jobs'>
                        {
                            openings.map(job => (
                                <JobMetaDeta
                                    data={job}
                                    jobTitleTextVariant={'overline'}
                                    metaTextVariant={'body2'}
                                />
                            ))
                        }
                    </div>
                </div>
            }
        </>
    );
}
 
export default JobOpenings;