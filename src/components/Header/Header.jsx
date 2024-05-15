import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return (

        <AppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <Typography variant="caption" component="div" sx={{ flexGrow: 1 }} align="left" fontSize={19}>
                        Jobsoid
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;