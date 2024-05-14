import { Chip, Typography } from "@mui/material";
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const JobMetaDeta = ({data, jobTitleTextVariant='h6', metaTextVariant='subtitle2'}) => {
    return (
        <div className="job-meta-data">
            <Typography variant={jobTitleTextVariant}>
                {data.title}
            </Typography>
            <div className='meta-data'>
                <span>
                    <ApartmentIcon />
                    <Typography variant={metaTextVariant}>
                        {data.title}
                    </Typography>
                </span>
                <span>
                    <LocationOnIcon />
                    <Typography variant={metaTextVariant}>
                        {data.location.city}
                    </Typography>
                </span>
                <Chip label={data.type} />
            </div>
        </div>
    );
}

export default JobMetaDeta;