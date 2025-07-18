import { Box, Button, List, ListItem, ListItemText, Typography, createTheme, ThemeProvider, Input, Link } from "@mui/material";
import { useEffect, useState } from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f50b5',
        },
    },
});


/*Inserir uma const Jogadores que insere o nome dos participantes deste quiz*/
const InserirNome = () => {

    const [linkResumo, setLinkResumo] = useState("/resumo");
    const [nome, setNome] = useState("");
    const [nomes, setNomes] = useState([]);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        carregarNomes(); // 1ª vez
        const id = setInterval(carregarNomes, 15000); // refresco de 15 s
        return () => clearInterval(id); // limpa ao desmontar
    }, []);

    const carregarNomes = async () => {
        try {
            const resp = await fetch("http://localhost:5000/api/v1/estudante");
            if (!resp.ok) throw new Error("Falha ao obter nomes");
            const lista = await resp.json();
            setNomes(lista.map((e) => e.nome));
        } catch (e) {
            console.error(e);
        }
    };


    const registarNickname = async () => {
        const nomeLimpo = nome.trim();
        if (!nomeLimpo) {
            setErro(true);
            return;
        }

        try {
            const resp = await fetch("http://localhost:5000/api/v1/estudante", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome: nomeLimpo, id_evento: 1 }), // ajuste id_evento se necessário
            });
            if (!resp.ok) throw new Error("Falha ao gravar nickname");
            const dados = await resp.json();

            // Actualiza UI localmente
            setNomes((prev) => [...prev, nomeLimpo]);
            setNome("");
            setErro(false);
            setLinkResumo(`/resumo/${dados.data.estudante.id}`);

            // Se quiseres guardar token para próximas requisições:
            // localStorage.setItem("token", dados.data.token);
        } catch (e) {
            console.error(e);
            alert("Não foi possível registar o nickname.");
        }
    };


    return (
        <ThemeProvider theme={theme}>
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
                    flexGrow: 1
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
                    <Box sx={{ flex: 0.55, p: 4, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <Typography variant="h4" sx={{ mb: 8, fontWeight: "bold", color: "#3E5376", textAlign: "center" }}>
                            NICKNAME
                        </Typography>

                        <Input
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            color="primary"
                            placeholder="Introduza o Nickname"
                            sx={{ width: "80%", mb: 1 }}
                        />
                        {erro && (
                            <Typography
                                variant="caption"
                                sx={{ color: "red", mb: 2, alignSelf: "flex-start", pl: "10%" }}
                            >
                                O nickname não pode estar vazio
                            </Typography>
                        )}

                        <Typography variant="body2" sx={{ mb: 3, textAlign: "center", color: "#34495e" }}>
                            Podes ser criativo, mas não demais.
                        </Typography>

                        <Box textAlign="center">
                            <Link to={linkResumo}>
                                <Button
                                    variant="contained"
                                    onClick={registarNickname}
                                    sx={{ borderRadius: "20px", px: 4, backgroundColor: "#3E5376", color: "B2CFFF", textTransform: "none" }}
                                >
                                    Entrar
                                </Button>
                            </Link>
                        </Box>
                    </Box>

                    {/* Parte direita - Lista */}
                    <Box sx={{ flex: 0.45, backdropFilter: "blur(5px)", background: "rgba(255, 255, 255, 0.32)", p: 3, border: "3px solid white", borderBottomRightRadius: 20, borderTopRightRadius: 20 }}>
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

export default InserirNome
