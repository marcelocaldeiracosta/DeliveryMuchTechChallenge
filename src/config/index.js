const dotenv = require("dotenv");
dotenv.config();

const config = {
  HOST: process.env.SERVER_HOST || "localhost",
  PORT: process.env.SERVER_PORT != null ? Number(process.env.SERVER_PORT) : 5678,
  API_RECIPE: process.env.API_RECIPE || "http://www.recipepuppy.com/api",
  API_GLIPHY: process.env.API_GLIPHY || "http://api.giphy.com/v1/gifs/search"
};

module.exports = {
  config
};