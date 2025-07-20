
import { Box, Button, Container, Link, Stack, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import ResponsiveAppBar from "../NavBar/NavBar";
import { AuthContext } from "../../src/contexts/AuthContext";



const CodigoVerificacao = () => {

    const [codigo_qr, setCodigoQr] = useState("");
    const [idEvento, setIdEvento] = useState(null)


    const nav = useNavigate();
    const { enterQrCode, token } = useContext(AuthContext);

    console.log("enterQrCode function:", enterQrCode);

    const entrarNoEvento = async (e) => {
        e.preventDefault();
        try {
            const dados = await enterQrCode(codigo_qr);
            console.log("enterQrCode enviou:", dados);

            setIdEvento(dados.evento.id);
            localStorage.setItem("token", token);
        } catch (error) {
            console.error(error);
            alert("Código introduzido incorreto");
        }
    };

    useEffect(() => {
        if (token && idEvento) {
            nav(`/inserir-nome/${idEvento}`);
        }
    }, [token, idEvento, nav]);

    return (
        <Container component="main" maxWidth="xs">
            <ResponsiveAppBar />
            <Box maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
                <Box component="form" onSubmit={entrarNoEvento} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography component="h1" variant="h5">Código do quiz</Typography>
                    {/* stack erros para depois*/}
                    <TextField
                        id="codigo_qr"
                        label="codigo_qr:"
                        name="codigo_qr"
                        type="codigo_qr"
                        value={codigo_qr}
                        onChange={(e) => setCodigoQr(e.target.value)}
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
            </Box>
        </Container>
    )
}

export default CodigoVerificacao