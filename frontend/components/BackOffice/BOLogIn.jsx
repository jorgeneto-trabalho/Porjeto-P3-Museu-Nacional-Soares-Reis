import { Box, Button, Container, List, ListItem, ListItemText, TextField, Typography, createTheme, ThemeProvider, Input, Link, CircularProgress, FormControlLabel, Checkbox } from "@mui/material";
import React, { useContext, useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f50b5',
    },
  },
});

const BOLogin = () => {
    return (
        <ThemeProvider theme = {theme}>
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "white",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexGrow: 1,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "60vw",
                        height: "95%",
                        justifyContent: "center",
                        alignItems: "center",
                        ml: 5,
                        mr: 5,
                    }}
                >
                    <Box
                    sx={{
                        display: "flex",
                        width: "60vw",
                        height: "95%",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        ml: 5,
                        mr: 5,
                        flexDirection: 'column'
                    }}
                >
                    {/*Logo-----------------------------------------------*/}
                    <Box
                        sx={{
                            display: "flex",
                            width: "15%",
                            height: "15%",
                            backgroundImage: "url('/logo_mnsr 1.png')",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            flexGrow: 1,
                            borderRadius: "40px",

                        }}
                    />
                    {/*Formulario----------------------------------------*/}
                    <Box
                        sx={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            justifyContent: "top",
                            alignItems: "left",
                            flexDirection: "column",
                            ml: 6,
                            mr: 6,
                            mt: 5
                        }}
                    >
                        {/*Título*/}
                        <Typography
                            variant="h1"
                            sx={{
                                color: "black",
                                textAlign: "left",
                                fontWeight: 'bold'
                            }}
                        >
                            Bem Vindo <br/> Faz já o teu login
                        </Typography>
                        {/*Subtitulo*/}
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#555555",
                                textAlign: "left",

                            }}
                        >
                            Hey, olá de novo, faz já login para criares e editares
                        </Typography>
                        {/*Email*/}
                        <TextField
                            id="email"
                            label="Email"
                            name="email"
                            type="email"
                            //value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            sx={{ mt: 6, width: "70%" }}
                        />
                        {/*Palavra Chave*/}
                        <TextField
                            id="palavraChave"
                            label="Palavra-Chave"
                            name="palavraChave"
                            type="palavraChave"
                            //value={palavraChave}
                            onChange={(e) => setPalavraChave(e.target.value)}
                            required
                            sx={{ mt: 2, width: "70%" }}
                        />
                        {/*Lembrar de mim*/}
                        <FormControlLabel 
                            control={<Checkbox defaultChecked color="default"/>} 
                            label="Lembrar de mim"
                            sx={{color: "black", mt: 1}}
                        />
                        {/*Button*/}
                        <Button 
                            variant="contained"
                            sx={{
                                backgroundColor: "#0f7e8dff",
                                fontWeight: 'bold',
                                mt: 6,
                                width: "14%",
                                height: "7%"
                            }}
                            
                        >
                            Entrar
                        </Button>
                    </Box>
                </Box>
                    
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        width: "40vw",
                        height: "95%",
                        backgroundImage: "url('/woman-museum-looking-painting.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        justifyContent: "center",
                        alignItems: "center",
                        flexGrow: 1,
                        borderRadius: "40px",
                        mr: 3
                    }}
                />
            </Box>
        </ThemeProvider>
    )}

export default BOLogin