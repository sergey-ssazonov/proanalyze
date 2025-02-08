import React from "react";
import { ButtonLink } from "../buttons/buttonLink";

const NotFoundPage = () => {
  return (
    <section className="flex h-vh80 flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-4xl font-bold">404 Ошибка</h1>
      <p className="mt-2 text-lg">Такой страницы нету</p>
      <ButtonLink href="/" className="mt-4">
        На главную
      </ButtonLink>
    </section>
  );
};

export default NotFoundPage;
