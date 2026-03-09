import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/shared/Navbar';

export const metadata: Metadata = {
  title: '文言文课堂测验',
  description: '轻量课堂测验网站：逐题作答、即时反馈、结果汇总。'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
