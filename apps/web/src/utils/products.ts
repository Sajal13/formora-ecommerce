export const getAllProducts = async () => {
  const response = await fetch("https://dummyjson.com/products", {
    method: "GET"
  });

  const data = await response.json();

  return data;
};
