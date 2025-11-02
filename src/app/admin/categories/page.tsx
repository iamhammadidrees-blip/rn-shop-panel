import { getCategoriesWithProducts } from "@/actions/categories";

export default async function Categories(){

    const categories = await getCategoriesWithProducts();
    return <>Categories</>
}