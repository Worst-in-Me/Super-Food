import { memo, useMemo } from 'react';
import hotImg from './hot.svg';
import leivImg from './leiv.svg';
import newImg from './new.svg';

export interface TagProps {
    tag: string;
}

export const Tag = memo(function Tag(props: TagProps) {
    const imgSrc = useMemo(() => {
        switch (props.tag) {
            case 'hot':
                return hotImg.src;
            case 'leiv':
                return leivImg.src;
            case 'new':
                return newImg.src;
            default:
                return;
        }
    }, [props.tag]);
    if (!imgSrc) return null;
    return <img src={imgSrc} alt="" />;
});
