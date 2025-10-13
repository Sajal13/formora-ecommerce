import { ProductCategory, ProductItem } from "@/types/products";

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

export const numberFormat = (
  num: number,
  options?: Intl.NumberFormatOptions
) => {
  return new Intl.NumberFormat("en-BD", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    ...options
  }).format(num);
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

export const getFileExtension = (fileName: string, separator = ".") =>
  fileName.split(separator).pop() || "unknown";

export const isImageFile = (file: File) => {
  const imageMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/webp"
  ];
  return imageMimeTypes.includes(file.type);
};

export const convertFileToAttachment = (file: File) => ({
  name: file.name,
  size: `${(file.size / 1024).toFixed(2)} KB`,
  format: getFileExtension(file.name),
  preview: isImageFile(file) ? URL.createObjectURL(file) : undefined
});
