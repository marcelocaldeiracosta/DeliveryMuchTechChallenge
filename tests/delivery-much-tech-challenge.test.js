const axios = require("axios");
const { config } = require("../src/config");
jest.mock("axios");


test("test-recipe-more-3-ingredients", async () => {
  axios.get.mockResolvedValue({ "status": 400, "error":"Só poderão ser enviados no máximos 3 ingredientes por pesquisa" });
});


test("test-recipe-3-ingredients", async () => {
  axios.get.mockResolvedValue({ "status": 200, "error":"" });
});
