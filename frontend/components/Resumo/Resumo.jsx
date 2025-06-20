import { Box, Button, Container, List, ListItem, ListItemText, TextField, Typography, createTheme, ThemeProvider, Input, Link } from "@mui/material";
import React, { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f50b5',
    },
  },
});


{/*Inserir uma const Jogadores que insere o nome dos participantes deste quiz*/ }
const Resumo = () => {
    const [nomes, setNomes] = useState([]);
    
    return (
        <ThemeProvider theme = {theme}>
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: "url('/bgazul.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                }}
            >
                <Box 
                    sx={{
                        display: "flex",
                        width: "60%",
                        height: "60%",
                        justifyContent: "center",
                        borderRadius: "20px",
                        background: "rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        overflow: "hidden",
                    }}
                >
                    {/*Parte esquerda -Formulário*/}
                    <Box sx={{flex: 0.55, p: 4, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",}}>
                        <Typography variant="h4" sx={{mb: 3, fontWeight: "bold", color: "#3E5376", textAlign: "center"}}>
                            RESUMO
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 8, width: "70%", textAlign: "left", color: "#34495e", justifyContent: "left"}}>
                            Este quiz será em redor da obra que vai pelo nome “As Visitas”. Aqui se encontram X perguntas que testaram a tua atenção durante a expedição realizada. 
                        </Typography>

                        <Box textAlign="center">
                            <Link href="/resumo">
                                <Button
                                    variant="contained"
                                    
                                    sx={{ borderRadius: "20px", px: 4, backgroundColor: "#3E5376", color: "B2CFFF", textTransform: "none"}}
                                >
                                    Começar
                                </Button>
                            </Link>
                        </Box>
                    </Box>

                    {/* Parte direita - Lista */}
                    <Box sx={{ flex: 0.45, backdropFilter: "blur(5px)", background: "rgba(255, 255, 255, 0.32)", p: 3, border: "3px solid white", borderBottomRightRadius: 20, borderTopRightRadius: 20}}>
                        <List sx={{ maxHeight: "100%", overflowY: "auto" }}>
                        {nomes.map((nome, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    mb: 1,
                                    backgroundColor: "#fff",
                                    borderTopRightRadius: "20px",
                                    borderBottomRightRadius: "20px",
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                    color: "black",
                                    display: "flex",
                                    alignItems: "center",
                                    px: 2,
                                    pb: 1,
                                    borderLeft: `5px solid ${["#FFA300", "#FAA3D0", "#8EB291", "#96ADD2"][index % 4]}`,
                                }}
                            >
                                <ListItemText primary={nome} />
                            </ListItem>
                        ))}
                        </List>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Resumo