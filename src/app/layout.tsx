import type { Metadata } from 'next';
import './globals.css';
import { Masthead } from '@/components/layout/Masthead';
import { Header } from '@/components/layout/Header';
import { CategoryNav } from '@/components/layout/CategoryNav';
import { BreakingBanner } from '@/components/layout/BreakingBanner';
import { Footer } from '@/components/layout/Footer';
import { getBreakingNewsAlerts } from '@/lib/content';

export const metadata: Metadata = {
  title: {
    default: 'Coastline Reporters | Local News. Global Perspective.',
    template: '%s | Coastline Reporters',
  },
  description:
    'Coastline Reporters is an independent digital-first media organisation based in Nigeria, reporting with depth, integrity, and investigative rigour from the Niger Delta to the world.',
  keywords: [
    'Coastline Reporters',
    'Niger Delta News',
    'Nigeria News',
    'Nigerian Politics',
    'Environmental Journalism',
    'Port Harcourt News',
    'African Digital Media',
    'Investigative Journalism',
  ],
  authors: [{ name: 'Coastline Reporters Editorial Board' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Coastline Reporters | Local News. Global Perspective.',
    description:
      'Rigorous investigative reporting, environmental stewardship, and balanced storytelling from the Niger Delta to the global stage.',
    siteName: 'Coastline Reporters',
    locale: 'en_NG',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const breakingAlerts = await getBreakingNewsAlerts();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <Masthead />
        <Header />
        <CategoryNav />
        <BreakingBanner alerts={breakingAlerts} />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
