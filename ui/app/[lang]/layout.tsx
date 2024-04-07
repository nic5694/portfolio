import "../../globals.css";
import {Analytics} from "@vercel/analytics/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Locale, i18n } from '@/i18n.config';

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({ lang: locale }))
}
export default function RootLayout({
                                       children,
                                       params
                                   }: {
    children: React.ReactNode;
    params:{lang:Locale}
}) {

    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            {/*@ts-ignore*/}
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Karantina:wght@300;400;700&display=swap"
                rel="stylesheet"
            />
            <title>Nicholas Martoccia</title>
        </head>
        <body>
        <ToastContainer/>
            {children}
        <Analytics />
        </body>
        </html>

    )
};