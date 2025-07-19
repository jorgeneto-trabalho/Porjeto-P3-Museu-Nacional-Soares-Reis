
import { Box, Button, Container, Link, Stack, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import ResponsiveAppBar from "../NavBar/NavBar";
import { AuthContext } from "../../src/contexts/AuthContext";

const CodigoVerificacao = () => {

    const [codigo_qr, setCodigoQr] = useState("");
    const [link, setLink] = useState("")

    const nav = useNavigate();
    const { enterQrCode, token } = useContext(AuthContext);

    const entrarNoEvento = async () => {
        try {
            await enterQrCode(codigo_qr);
            setErro(false);
            setLink('/inserir-nome/${dados.data.data.id}');
            localStorage.setItem("token", dados.data.token);
        } catch (error) {
            console.error(error);
            alert("Código introduzido incorreto");
        }
    };

    useEffect(() => {
        if (token) {
            nav({ link });
        }
    }, [token, nav]);

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
                    <Link
                        component={RouterLink}
                        to={link}
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default CodigoVerificacao