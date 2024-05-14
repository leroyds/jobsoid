import { useEffect } from "react";
import { API, BASE_URL } from "../../../constants/apis";

const JobOpenings = ({className, departmentId}) => {
    useEffect(()=>{
        fetch(`${BASE_URL}${API.LISTING.GET_JOBS}?dept=${departmentId}`)
        .then(res=>{
            console.log(res);
        });
    }, [])

    return (
        <div className={className}>
                     
        </div>
    );
}
 
export default JobOpenings;