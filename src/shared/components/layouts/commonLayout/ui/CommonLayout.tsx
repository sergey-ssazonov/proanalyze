import React, { FC } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ConfigProviderAntd from "@/src/shared/antd/config.provider";
import { Providers } from "@/src/shared/providers/Providers";
import Script from "next/script";
import TLayout from "@/src/shared/types/layout";
import { Inter } from "next/font/google";
import { MainLayout } from "../../mainLayout";
import { PublicEnvScript } from "next-runtime-env";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const CommonLayout: FC<Readonly<TLayout>> = ({ children }) => {
  return (
    <html lang="ru" className={inter.className}>
      <head>
        <PublicEnvScript />
      </head>
      <Script id="metrika-counter" strategy="afterInteractive">
        {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
            ym(97889419, "init", {
              defer: true,
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true
            });
          `}
      </Script>
      <Providers>
        <AntdRegistry>
          <ConfigProviderAntd>
            <MainLayout>{children}</MainLayout>
          </ConfigProviderAntd>
        </AntdRegistry>
      </Providers>
    </html>
  );
};

export default CommonLayout;
