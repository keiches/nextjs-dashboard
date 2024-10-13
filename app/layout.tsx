import type { Metadata } from 'next'
import 'antd/dist/antd.css';
import '@/app/ui/global.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'My App',
  description: 'My App is a...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
