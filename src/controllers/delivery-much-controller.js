const { config } = require("../config");
const axios = require("axios");
const { json } = require("body-parser");
let msgError = null;

class DeliveryMuchController {

  constructor() {
  }

  async getGif(title) {
    try {
      const response = await axios.get(config.API_GLIPHY, {
        params: {
          api_key: config.API_KEY_GLIPHY,
          q: title,
          limit: 1
        }
      });
      return response.data.data.length > 0 ? response.data.data[0].images.original.url : "Gif não encontrado";
    } catch(error) {
      throw `Error: ${error}`;
    }
  }

  transformToArray(ingredients) {
    const array = ingredients.split(", ").filter(i => i).sort();
    // Remove duplicados
    return [...new Set(array)];
  }

  async getRecipesWs(ingredients) {
    let receitas = [];
    const response = await axios.get(config.API_RECIPE, {
      params: {
        i: ingredients
      }
    });

    if (response.status !== 200) {
      msgError = `Erro ao pesquisar receitas: ${response.statusText}`;
      return { receitas, msgError };
    }

    const dataReceived =  response.data.results != null ? response.data.results : [];

    // Usado o for por causa do await do getGif
    for (const r of dataReceived) {
      const rTitle = r.title.trim();
      const gif = await this.getGif(rTitle);
      const ingredients = this.transformToArray(r.ingredients);

      receitas.push({
        title: rTitle,
        ingredients,
        link: r.href,
        gif
      });
    }

    receitas = {
      keywords: this.transformToArray(ingredients),
      recipes: receitas
    };

    return { receitas, msgError };
  }
}

module.exports = {
  deliveryMuchController: new DeliveryMuchController()
};