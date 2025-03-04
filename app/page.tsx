import type { Metadata } from 'next';

import { products } from '@/lib/db';
import { FoodCard } from '@/components/FoodCard/FoodCard';

import styles from './page.module.css';

export default function IndexPage() {
    return (
        <div className={styles.page}>
            {products.map((props) => (
                <FoodCard key={props.id} {...props} />
            ))}
        </div>
    );
}

export const metadata: Metadata = {
    title: 'super food mini app',
};
