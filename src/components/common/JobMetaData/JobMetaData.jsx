import './job-meta-data.scss'
import { Chip, Typography } from "@mui/material";
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const JobMetaDeta = ({data, jobTitleTextVariant='h6', metaTextVariant='subtitle2', className=''}) => {
    return (
        <Link to={`/job/${data.id}`} className='job-meta-data__link' reloadDocument>
            <div className={`job-meta-data ${className}`}>
                <Typography variant={jobTitleTextVariant}>
                    {data.title}
                </Typography>
                <div className='meta-data'>
                    <span>
                        <ApartmentIcon />
                        <Typography variant={metaTextVariant}>
                            {data.department.title}
                        </Typography>
                    </span>
                    <span>
                        <LocationOnIcon />
                        <Typography variant={metaTextVariant}>
                            {data.location.title}
                        </Typography>
                    </span>
                    <Chip label={data.type} />
                </div>
            </div>
        </Link>
    );
}

export default JobMetaDeta;