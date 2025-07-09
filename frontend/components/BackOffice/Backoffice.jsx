import { Box, Button, Container, Drawer, Grid, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link, Outlet } from 'react-router-dom';


const Backoffice = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <Container>
            <Box bgcolor={'white'} sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: 1,
                height: 1
            }}>
                <Button onClick={toggleDrawer(true)} sx={{ position: 'absolute', left: 0 }}>
                    <MenuIcon />
                </Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                        <List>
                            <Grid >
                                <Link to="/backoffice">
                                    <Button>
                                        <ListItemText primary={'Eventos'} />
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link to="/backoffice/desafios">
                                    <Button>
                                        <ListItemText primary={'Desafios'} />
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid>
                                <Link>
                                    <Button >
                                        <ListItemText primary={'Perguntas'} />
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid>
                                <Link>
                                    <Button >
                                        <ListItemText primary={'Respostas'} />
                                    </Button>
                                </Link>
                            </Grid>
                        </List>
                    </Box>
                </Drawer>
                <Outlet />
            </Box>
        </Container>
    )

};

export default Backoffice