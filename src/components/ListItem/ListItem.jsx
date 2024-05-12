import './list-item.scss'
import { Button, Card, Chip, Link, Typography } from "@mui/material";
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ListItem = ({data}) => {
    return (
        <div className="list-item-container">
            <div>
                <Typography variant="h6">
                    {data.title}
                </Typography>
                <div className='meta-data'>
                    <span>
                        <ApartmentIcon/>
                        <Typography variant="subtitle2">
                            {data.title}
                        </Typography>
                    </span>
                    <span>
                        <LocationOnIcon/>
                        <Typography variant="subtitle2">
                            {data.location.city}
                        </Typography>
                    </span>
                        <Chip label={data.type}/>
                </div>
            </div>
            <div className='btn-section'>
                <a className='apply-btn' href={data.applyUrl}  target='_blank'>Apply</a>
                <Link href="/k" className='view-link'>
                    View
                </Link>
            </div>
        </div>
    );
}
 
export default ListItem;