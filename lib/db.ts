import { Product } from './types';
import RolliImg from '@/assets/rolli.jpg';
import AlphaImg from '@/assets/alpha.jpg';
import PizzaImg from '@/assets/pizza.jpg';

export const products: Product[] = [
    {
        name: 'ролл постный',
        tags: ['leiv'],
        price: 299,
        weight: '250g',
        composition: 'рис и тд',
        isLiked: false,
        image: RolliImg.src,
        id: '446',
    },
    {
        name: 'ролл альфа',
        tags: ['new'],
        price: 399,
        weight: '300g',
        composition: 'рис и корнишоны и тд',
        isLiked: true,
        image: AlphaImg.src,
        id: '510',
    },
    {
        name: 'пицца диабло',
        tags: ['hot'],
        price: 729,
        weight: '550g',
        composition: 'тесто',
        isLiked: false,
        image: PizzaImg.src,
        id: '485',
    },
];
