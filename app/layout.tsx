import type { Metadata } from "next";
import "@/src/shared/styles/globals.scss";

import { CommonLayout } from "@/src/shared/components/layouts/commonLayout";
import TLayout from "@/src/shared/types/layout";

export const metadata: Metadata = {
  title: "Какие анализы сдать?",
  description:
    "Сервис по подготовке перечня необходимых анализов c быстрым подборо и рекомендациями",

  openGraph: {
    title: "Какие анализы сдать?",
    url: "https://proanalizy.ru",
    description:
      "Сервис по подготовке перечня необходимых анализов c быстрым подборо и рекомендациями",
    images: [
      {
        url: "https://xn-----6kcbab1advferbt2a3eta1nya.xn--p1ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-image.fc96c1aa.webp&w=3840&q=75",
        width: 1024,
        height: 1024,
        alt: "Какие анализы сдать?",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  userScalable: "no",
};

export default function RootLayout({ children }: Readonly<TLayout>) {
  return <CommonLayout>{children}</CommonLayout>;
}
