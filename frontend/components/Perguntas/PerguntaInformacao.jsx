import { Box, Button, Typography, ThemeProvider, createTheme,} from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f50b5",
    },
  },
});

const PerguntaLayout = () => {
    const [perguntaAtual] = useState(0);
    
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: "url('/bgrosa.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
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
                            color: "black",
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
                                borderLeft: perguntaAtual === i ? "7px solid black" : "7px solid rgba(0,0,0,0.1)",
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
                        width: "55vw",
                        height: "60vh",
                        background: "rgba(253, 253, 253, 0.27)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        border: "5px solid white",
                        borderLeft: "none",
                        p: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                    }}
                >
                    <Box sx={{height: "90%"}}>
                        {/* Pergunta */}
                        <Typography
                            variant="h4"
                            sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            mb: "8%",
                            maxWidth: "100%",
                            color: "black",
                            textAlign: "left",
                            justifyContent: "top",
                            }}
                        >
                            Qual destas afirmações sobre o Museu Nacional Soares dos Reis é verdadeira?
                        </Typography>

                        {/* Opções */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%", maxWidth: "100%" }}>
                            {[
                            "Foi fundado por Dom Pedro IV e é exclusivamente dedicado à arte contemporânea portuguesa.",
                            "Está localizado em Lisboa e ocupa o antigo Palácio de Belém.",
                            "É o museu público mais antigo de Portugal e está sediado no Porto.",
                            "É um museu ao ar livre com esculturas modernas espalhadas por jardins botânicos.",
                            ].map((opcao, idx) => (
                            <Box
                                key={idx}

                                sx={{
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
                            >
                                {opcao}
                            </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Botão */}
                    <Box sx={{height: "10%", justifyContent: "center",alignItems: "center", display: "flex",}}>
                        <Button
                            variant="contained"    
                            sx={{
                                height: "70%",
                                borderRadius: "20px",
                                px: 4, 
                                backgroundColor: "#F292C4", 
                                color: "black", 
                                textTransform: "none",
                                
                            }}
                        >
                            RESPONDER
                        </Button>
                    </Box>
                                    </Box>
                                </Box>
        </ThemeProvider>
    );
};

export default PerguntaLayout;