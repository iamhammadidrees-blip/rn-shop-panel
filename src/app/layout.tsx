import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner"
import '@/styles/globals.css';
import { ThemeProvider } from '@/providers/themes-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MY-PANEL',
  description: 'React Native Shop - codewithlari',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' style={{ colorScheme: 'light' }} suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
        <main>{children}</main>
        <Toaster richColors/>
       </ThemeProvider>
      </body>
    </html>
  );
}