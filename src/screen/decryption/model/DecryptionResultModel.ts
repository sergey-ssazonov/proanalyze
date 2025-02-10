import { message } from "antd";
import { useGetDecryptionResult } from "../api/getDecryptionResult";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const phrases: string[] = [
  "Подготавливаем перечень анализов",
  "Анализируем ваши данные",
  "Формируем персонализированный список",
  "Обрабатываем результаты",
  "Оптимизируем список для вас",
];

export const useDecryptionResultModel = (id: string) => {
  const { data: decryptionResult } = useGetDecryptionResult(id);
  const handleFileDownload = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const pdfUrl = `${apiUrl}/orders/${id}/decryption_file`;

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Персонализированный перечень.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    messageApi.open({
      type: "success",
      content: "Результат скачан",
    });
  };

  const [loadingPhrase, setLoadingPhrase] = useState(phrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setLoadingPhrase(phrases[randomIndex]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const [messageApi, contextHolder] = message.useMessage();

  const handleClickCopy = async () => {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    const linkToCopy = `${appUrl}/decryption/${id}`;
    console.log("copy link" + linkToCopy);
    await navigator.clipboard.writeText(linkToCopy);
    messageApi.open({
      type: "success",
      content: "Ссылка скопирована",
    });
  };

  const handleResultCopy = async () => {
    console.log("copy result");

    const contentDiv = document.getElementById("content");
    const textResult = contentDiv?.textContent || contentDiv?.innerText || "";

    await navigator.clipboard.writeText(textResult + "");
    messageApi.open({
      type: "success",
      content: "Результат скопирован",
    });
  };

  useEffect(() => {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    const callbackLink = `${appUrl}/decryption/${id}`;
    Cookies.set(`returnDecryptionUrl`, callbackLink, {
      expires: 1,
    });
  }, [id]);

  return {
    handleResultCopy,
    handleClickCopy,
    handleFileDownload,
    contextHolder,
    messageApi,
    decryptionResult,
    loadingPhrase,
  };
};
