import { AgreementPage } from "@/src/screen/agreement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пользовательское соглашение",
  description: "Прочитайте пользовательское соглашение.",
};

export default function Agreement() {
  return <AgreementPage />;
}
