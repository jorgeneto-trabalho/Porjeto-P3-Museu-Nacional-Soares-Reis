import { Box, Button, Container, List, ListItem, ListItemText, TextField, Typography, createTheme, ThemeProvider, Input, Link, CircularProgress } from "@mui/material";
import React, { useContext, useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f50b5',
    },
  },
});


const ErroPage = () => {
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
                    p: 2,
                    flexDirection: "column",
                    flexGrow: 1
                }}
            >
                <Typography variant="h1" component="p" sx={{mb: 1, color: '#0D99FF', fontWeight: "bold", letterSpacing: "6px" }}>
                    404
                </Typography>

                <Typography variant="h6" component="p" sx={{ color: '#0D99FF' }}>
                    A página que procura não foi encontrada
                </Typography>
            </Box>
        </ThemeProvider>
    )}
export default ErroPage