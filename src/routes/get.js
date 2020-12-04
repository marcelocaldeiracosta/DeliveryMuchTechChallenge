const { deliveryMuchController } = require("../controllers/delivery-much-controller");

const getRecipes = async (req, res) => {
  const { i } = req.query;
  const ingredientes = i != null ? i.split(",") : [];

  if (ingredientes.length > 3) {
    res.status(400).send("Só poderão ser enviados no máximos 3 ingredientes por pesquisa");
    return;
  }
  res.status(200).send("OK");

};

module.exports = {
  getRecipes
}