import './department-list.scss'
import { Container, Typography } from "@mui/material";
import ListItem from "../ListItem/ListItem";
import TitleWithUnderline from '../common/TitleWithUnderline/TitleWithUnderline';

const DepartmentListitem = ({data}) => {

    return (
        <Container className="department-container">
            <TitleWithUnderline variant='h4' text={data[0].department.title} marginBottom='40px'/>

            <div className='department-container__listing'>
                {
                    data.map(job => (
                        <ListItem data={job} key={job.id}/>
                    ))
                }
            </div>
        </Container>
    );
}
 
export default DepartmentListitem;