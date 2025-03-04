import type { Metadata } from 'next';
import { FoodCard, FoodCardProps } from './components/FoodCard/FoodCard';
import styles from './page.module.css';
import { products } from '@/lib/db';

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
