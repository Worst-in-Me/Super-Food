'use client';

import { type ReactNode } from 'react';

import { Header } from '@/components/Header/Header';

import { StoreProvider } from './StoreProvider';

import './globals.css';
import styles from './layout.module.css';

interface Props {
    readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <StoreProvider>
            <html lang="ru">
                <head>
                    <script src="https://telegram.org/js/telegram-web-app.js"></script>
                </head>
                <body>
                    <Header />
                    <section className={styles.container}>
                        <main className={styles.main}>{children}</main>
                    </section>
                </body>
            </html>
        </StoreProvider>
    );
}
