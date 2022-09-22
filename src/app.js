// Importando Modulos
const express = require("express");
const app = express();
const cors = require("cors");
const { PORT } = require("dotenv").config().parsed;

// Ativando Middlewares
app.use(express.json(), cors());

// Rotas
const productsRouter = require("../routes/productsRouter");
app.use("/products", productsRouter);

// Inicializando a Aplicacao
app.listen(PORT, console.log(`Server running at port ${PORT}...`));
