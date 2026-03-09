import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Classical Chinese Quiz',
  description: 'A lightweight classroom quiz for classical Chinese learning.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
