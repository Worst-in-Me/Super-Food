'use client';

import { FoodCard, FoodCardProps } from '../../app/components/FoodCard/FoodCard';
import { products } from '@/lib/db';
import { useRouter } from 'next/router';
import '@/app/globals.css';

export default function IndexPage() {
    const router = useRouter();
    const product = products.find((product) => product.id === router.query.productid);
    if (!product) return null;
    return <FoodCard {...product} />;
}
