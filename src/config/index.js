const dotenv = require("dotenv");
dotenv.config();

const config = {
  HOST: process.env.SERVER_HOST || "localhost",
  PORT: process.env.SERVER_PORT != null ? Number(process.env.SERVER_PORT) : 5678,
  API_RECIPE: process.env.API_RECIPE || "http://www.recipepuppy.com/api/",
  API_GLIPHY: process.env.API_GLIPHY || "https://api.giphy.com/v1/gifs/search",
  API_KEY_GLIPHY: process.env.API_KEY_GLIPHY || "16YaRZLTubS07GpSMq3QnjHyQ0Qj5EGK"
};

module.exports = {
  config
};