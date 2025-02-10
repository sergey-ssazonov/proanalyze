import { PaymentPage } from "@/src/screen/payment";

export default function Payment({ params }: { params: { id: string } }) {
  const { id } = params;
  return <PaymentPage id={id} />;
}
