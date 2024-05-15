import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (

        <AppBar position="fixed" className="header">
            <Container>
                <Toolbar disableGutters>
                    <Typography variant="caption" component="div" sx={{ flexGrow: 1 }} align="left" fontSize={19}>
                        <Link to='/'>
                            Jobsoid
                        </Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;