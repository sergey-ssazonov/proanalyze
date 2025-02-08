import axiosInstance from "@/src/shared/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { IOrderShemeApi, IPersonalizedFormData, IOrderResponse } from "../model/FormInterfaces";
import { routeToPayment } from "./routeToPayment";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const prepareFormData = (values: IPersonalizedFormData): IOrderShemeApi => {
  sessionStorage.setItem("OrderData", JSON.stringify(values));

  return {
    age: values.age,
    gender: values.gender,
    what_doctor: values.doctor,
    symptoms: values.haveSymptoms ? values.symptoms : undefined,
    email: values.email || "checks.proanalizy@mail.ru",
  };
};

const submitPersonalizedForm = async (orderdata: IOrderShemeApi): Promise<IOrderResponse> => {
  const response = await axiosInstance.post("/order", orderdata, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const usePersonalizedFormSubmit = (router: AppRouterInstance) => {
  return useMutation<IOrderResponse, Error, IOrderShemeApi>({
    mutationFn: submitPersonalizedForm,

    onSuccess: (data: IOrderResponse) => {
      routeToPayment(data.id, data.unique_id, router);
    },
    onError: (error: Error) => {
      console.error("Error creating orders:", error);
    },
  });
};
