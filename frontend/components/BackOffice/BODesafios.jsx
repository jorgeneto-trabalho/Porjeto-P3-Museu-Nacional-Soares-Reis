import { Box, Button, Card, CardActions, Container, FormControl, Grid, Input, InputLabel, List, Modal, TextField, Typography, ListItem, ListItemText, Checkbox, Select, MenuItem, RadioGroup, FormLabel, Radio } from "@mui/material";
import { useState } from "react";

/*Icons*/
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import UploadImages from "../UploadImages/UploadImages";
import { useNavigate } from "react-router-dom";


const BODesafios = () => {

    const nav = useNavigate();

    /*Enviar informação para a base de dados>>>> */

    /*Perguntas */
    const postPerguntas = (e) => {
        e.preventDefault();

        axios.all([
            axios.post({ texto, imagem, pontos })
        ])
    }




    /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
    /*Controla a alteração da pontuação de uma pergunta */
    const [pontos, setPontos] = useState(1);
    const handleChangePontos = (event) => {
        setPontos(event.target.value);
    };

    /*Abre a model principal*/
    const [open, setOpen] = useState(false);
    const handleOpen = () => { if (!open) { setOpen(true) } };
    const handleClose = () => setOpen(false);

    /*Abre a modal para adicionar perguntas*/
    const [openPerguntas, setOpenPerguntas] = useState(false);
    const handleOpenPerguntas = () => { if (!openPerguntas) { setOpenPerguntas(true) } };
    const handleClosePerguntas = () => setOpenPerguntas(false);

    /*Para defenir a pergunta correta de uma resposta */
    const [checkCorreta, setCheckCorreta] = useState(0);



    const [desafioId, setDesafioId] = useState([]);
    const [desafioTexto, setDesafioTexto] = useState([]);
    const [desafioImagem, setDesafioImagem] = useState([]);
    const [desafioPontos, setDesafioPontos] = useState([]);

    const [perguntas, setPerguntas] = useState(["teste", "teste1"])
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
                                                <FormControl sx={{ p: 2, minWidth: 1 }}>
                                                    <InputLabel htmlFor="nome">Nome do desafio</InputLabel>
                                                    <Input id="nome" aria-describedby="Nome-do-desafio" />
                                                </FormControl>
                                                <br />
                                                <FormControl sx={{ p: 2, minWidth: 1 }}>
                                                    <InputLabel htmlFor="codigo">Código para entrar no evento</InputLabel>
                                                    <Input id="codigo" aria-describedby="Código-do-desafio" />
                                                </FormControl>
                                                <br />
                                                <FormControl sx={{ minWidth: 1 }}>
                                                    <TextField
                                                        id="descricao"
                                                        label="Descrição do desafio"
                                                        multiline
                                                        rows={8}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid size={6}>
                                                <Button
                                                    color="white"
                                                    onClick={handleOpenPerguntas}
                                                    sx={{
                                                        backgroundColor: "#a8ada3",
                                                        minWidth: 1
                                                    }}
                                                >
                                                    <AddIcon />
                                                    {/*<<< A modal de adicionar perguntas >>>*/}
                                                    <Modal
                                                        open={openPerguntas}
                                                        aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
                                                    >
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
                                                                        onClick={handleClosePerguntas}
                                                                        sx={{
                                                                            position: 'absolute',
                                                                            top: 0,
                                                                            right: 0
                                                                        }}>
                                                                        <CloseIcon />
                                                                    </Button>
                                                                </Grid>
                                                                <Grid size={4}>
                                                                    {/*Texto da pergunta */}
                                                                    <FormControl sx={{ minWidth: 1, p: 2 }}>
                                                                        <TextField
                                                                            id="texto"
                                                                            label="Texto da pergunta"
                                                                            multiline
                                                                            rows={1}
                                                                        />
                                                                    </FormControl>

                                                                    {/*Pontuação da pergunta*/}
                                                                    <FormControl sx={{ minWidth: 1, p: 2 }}>
                                                                        <InputLabel id="pontos-label">Pontos</InputLabel>
                                                                        <Select
                                                                            labelId="Pontos-da-pergunta"
                                                                            id="pontos"
                                                                            value={pontos}
                                                                            label="Pontos"
                                                                            onChange={handleChangePontos}
                                                                        >
                                                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pontos, index) => (
                                                                                <MenuItem value={pontos}>{pontos}
                                                                                </MenuItem>
                                                                            ))}
                                                                        </Select>
                                                                    </FormControl>

                                                                </Grid>
                                                                {/* UploadImages serve para inserir uma imagem para a pergunta */}
                                                                <Grid size={3}>
                                                                    <UploadImages />
                                                                </Grid>

                                                                {/*<<<Seleção das respostas e escolha da resposta correta>>> */}
                                                                <Grid size={4}>
                                                                    <FormControl sx={{ minWidth: 1, p: 2 }}>
                                                                        <FormLabel id="selecao-repostas">Selecione no botão à esquerda qual a resposta correta</FormLabel>
                                                                        <RadioGroup
                                                                            aria-labelledby="selecao-repostas"
                                                                            name="resposta-correta">
                                                                            <Radio>

                                                                            </Radio>
                                                                            <Radio>

                                                                            </Radio>
                                                                            <Radio>

                                                                            </Radio>
                                                                            <Radio>

                                                                            </Radio>
                                                                        </RadioGroup>
                                                                    </FormControl>
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
                                                        </Container >
                                                    </Modal>
                                                </Button>
                                                <List sx={{ minWidth: 1, maxHeight: "60%", overflow: "auto" }}>
                                                    {perguntas.map((perguntaTexto, index) => (
                                                        <ListItem
                                                            key={index}
                                                            role={undefined}
                                                            button
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
                                                            <Checkbox />
                                                            <ListItemText primary={perguntaTexto} />
                                                        </ListItem>
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