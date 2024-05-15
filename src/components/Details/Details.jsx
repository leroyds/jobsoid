import './details.scss'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API, BASE_URL } from '../../constants/apis';
import { Container, Typography } from '@mui/material';
import JobOpenings from '../DetailsPageComponents/JobOpenings';
import JobMetaDeta from '../common/JobMetaData/JobMetaData';

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(()=>{
        fetchDetails();
    }, [])

    const fetchDetails = () => {
        fetch(`${BASE_URL}${API.DETAILS_PAGE.GET_JOB}${id}`)
        .then(res=>{
            return res.json();
        })
        .then(res => {
            setDetails(res);
        })
    }

    return (
        <>
            {
                details ?
                    <Container>
                        <div className='details__header'>
                            <Typography variant='h6' align='left' fontWeight={600}>
                                {`${details.department.title} Department at ${details.company} ${details.location.title}`}
                            </Typography>
                            <JobMetaDeta
                                data={details}
                                jobTitleTextVariant={'h3'}
                                metaTextVariant='h6'
                                className='details__job-meta-data'
                            />
                            <a className='details__apply-btn' href={details.applyUrl}  target='_blank'>Apply</a>
                        </div>
                        <div className='details__bottom'>
                            <div className='details__description' dangerouslySetInnerHTML={{__html: details.description}}>
                            </div>
                            <JobOpenings departmentId={details.department.id}/>
                        </div>
                    </Container>
                    :
                    <div></div>
            }
        </>
    );
}
 
export default Details;