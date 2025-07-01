
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ResponsiveAppBar from "../NavBar/NavBar";

const CodigoVerificacao = () => {
    const [codigoQuiz, setCodigoQuiz] = useState("");
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <ResponsiveAppBar />
                <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography component="h1" variant="h5">Código do quiz</Typography>
                        {/* stack erros para depois*/}
                        <TextField
                            id="codigoQuiz"
                            label="CodigoQuiz:"
                            name="codigoQuiz"
                            type="codigoQuiz"
                            value={codigoQuiz}
                            onChange={(e) => setCodigoQuiz(e.target.value)}
                            required
                            fullWidth
                            sx={{ mt: 2 }}
                        />
                        <Link href="/inserir-nome">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}>
                                Entrar
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default CodigoVerificacao