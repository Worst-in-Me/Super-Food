import { memo } from 'react';

import { Tag } from '../Tag/Tag';
import { Like } from '../Like/Like';

import { Product } from '@/lib/types';

import styles from './FoodCard.module.css';
import Link from 'next/link';

export interface FoodCardProps extends Product {}

export const FoodCard = memo(function FoodCard(props: FoodCardProps) {
    const { tags, name, composition, weight, price, image, isLiked, id } = props;

    const productUrl = `/products/${id}`;

    return (
        <div className={styles.Card}>
            {tags.map((tag) => (
                <Tag key={tag} tag={tag} className={styles.wrapTag} />
            ))}
            <Like {...props} />
            <Link href={productUrl} className={styles.ImgHref}>
                <img src={image} alt="" className={styles.img} />
            </Link>
            <div className={styles.weight}>{weight}</div>
            <Link href={productUrl} className={styles.title}>
                {name}
            </Link>
            <div className={styles.description}>{composition}</div>
            <div className={styles.bottom}>
                <div className={styles.price}>{price}</div>
                <button className={styles.button}>В корзину</button>
            </div>
        </div>
    );
});
