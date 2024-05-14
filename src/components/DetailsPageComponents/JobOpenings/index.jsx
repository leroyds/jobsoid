import { useEffect, useState } from "react";
import { API, BASE_URL } from "../../../constants/apis";
import TitleWithUnderline from "../../common/TitleWithUnderline/TitleWithUnderline";

const JobOpenings = ({className, departmentId}) => {
    const [openings, setOpenings] = useState()
    useEffect(()=>{
        fetch(`${BASE_URL}${API.LISTING.GET_JOBS}?dept=${departmentId}`)
        .then(res=>{
            const response =  res.json();
            setOpenings(response);
        })
    }, [])

    return (
        <>
            {
                openings &&
                <div className={className}>
                    <TitleWithUnderline variant="h6" text='OTHER JOB OPENINGS'/>
                </div>
            }
        </>
    );
}
 
export default JobOpenings;