import { Box, Button, Container, List, ListItem, ListItemText, TextField, Typography, createTheme, ThemeProvider, Input, Link, Chip } from "@mui/material";
import React, { useState } from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BarChartIcon from "@mui/icons-material/BarChart";

const theme = createTheme({
    typography: {
        fontFamily: "Inter, Roboto, sans-serif",
    },
    palette: {
        primary: { main: "#3f50b5" },
    },
});

const podioHeights = {
    1: 90,
    2: 70,
    3: 60,
};

const podioColors = {
    1: "#FFA300", // ouro
    2: "#C0C0C0", // prata
    3: "#CD7F32", // bronze
};

const RankingPage = () => {
    const [nomes, setNomes] = useState([
        "USER#A3057X947",
        "USER#B7013V937",
        "USER#C1057S847",
        "USER#D9957M254",
        "USER#E1107Q354",
        "USER#F3357D947",
        "USER#G2207S124",
        "USER#H6037P987",
    ]);

    const podio = [
        { pos: 2, name: nomes[1] ?? "-" },
        { pos: 1, name: nomes[0] ?? "-" },
        { pos: 3, name: nomes[2] ?? "-" },
    ];

    return (
        <ThemeProvider theme = {theme}>
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: "url('/bgranking.jpg')",
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
                    <Box 
                        sx={{
                            flex: 0.55,
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            p: 0,
                        }}
                    >
                        <BarChartIcon sx={{ position: "absolute", top: 16, right: 16, color: "#FAA300" }} />

                        <Box
                            sx={{
                                width: "100%",
                                height: { xs: "70%", md: "80%" },
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "space-evenly",
                                pb: 0,
                            }}
                        >
                            {podio.map(({ pos, name }) => (
                                <Box
                                    key={pos}
                                    sx={{
                                        position: "relative",
                                        width: { xs: 60, md: 80 },
                                        height: `${podioHeights[pos]}%`,
                                        backgroundColor: podioColors[pos],
                                        borderTopLeftRadius: 2,
                                        borderTopRightRadius: 2,
                                        display: "flex",
                                        alignItems: "flex-start",
                                        justifyContent: "center"
                                    }}
                                >

                                    
                                    {/* troféu */}
                                    <EmojiEventsIcon
                                        sx={{
                                            position: "absolute",
                                            top: -65,
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            fontSize: 28,
                                            color: podioColors[pos],
                                            filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.3))",
                                        }}
                                    />
                                    {/* nome do utilizador */}
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            position: "absolute",
                                            top: -28,
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            fontWeight: 600,
                                            maxWidth: 100,
                                            textAlign: "center",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            color: "black"
                                        }}>
                                        {name}
                                    </Typography>
                                </Box>
                            ))}
                            </Box>
                    </Box>

                    {/* Parte direita - Lista */}
                    <Box 
                        sx={{ 
                            flex: { xs: 0.6, md: 0.45 },
                            p: 3,
                            border: "3px solid white",
                            borderBottomRightRadius: 20,
                            borderTopRightRadius: 20,
                            backdropFilter: "blur(5px)",
                            background: "rgba(255, 255, 255, 0.32)",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <List sx={{ maxHeight: "100%", overflowY: "auto", p: 0 }}>
                            {nomes.map((nome, index) => {
                            const pos = index + 1;

                            const bgByPos = {
                            1: "#FFA300", // ouro
                            2: "#C0C0C0", // prata
                            3: "#CD7F32", // bronze
                            }[pos] || "#000"; // restantes

                            const textColor = pos >= 4 ? "#fff" : "#000";

                            return (
                            <ListItem
                                key={nome}
                                sx={{
                                    mb: 1,
                                    px: 2,
                                    pb: 1,
                                    bgcolor: bgByPos,
                                    color: textColor,
                                    borderTopRightRadius: "25px",
                                    borderBottomRightRadius: "25px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {/* Ícone de troféu para top‑3 */}
                                {pos <= 3 && (
                                <EmojiEventsIcon fontSize="small" sx={{ mr: 1.5, color: textColor }} />
                                )}

                                {/* Nome do jogador */}
                                <ListItemText
                                disableTypography
                                primary={<Typography sx={{ fontWeight: 600 }}>{nome}</Typography>}
                                />

                                {/* Chip com posição */}
                                <Chip
                                label={`#${pos}`}
                                size="small"
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.15)",
                                    color: textColor,
                                    fontWeight: 700,
                                    backdropFilter: "blur(2px)",
                                }}
                                />
                            </ListItem>
                            );
                        })}
                        </List>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )}

export default RankingPage