"use client";

import React, { FC } from "react";
import { useDecryptionResultModel } from "../model/DecryptionResultModel";
import { Button, Flex, Spin } from "antd";
import { CopyOutlined, DownloadOutlined, LinkOutlined } from "@ant-design/icons";
import { ButtonLink } from "@/src/shared/components/buttons/buttonLink";

interface IDecryptionPageProps {
  id: string;
}

const DecryptionPage: FC<IDecryptionPageProps> = ({ id }) => {
  const {
    contextHolder,
    handleClickCopy,
    handleFileDownload,
    handleResultCopy,
    decryptionResult,
    loadingPhrase,
  } = useDecryptionResultModel(id);

  return (
    <section className="flex h-full w-full justify-center rounded-2xl bg-white px-4 py-6 sm:py-10">
      {contextHolder}

      {decryptionResult?.decryption === null || decryptionResult === undefined ? (
        <div className="flex h-vh70 items-center justify-center gap-2">
          <Spin size="large" />
          <h2 className="text-primaryblue text-2xl">{loadingPhrase}</h2>
        </div>
      ) : (
        <Flex vertical align="center" justify="center" className="w-full lg:w-4/5">
          <h2 className="mb-2 text-2xl">Ваш персонализированный перечень анализов готов</h2>

          <div
            id="content"
            className="border-primaryblue my-4 w-full rounded-md border-[1px] p-6"
            dangerouslySetInnerHTML={{ __html: decryptionResult?.decryption }}
          />

          <Flex wrap gap={8} className="box-border w-full">
            <Button
              shape="round"
              size="large"
              className="flex-1"
              onClick={handleClickCopy}
              icon={<LinkOutlined />}
            >
              Скопировать ссылку
            </Button>

            <Button
              shape="round"
              size="large"
              className="flex-1"
              onClick={() => handleFileDownload()}
              icon={<DownloadOutlined />}
            >
              Скачать перечень
            </Button>
            <Button
              shape="round"
              size="large"
              className="flex-1"
              onClick={handleResultCopy}
              icon={<CopyOutlined style={{ transform: "rotate(180deg)" }} />}
            >
              Скопировать перечень
            </Button>
          </Flex>

          <p className="text-grey my-4 text-xs">
            *Также мы отправили перечень на email, который вы указали при заполнении данных о себе.
          </p>
          <div className="mt-8 flex w-full justify-center">
            <ButtonLink className="flex-1" href="/">
              Подготовить еще один перечень
            </ButtonLink>
          </div>
        </Flex>
      )}
    </section>
  );
};

export default DecryptionPage;
