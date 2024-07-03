const { default: SummaryApi } = require("../common");

const fetchCategoryAllProduct = async (category) => {
  const response = await fetch(SummaryApi.categoryAllProduct.url, {
    method: SummaryApi.categoryAllProduct.method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      category: category,
    }),
  });

  const dataResponse = await response.json();

  return dataResponse;
};

export default fetchCategoryAllProduct;
