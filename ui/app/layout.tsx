import "../globals.css";
import {Analytics} from "@vercel/analytics/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
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
        </head>
        <body>
        <ToastContainer/>
            {children}
        <Analytics />
        </body>
        </html>

    )
};