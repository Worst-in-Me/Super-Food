import { memo } from 'react';
import styles from './Like.module.css';

export interface LikeProps {
    isLiked: boolean;
    id: string;
}

export const Like = memo(function Like(props: LikeProps) {
    return <div className={props.isLiked ? styles.liked : styles.unliked} />;
});
