import type { Metadata, Viewport } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { MUIThemeProvider } from '@/app/theme';
import { StateProvider } from '@/app/state';
import '@/app/index.css';

export const metadata: Metadata = {
  title: 'CHANGETHIS',
  description: 'CHANGETHIS',
  robots: 'all',
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: '/',
    title: 'CHANGETHIS',
    description: 'CHANGETHIS',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'CHANGETHIS',
    description: 'CHANGETHIS',
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
    <html lang='en'>
      <body>
        <StateProvider>
          <AppRouterCacheProvider>
            <MUIThemeProvider>{children}</MUIThemeProvider>
          </AppRouterCacheProvider>
        </StateProvider>
      </body>
    </html>
  );
}
