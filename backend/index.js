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

app.use("/api/v1", require("./routes/estudante.route.js"));

app.listen(app.get("port"), () => {
    console.log("Servidor a correr na porta "+app.get("port"));
});