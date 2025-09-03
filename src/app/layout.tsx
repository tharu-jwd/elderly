import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { AppNavbar } from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elderly - Connecting Elders with Trusted Caregivers',
  description:
    'Secure platform connecting elderly individuals with verified caregivers for personalized care services.',
  keywords: 'elderly care, caregivers, healthcare, senior care, home care',
  robots: 'index, follow',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AppNavbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
