const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require("./config/database");
const port = 5000;

app.set("port", process.env.PORT || port);
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync();

app.use("/api/v1", require("./routes/desafio-pergunta.route"));
app.use("/api/v1", require("./routes/desafio.route"));
app.use("/api/v1", require("./routes/escola.route"));
app.use("/api/v1", require("./routes/estudante.route"));
app.use("/api/v1", require("./routes/evento.route"));
app.use("/api/v1", require("./routes/pergunta-resposta.route"));
app.use("/api/v1", require("./routes/pergunta.route"));
app.use("/api/v1", require("./routes/ranking-evento-estudantes.route"));
app.use("/api/v1", require("./routes/ranking-global-escolas.route"));
app.use("/api/v1", require("./routes/ranking-global-estudantes.route"));
app.use("/api/v1", require("./routes/resposta.route"));
app.use("/api/v1", require("./routes/tentativa.route"));

app.listen(app.get("port"), () => {
    console.log("Servidor a correr na porta "+app.get("port"));
});