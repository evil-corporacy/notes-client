import ThemeRegistry from '@/features/theme-registry'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/widgets/header/ui";
import Footer from "@/widgets/footer/ui";
import ReduxProvider from "@/entities/store/ui";
import Head from "next/head";
import RefreshToken from "@/processes/refresh-token/ui";
import React, {ReactNode} from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Notes',
    description: 'Приложение, чтобы делать заметки',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang='en' className='bg-black h-screen w-screen'>
        <Head>
            <link rel="icon" href="../../public/favicon.ico" /> {/* Путь к вашему фавикону */}
            <link rel="apple-touch-icon" sizes="180x180" href="../../public/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="../../public/android-chrome-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="../../public/android-chrome-512x512.png" />
        </Head>
        <RefreshToken/>
        <ThemeRegistry options={{key: 'joy'}}>
            <body className={inter.className}>
            <ReduxProvider>
                <Header/>
                <main className="mt-20">
                    {children}
                </main>
            </ReduxProvider>
            </body>
        </ThemeRegistry>
        <Footer/>
        </html>
    )
}
