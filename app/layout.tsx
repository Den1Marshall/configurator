import type { Metadata, Viewport } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { MUIThemeProvider } from '@/app/theme';
import { StateProvider } from '@/app/state';
import '@/app/index.css';
import { RSReducedMotion } from '@/shared/ui/RSReducedMotion';
import { FMReducedMotion } from '@/shared/ui/FMReducedMotion';
import { startupImage } from './startupImage';
import { title } from './title';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title,
  description: 'CHANGETHIS',
  metadataBase: new URL('https://configurator-blond.vercel.app/'),
  robots: 'all',
  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: '/',
    title,
    description: 'CHANGETHIS',
  },

  twitter: {
    card: 'summary_large_image',
    title,
    description: 'CHANGETHIS',
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    startupImage,
  },
};

export const viewport: Viewport = {
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='uk' data-color-scheme='light' suppressHydrationWarning>
      <body>
        <StateProvider>
          <AppRouterCacheProvider>
            <MUIThemeProvider>
              <FMReducedMotion>
                {children}
                <Analytics />
              </FMReducedMotion>
            </MUIThemeProvider>
          </AppRouterCacheProvider>
        </StateProvider>
        <RSReducedMotion />
      </body>
    </html>
  );
}
