import { Box, Button, Card, CardActions, Container, FormControl, FormHelperText, Grid, Input, InputLabel, List, Modal, TextField, Typography, ListItem, ListItemText, ListItemButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const BODesafios = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => { if (!open) { setOpen(true) } };
    const handleClose = () => setOpen(false);

    const [desafioId, setDesafioId] = useState([]);
    const [desafioTexto, setDesafioTexto] = useState([]);
    const [desafioImagem, setDesafioImagem] = useState([]);        
    const [desafioPontos, setDesafioPontos] = useState([]);

    const [perguntas, setPerguntas] = useState(["teste", ])
    const [perguntaId, setPerguntaId] = useState("");
    const [perguntaTexto, setPerguntaTexto] = useState("");
    const [perguntaImagem, setPerguntaImagem] = useState();
    const [perguntaPontos, setPerguntaPontos] = useState();


    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'primary.main' }}>
                <Typography variant="h3" color="#2196f3">
                    Desafios
                </Typography>
            </Box>
            <Grid container sx={{ minHeight: 1 }} >
                <Grid size={2}>
                    <Card variant="outlined" >
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button onClick={handleOpen} sx={{ minHeight: "100%", minWidth: "100%" }}>
                                <AddIcon />
                                <Modal
                                    open={open}
                                    aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
                                    sx={{
                                        backdropFilter: "blur(5px)",
                                        WebkitBackdropFilter: "blur(5px)",
                                    }}>
                                    <Container

                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            minHeight: '75%',
                                            maxHeight: "75%",
                                            bgcolor: "white"
                                        }}>
                                        <Grid container spacing={4}>
                                            <Grid size={12}>
                                                <Button
                                                    onClick={handleClose}
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 0
                                                    }}>
                                                    <CloseIcon />
                                                </Button>
                                            </Grid>
                                            <Grid direction={"row"} size={6}>
                                                <FormControl sx={{p:2, minWidth:1}}>
                                                    <InputLabel htmlFor="nome">Nome do desafio</InputLabel>
                                                    <Input id="nome" aria-describedby="Nome-do-desafio" />
                                                </FormControl>
                                                <br />
                                                <FormControl sx={{p:2, minWidth:1}}>
                                                    <InputLabel htmlFor="codigo">Código para entrar no evento</InputLabel>
                                                    <Input id="codigo" aria-describedby="Código-do-desafio" />
                                                </FormControl>
                                                <br />
                                                <FormControl sx={{ minWidth:1}}>
                                                    <TextField
                                                        id="descricao"
                                                        label="Descrição do desafio"
                                                        multiline
                                                        rows={8}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid size={6}>
                                                <Button color="white"
                                                    sx={{
                                                        backgroundColor: "#a8ada3",
                                                        minWidth: 1
                                                    }}
                                                >
                                                    <AddIcon />
                                                </Button>
                                                <List sx={{ minWidth: 1, maxHeight: "60%", overflow: "auto" }}>
                                                    {perguntas.map((perguntaTexto, index) => (
                                                        <ListItemButton
                                                            key={index}
                                                            sx={{
                                                                border: 1,
                                                                backgroundColor: "#fff",
                                                                color: "black",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                px: 2,
                                                                pb: 1,

                                                            }}
                                                        >
                                                            <ListItemText primary={perguntaTexto} />
                                                        </ListItemButton>
                                                    ))}
                                                </List>
                                            </Grid>
                                        </Grid>
                                        <Button
                                            sx={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: "50%",
                                                right: "50%",

                                            }}
                                        > Adicionar </Button>
                                    </Container>
                                </Modal>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid >
        </>
    )
};

export default BODesafios