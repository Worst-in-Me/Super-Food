import { memo } from 'react';
import styles from './FoodCard.module.css';
import { Like } from '../Like/Like';
import { Tag } from '../Tag/Tag';

export interface FoodCardProps {
    tags: string[];
    name: string;
    composition: string;
    weight: string;
    price: number;
    image: string;
    isLiked: boolean;
    id: string;
}

export const FoodCard = memo(function FoodCard(props: FoodCardProps) {
    const { tags, name, composition, weight, price, image, isLiked, id } = props;
    return (
        <div className={styles.Card}>
            {tags.map((tag) => (
                <div className={styles.wrapTag}>
                    <Tag key={tag} tag={tag} />
                </div>
            ))}
            <Like {...props} />
            <a href="" className={styles.ImgHref}>
                <img src={image} alt="" className={styles.img} />
            </a>
            <div className={styles.weight}>{weight}</div>
            <a href="" className={styles.title}>
                {name}
            </a>
            <div className={styles.description}>{composition}</div>
            <div className={styles.bottom}>
                <div className={styles.price}>{price}</div>
                <button className={styles.button}>В корзину</button>
            </div>
        </div>
    );
});
