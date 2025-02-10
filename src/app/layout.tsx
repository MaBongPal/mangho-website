import type { Metadata } from "next";
import "@/styles/global.css";

import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "망호 웹사이트",
    description: "망호 웹사이트",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
