import type { Metadata } from "next";
import "@/src/shared/styles/globals.scss";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ConfigProviderAntd from "@/src/shared/antd/config.provider";
import { Layout } from "@/src/shared/components/layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Проанализы",
  description:
    "Сервис по подготовке перечня необходимых анализов c быстрым подборо и рекомендациями",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.className}>
      <AntdRegistry>
        <ConfigProviderAntd>
          <Layout>{children}</Layout>
        </ConfigProviderAntd>
      </AntdRegistry>
    </html>
  );
}
