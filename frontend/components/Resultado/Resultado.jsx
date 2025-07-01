// components/Resultado/Resultado.jsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";

const theme = createTheme();

const fallbackData = {
  isCorrect: false,
  question:
    "Qual destas afirmações sobre o Museu Nacional Soares dos Reis é verdadeira?",
  options: [
    "Foi fundado por Dom Pedro IV e é exclusivamente dedicado à arte contemporânea portuguesa.",
    "Está localizado em Lisboa e ocupa o antigo Palácio de Belém.",
    "É o museu público mais antigo de Portugal e está sediado no Porto.",
    "É um museu ao ar livre com esculturas modernas espalhadas por jardins botânicos.",
  ],
  correctIdx: 2,
  chosenIdx: 0,
};

const Resultado = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // dados vindos do navigate() ou (em dev) o fallback
  const { isCorrect, question, options, correctIdx, chosenIdx } =
    state ?? fallbackData;

  /* ---------- NOVO: escolhe o fundo ---------- */
  const bgUrl = isCorrect ? "/bgcerto.jpg" : "/bgerrado.jpg";

  const primaryColor = isCorrect ? "#4CAF50" : "#F44336";
  const title        = isCorrect ? "CORRETO" : "ERRADO";

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url('${bgUrl}')`,   /* ← aqui muda o fundo */
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        {/* Cartão central */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "90%", md: "60%" },
            maxWidth: 900,
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            overflow: "hidden",
            p: { xs: 3, md: 6 },
            gap: 3,
          }}
        >
          {/* Título */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              letterSpacing: 6,
              color: primaryColor,
              textAlign: "center",
              width: "90%"
            }}
          >
            {title}
          </Typography>

          {/* Pergunta */}
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, color: "black" }}
          >
            {question}
          </Typography>

          {/* Opções */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {options.map((op, idx) => {
              const isRight   = idx === correctIdx;
              const isChosen  = idx === chosenIdx;
              let borderColor = "black";
              if (isRight) borderColor = "#4CAF50";
              else if (isChosen && !isCorrect) borderColor = "#F44336";

              return (
                <Box
                  key={idx}
                  sx={{
                    border: `2px solid ${borderColor}`,
                    borderRadius: "0 20px 20px 0",
                    px: 2,
                    py: 1.5,
                    fontWeight: 500,
                    color: borderColor,
                    textAlign: "left",
                  }}
                >
                  {op}
                </Box>
              );
            })}
          </Box>

          {/* Botão */}
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              variant="contained"
              onClick={() => navigate("/pergunta")}
              sx={{
                borderRadius: "20px",
                px: 4,
                backgroundColor: "black",
                color: "white",
                textTransform: "none",
              }}
            >
              CONTINUAR
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Resultado;

