const { config } = require("../config");
const axios = require("axios");
let msgError = null;

class DeliveryMuchController {

  constructor() {
  }

  async getRecipesWs(ingredients) {
    const uriRecipe = `${config.API_RECIPE}?i=${ingredients}`;
    const response = await axios.get(uriRecipe);

    if (response.status !== 200) {
      msgError = `[WORKER] - Falha ao receber os dados da API de material tradicional: ${response.statusText}`;    
    }

    const receitas = response.data.results != null ? response.data.results : [];
    return { receitas, msgError };
  }
}

module.exports = {
  deliveryMuchController: new DeliveryMuchController()
}