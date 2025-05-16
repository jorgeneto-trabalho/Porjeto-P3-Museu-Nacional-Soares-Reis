
import { Avatar, Box, Button, Container, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person'
import React, { useState } from "react";


{/*Inserir uma const Jogadores que insere o nome dos participantes deste quiz*/ }
const InserirNome = () => {
    const [nome, setNome] = useState("");
    const [nomes, setNomes] = useState("Jogadores")
    return (
        <>
            <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography component="h1" variant="h5">Qual o teu nome?</Typography>
                        {/* stack erros para depois*/}
                        <TextField
                            id="nome"
                            label="Nome:"
                            name="nome"
                            type="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            fullWidth
                            sx={{ mt: 2 }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Entrar
                        </Button>
                    </Box>
                    <Box>{/*Usa o FolderList do MUI*/}
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <PersonIcon />
                                        <ListItemText primary={nomes} />
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItem>

                        </List>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default InserirNome