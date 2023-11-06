import ThemeRegistry from '@/features/theme-registry'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/widgets/header/ui";
import Footer from "@/widgets/footer/ui";
import ReduxProvider from "@/entities/store/ui";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Notes',
    description: 'Приложение, чтобы делать заметки',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' className='bg-black h-screen w-screen'>
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
