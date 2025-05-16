
import { Box, Button, Container, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import React, { useState } from "react";


{/*Inserir uma const Jogadores que insere o nome dos participantes deste quiz*/ }
const InserirNome = () => {
    const [nome, setNome] = useState("");
    const [nomes, setNomes] = useState("Jogadores")
    return (
        <>
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
                            Começar
                        </Button>
                    </Box>
                    <Box sx={{ width: 1 }}>{/*Usa o FolderList do MUI*/}
                        <List sx={{ width: '100%'}}>
                            <ListItem sx={{bgcolor: 'primary.main' }}>
                                <ListItemText primary={nomes} />
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default InserirNome