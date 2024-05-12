import './department-list.scss'
import { Container, Typography } from "@mui/material";
import ListItem from "../ListItem/ListItem";

const DepartmentListitem = ({data}) => {

    return (
        <Container className="department-container">
            <Typography variant="h4" gutterBottom>
                {data[0].department.title}
            </Typography>
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