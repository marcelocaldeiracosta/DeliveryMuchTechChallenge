const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { routes } = require("./src/routes");
const { config } = require("./src/config");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Definição de rotas
app.get("/healthcheck", (_, res) => res.status(200).send());

app.get("/recipes",
  expressAsyncHandler(routes.recipes.get));

// Executando o servidor
app.listen(config.PORT, config.HOST,
  () => console.log(`Escutando em http://${config.HOST}:${config.PORT}`));
