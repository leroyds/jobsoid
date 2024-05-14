import './list-item.scss'
import { Button, Card, Chip, Typography } from "@mui/material";
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import JobMetaDeta from '../common/JobMetaData/JobMetaData';

const ListItem = ({data}) => {
    return (
        <div className="list-item-container">
            <JobMetaDeta
                data={data}
                jobTitleTextVariant='h6'
            />
            <div className='btn-section'>
                <a className='apply-btn' href={data.applyUrl}  target='_blank'>Apply</a>
                <Link to={`job/${data.id}`} className='view-link'>
                    View
                </Link>
            </div>
        </div>
    );
}
 
export default ListItem;