import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FarcasterProvider } from '@/components/providers/FarcasterProvider';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://matchy.vercel.app';

export const metadata: Metadata = {
  title: 'Matchy',
  description: 'Match with people nearby at events',
  other: {
    'fc:frame': JSON.stringify({
      version: "1",
      imageUrl: `${APP_URL}/preview.png`,
      button: {
        title: "Find Matches",
        action: {
          type: "launch_frame",
          name: "Matchy",
          url: APP_URL,
          splashImageUrl: `${APP_URL}/logo.png`,
          splashBackgroundColor: "#0891B2"
        }
      }
    })
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-100`}>
        <FarcasterProvider>
          <main className="max-w-[428px] mx-auto bg-white min-h-screen relative pb-20">
            {children}
          </main>
        </FarcasterProvider>
      </body>
    </html>
  );
}
