import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Reservations',
  description: 'Make reservations worldwide',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}