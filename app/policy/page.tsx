import { PolicyPage } from "@/src/screen/policy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Прочитайте политику конфиденциальности и согласие на обработку персональных данных на нашем сайте.",
};

export default function Policy() {
  return <PolicyPage />;
}
