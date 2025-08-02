export const rootPaths = {
  root: "/",
  productsRoot: "products",
  ordersRoot: "orders",
  customersRoot: "customer",
  inventory: "inventory",
  promotions: "promotions"
};

export default {
  overview: `${rootPaths.root}/overview`,
  salesAnalytics: `${rootPaths.root}/sales-analytics`,
  inventoryStatus: `${rootPaths.root}/inventory-status`,
  allProducts: `${rootPaths.productsRoot}/all-products`,
  addProduct: `${rootPaths.productsRoot}/add-product`,
  categories: `${rootPaths.productsRoot}/categories`,
  subCategories: `${rootPaths.productsRoot}/sub-categories`,
  brands: `${rootPaths.productsRoot}/brands`
};
