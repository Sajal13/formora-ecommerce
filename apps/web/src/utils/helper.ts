import { ProductCategory, ProductItem } from "@/data/products";

export const currencyFormat = (
  amount: number,
  options: Intl.NumberFormatOptions = {}
) => {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    ...options
  })
    .format(amount)
    .replace("BDT", "৳");
};

export const categoryFilter = (
  query: string,
  categories: ProductCategory[]
) => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  return categories.flatMap((category) => {
    const mainMatch = category.name.toLowerCase().includes(normalizedQuery)
      ? [{ type: "category", ...category }]
      : [];

    const subMatches = category.subCategories
      .filter((sub) => sub.name.toLowerCase().includes(normalizedQuery))
      .map((sub) => ({
        type: "subcategory",
        ...sub,
        parentCategory: category.name
      }));

    return [...mainMatch, ...subMatches];
  });
};

export const productFilter = (query: string, products: ProductItem[]) => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return products;

  return products.filter((product) =>
    [product.title, product.description, product.category].some((field) =>
      field?.toLowerCase().includes(normalizedQuery)
    )
  );
};
