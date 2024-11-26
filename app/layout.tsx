import type { Metadata, Viewport } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { MUIThemeProvider } from '@/app/theme';
import { StateProvider } from '@/app/state';
import '@/app/index.css';
import { RSReducedMotion } from '@/shared/ui/RSReducedMotion';
import { startupImage } from './startupImage';
import { title } from './title';
import { Analytics } from '@vercel/analytics/react';
import { FramerMotionConfig } from '@/app/ui';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Roboto } from 'next/font/google';

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

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  fallback: ['system-ui', 'arial'],
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='uk' data-color-scheme='light' suppressHydrationWarning>
      <body className={roboto.variable}>
        <StateProvider>
          <AppRouterCacheProvider>
            <MUIThemeProvider>
              <FramerMotionConfig>
                {children}
                <Analytics />
              </FramerMotionConfig>
            </MUIThemeProvider>
          </AppRouterCacheProvider>
        </StateProvider>
        <RSReducedMotion />
      </body>
      <GoogleAnalytics gaId='G-CR2BSL8KY9' />
    </html>
  );
}
