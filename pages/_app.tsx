import Image from 'next/image';
import type { ReactNode } from 'react';
import { StoreProvider } from '@/app/StoreProvider';

import '@/app/globals.css';
import styles from '@/app/layout.module.css';
import Head from 'next/head';

interface Props {
    readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <StoreProvider>
            <Head>
                <script src="https://telegram.org/js/telegram-web-app.js"></script>
            </Head>
            <section className={styles.container}>
                <main className={styles.main}>{children}</main>
            </section>
        </StoreProvider>
    );
}
