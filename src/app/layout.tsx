import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "@/app/components/menu/Menu";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Main Layout title",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, totam.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Menu/>

        main layout text
        {children}
        </body>
        </html>
    );
}
