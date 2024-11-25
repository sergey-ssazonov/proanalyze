import type { Metadata } from 'next';
import '@/src/shared/styles/globals.scss';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import ConfigProviderAntd from '@/src/shared/antd/config.provider';
import { Layout } from '@/src/shared/components/layout';
import { Providers } from '@/src/shared/providers/Providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Проанализы',
  description:
    'Сервис по подготовке перечня необходимых анализов c быстрым подборо и рекомендациями',
  openGraph: {
    title: 'Проанализы',
    description:
      'Сервис по подготовке перечня необходимых анализов c быстрым подборо и рекомендациями',
  },
  viewport:
    'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.className}>
      <Providers>
        <AntdRegistry>
          <ConfigProviderAntd>
            <Layout>{children}</Layout>
          </ConfigProviderAntd>
        </AntdRegistry>
      </Providers>
    </html>
  );
}
