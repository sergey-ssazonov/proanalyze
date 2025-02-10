"use client";

import { useSearchParams } from "next/navigation";
import React, { FC, useCallback, useEffect } from "react";

interface IPaymentPageProps {
  id: string;
}

const PaymentPage: FC<IPaymentPageProps> = ({ id }) => {
  const searchParams = useSearchParams();
  const confirmationToken = searchParams.get("confirmationToken");

  const initializeYooKassaWidget = useCallback(
    (confirmationToken: string) => {
      if (!confirmationToken) {
        console.error("Empty confirmation_token received", confirmationToken);
        return;
      }

      if (!window.YooMoneyCheckoutWidget) {
        console.error("YooMoneyCheckoutWidget is not available");
        return;
      }

      try {
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
        const checkout = new window.YooMoneyCheckoutWidget({
          confirmation_token: confirmationToken,
          return_url: `${appUrl}/decryption/${id}`,
          error_callback: (error: Error) => {
            console.error("Error in YooMoney widget", error);
          },
        });

        checkout.on("complete", () => {
          document.body.classList.remove("modal-open");
          checkout.destroy();
        });

        checkout.render("payment-form");
      } catch (error) {
        console.error("Error initializing YooMoneyCheckoutWidget:", error);
      }
    },
    [id]
  );

  useEffect(() => {
    if (typeof confirmationToken === "string") {
      const script = document.createElement("script");
      script.src = "https://yookassa.ru/checkout-widget/v1/checkout-widget.js";
      script.async = true;
      script.onload = () => {
        console.log("YooMoneyCheckoutWidget script loaded");
        document.body.classList.add("modal-open");
        initializeYooKassaWidget(confirmationToken);
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [confirmationToken, initializeYooKassaWidget]);

  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-white">
      <div id="payment-form" className="my-4" />
    </div>
  );
};

export default PaymentPage;
