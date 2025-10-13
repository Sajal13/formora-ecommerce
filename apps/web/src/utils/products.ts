export const getAllProducts = async () => {
  const response = await fetch("https://dummyjson.com/products", {
    method: "GET"
  });

  const data = await response.json();

  return data;
};

export const getProductById = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "GET"
  });

  const data = await response.json();
  console.log(data);
  return data;
};
