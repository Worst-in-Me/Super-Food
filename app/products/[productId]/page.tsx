import { FoodCard } from '@/components/FoodCard/FoodCard';
import { products } from '@/lib/db';

export default async function Product({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;

    const product = products.find((product) => product.id === productId);

    if (!product) return null;

    return <FoodCard {...product} />;
}
