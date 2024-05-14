import './title-with-underline.scss'
import { Typography } from '@mui/material';

const TitleWithUnderline = ({variant='h4', text, className, marginBottom}) => {
    return (
        <Typography variant={variant} style={{marginBottom}} className={`title-with-underline ${className}`} gutterBottom>
            {text}
        </Typography>
    );
}
 
export default TitleWithUnderline;