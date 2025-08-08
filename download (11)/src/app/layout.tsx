
"use client";

import type { Metadata } from 'next';
import { useState, useEffect, Children, cloneElement, isValidElement } from 'react';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/page-transition';
import SplashCursor from '@/components/splash-cursor';
import { ThemeProvider } from '@/components/theme-provider';
import { MobileNav } from '@/components/mobile-nav';
import Loader from '@/components/loader';
import { AnimatePresence, motion } from 'framer-motion';

// export const metadata: Metadata = {
//   title: 'Visualz - We Build Digital Futures',
//   description:
//     'Visualz is a digital agency specializing in crafting bespoke websites, apps, and campaigns from the ground up.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Show loader for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  // Pass loading state to child component
  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      // @ts-ignore
      return cloneElement(child, { isLoading: loading });
    }
    return child;
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Visualz - We Build Digital Futures</title>
        <meta name="description" content="Visualz is a digital agency specializing in crafting bespoke websites, apps, and campaigns from the ground up." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatePresence>
            {loading && <Loader />}
          </AnimatePresence>
          
          <AnimatePresence>
          {!loading && (
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
              <SplashCursor />
              <Header />
              <PageTransition>
                <main className="pb-20 md:pb-0">{childrenWithProps}</main>
              </PageTransition>
              <Footer />
              <MobileNav />
              <Toaster />
            </motion.div>
          )}
          </AnimatePresence>

        </ThemeProvider>
      </body>
    </html>
  );
}
