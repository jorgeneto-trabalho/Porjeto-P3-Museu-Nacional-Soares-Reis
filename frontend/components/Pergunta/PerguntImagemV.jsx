import { Box, Button, Typography, ThemeProvider, createTheme, Grid, ButtonGroup, Link, Avatar, Modal } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";

const PerguntaImagemV = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [respostaSelecionada, setrespostaSelecionada] = useState(0);

    return (
        <>
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('/bgverde.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                }}
            >
                {/*sidebar*/}
                <Box
                    sx={{
                        display: "flex",
                        top: 0,
                        left: 0,
                        width: "15vw",
                        height: "100vh",
                        background: "rgba(253, 253, 253, 0.71)",
                        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "left",
                        gap: 1,
                        p: 12,
                        position: "relative"

                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "4px",
                            height: "100%",
                            backgroundColor: "black",
                            borderRadius: "10px 0 0 10px",
                        }}
                    />

                    <Typography
                        variant="h4"
                        sx={{
                            mb: 3,
                            fontWeight: "bold",
                            color: "#3E5376",
                            textAlign: "left",
                            letterSpacing: "6px"
                        }}
                    >
                        PROGRESSO
                    </Typography>

                    {Array.from({ length: 10 }).map((_, i) => (
                        <Box
                            key={i}
                            sx={{
                                width: "100%",
                                height: "6%",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "0 20px 20px 0",
                                backgroundColor: "#fff",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                borderLeft: "7px solid rgba(0,0,0,0.1)",
                            }}
                        >

                            <Typography
                                sx={{
                                    paddingLeft: i === 0 ? 1.5 : 2,
                                    fontSize: "0.85rem",
                                    fontWeight: 500,
                                    width: "100%",
                                    color: "black",
                                    textAlign: "left"
                                }}
                            >
                                PERGUNTA {i + 1}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/*conteudo*/}
                <Box
                    sx={{
                        width: "55%",
                        height: "60%",
                        background: "rgba(253, 253, 253, 0.27)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        border: "5px solid white",
                        borderLeft: "none",
                        p: 10,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "left",
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        {/* Pergunta */}
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                textAlign: "left",
                                mb: "4%",
                                maxWidth: "80%",
                                color: "black",
                                justifyContent: "top",
                            }}
                        >
                            Qual das seguintes afirmações sobre o retrato de Aurélio de Sousa, exposto no Museu Nacional Soares dos Reis, é verdadeira?
                        </Typography>

                        {/* Opções */}
                        <Grid container sx={{ gap: 1, width: "100%", maxWidth: "100%" }}>
                            {[
                                "A figura está de perfil e destaca-se pela paisagem natural ao fundo.",
                                "A composição simétrica e frontal destaca-se pelo casaco vermelho e fundo negro.",
                                "A obra retrata uma paisagem familiar com múltiplas figuras femeninas.",
                                "Foi pintada por sua irmã, Sofia de Souza e representa uma camponesa portuguesa.",
                            ].map((opcao, idx) => (
                                <Grid item
                                    key={idx}
                                    sx={{
                                        maxWidth: "90%",
                                        minWidth: "90%",
                                        border: "2px solid black",
                                        borderRadius: "0 20px 20px 0",
                                        px: 2,
                                        py: 1.5,
                                        fontWeight: 500,
                                        backgroundColor: "transparent",
                                        borderLeft: "5px solid black",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        color: "black",
                                        "&:hover": {
                                            background: "rgba(253, 253, 253, 0.64)",
                                            borderLeft: "2px solid black"
                                        },
                                    }}
                                    onClick={() => setrespostaSelecionada({ idx })}
                                >
                                    {opcao}
                                </Grid>
                            ))}
                        </Grid>
                        {/* Botão */}
                        <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                            <Link href="/resultado">
                                <Button
                                    variant="text"
                                    sx={{
                                        height: "70%",
                                        borderRadius: "20px",
                                        px: 4,
                                        color: "black",
                                        textTransform: "none",
                                        fontSize: 20
                                    }}
                                >
                                    RESPONDER
                                </Button>
                            </Link>
                        </Box>

                    </Box>
                    <Button onClick={handleOpen} sx={{ maxWidth: "70%", maxHeight: "70%" }} > {/* <<< Para alterar o tamanho da imagem, muda-se aqui */}
                        <img src="/Autorretrato_AureliaSouza.jpg" width={"auto"} height={"100%"}/>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{
                                backdropFilter: "blur(5px)",
                                WebkitBackdropFilter: "blur(5px)"
                            }}
                        >
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 400,


                            }}>
                                <img src="/Autorretrato_AureliaSouza.jpg" height={"auto"} width={"100%"} />
                            </Box>
                        </Modal>
                    </Button>
                </Box>

            </Box >
        </>
    );
};

export default PerguntaImagemV;