import { memo, useMemo } from 'react';

import hotImg from './hot.svg';
import newImg from './new.svg';
import leivImg from './leiv.svg';

export interface TagProps extends ClassNameProps {
    tag: string;
}

export const Tag = memo(function Tag({ tag, className }: TagProps) {
    const imgSrc = useMemo(() => {
        switch (tag) {
            case 'hot':
                return hotImg.src;
            case 'leiv':
                return leivImg.src;
            case 'new':
                return newImg.src;
            default:
                return;
        }
    }, [tag]);

    if (!imgSrc) return null;

    return <img className={className} src={imgSrc} alt="" />;
});
