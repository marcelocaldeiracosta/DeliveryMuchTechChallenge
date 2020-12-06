const axios = require("axios");
jest.mock("axios");


test("test-recipe-more-3-ingredients", async () => {
  axios.get.mockResolvedValue({ "status": 400, "error":"Só poderão ser enviados no máximos 3 ingredientes por pesquisa" });
});


test("test-recipe-3-ingredients", async () => {
  axios.get.mockResolvedValue({ "status": 200, "error":"" });
});
