import { memo } from 'react';

import Link from 'next/link';

import styles from './Header.module.css';

export const Header = memo(function Header() {
    return (
        <Link href="/">
            <header className={styles.header}>Home</header>
        </Link>
    );
});
