const { getRecipes } = require("./get");

const routes = {
  recipes: {
    get: getRecipes
  }
};

module.exports = {
  routes
};