export type Product ={
    category: number;
    heroImage: string;
    id: number;
    imageUrl: string;
    maxQuantity: number;
    price: number;
    slug: string;
    title: string;
};


export type CategoryWithProducts = {
  created_at: string;
  id: number;
  imageURL: string;
  name: string;
  products: Product[];
  slug: string;
};

export type CategoriesWithProductsResponse = CategoryWithProducts[];