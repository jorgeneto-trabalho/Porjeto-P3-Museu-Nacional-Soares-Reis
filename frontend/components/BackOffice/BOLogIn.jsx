import { Link as RouterLink, useNavigate } from "react-router-dom";

import React, { useEffect, useContext, useState } from "react";
import { Alert, AlertTitle, Avatar, Box, Button, Checkbox, CircularProgress, Container, CssBaseline, FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import { AuthContext } from "../../src/contexts/AuthContext";

const BOLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [load, setLoad] = useState(false);
    const [message, setMessage] = useState("");
    const [remember, setRemember] = useState(false);

    const nav = useNavigate();
    const { token, login } = new useContext(AuthContext);

    async function HandleLogin(e) {
        e.preventDefault();
        setMessage("");
        setLoad(true);

        try {
            await login(email, password);
        } catch (error) {
            setMessage("Erro ao autenticar o utilizador.");
        } finally {
            setLoad(false);
        }
    }

    useEffect(() => {
        if (token) {
            nav("/backoffice/eventos");
        }
    }, [token, nav]);

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    borderRadius: 3,
                    boxShadow: 3,
                    padding: 4,
                }}
            >
                <Stack sx={{ width: "100%" }} spacing={2}>
                    {message && (
                        <Alert severity="error" variant="filled">
                            <AlertTitle>Ocorreu um erro</AlertTitle>
                            <strong>{message}</strong>
                        </Alert>
                    )}
                </Stack>
                <Avatar sx={{ m: 1, bgcolor: "primary.main", width: 56, height: 56 }} />
                <Typography component="h1" variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    Autenticação
                </Typography>
                <Box component="form" onSubmit={HandleLogin} noValidate sx={{ mt: 1, width: "100%" }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        type="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                        sx={{ "& .MuiInputBase-root": { borderRadius: 2 } }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        sx={{ "& .MuiInputBase-root": { borderRadius: 2 } }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                                color="primary"
                            />
                        }
                        label="Remember me"
                        sx={{ mt: 1 }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            py: 1.5,
                            fontWeight: 600,
                            borderRadius: 2,
                            fontSize: "1rem",
                            boxShadow: 2,
                        }}
                        disabled={load}
                        aria-label="Entrar"
                    >
                        {load ? <CircularProgress size={24} color="inherit" /> : "Entrar"}
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}


export default BOLogin