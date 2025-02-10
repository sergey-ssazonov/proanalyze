import axiosInstance from "@/src/shared/lib/axios";
import { IConfirmationToken } from "../model/FormInterfaces";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Cookies from "js-cookie";

export const routeToPayment = async (
  orderId: number,
  uniqueId: string,
  router: AppRouterInstance
) => {
  const response = await axiosInstance.get<IConfirmationToken>(`/confirmation_token/${orderId}`);
  const { confirmation_token } = response.data;

  if (!confirmation_token) {
    throw new Error("confirmation_token not found in response data");
  }
  const paymentUrl = `/payment/${uniqueId}?confirmationToken=${confirmation_token}`;

  Cookies.set(`confirmationToken`, paymentUrl, {
    expires: 0.025,
  });

  router.push(paymentUrl);
};
