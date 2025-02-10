import { DecryptionPage } from "@/src/screen/decryption";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Персонализированный перечень анализов",
};

export default function Decryption({ params }: { params: { id: string } }) {
  const { id } = params;
  return <DecryptionPage id={id} />;
}
