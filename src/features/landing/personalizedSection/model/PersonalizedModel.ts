import { FormInstance } from "antd";
import { useEffect, useState } from "react";

import { omit } from "@/src/shared/utils/omit";
import { FormNames, IPersonalizedFormData } from "./FormInterfaces";
import { setFormErrors } from "./FormUtils";
import { prepareFormData, usePersonalizedFormSubmit } from "../api/useFormSubmit";
import { useRouter } from "next/navigation";

const getSteps = (haveSymptoms?: boolean, isEmailRequire?: boolean): string[] => [
  "Укажите пол",
  "Укажите возраст",
  "К какому врачу планирует визит?",
  "Есть ли жалобы / симптомы?",
  ...(haveSymptoms ? ["Напишите жалобы / симптомы"] : []),
  ...(isEmailRequire ? ["Укажите E-mail для чека"] : []),
];

export const usePersonalizedModel = (form: FormInstance) => {
  const router = useRouter();

  const [formProgress, setFormProgress] = useState<number>(5);
  const [nextStep, setNextStep] = useState<string>(getSteps()[0]);
  const [isFormEmpty, setIsFormEmpty] = useState<boolean>(true);

  const { mutate: submitForm, isPending } = usePersonalizedFormSubmit(router);

  //Func:функиция получения данных из sessionStorage
  const loadFormDataFromSession = () => {
    const dataFromStorage = sessionStorage.getItem("OrderData");
    if (dataFromStorage) {
      try {
        const parsedData = JSON.parse(dataFromStorage);
        return parsedData;
      } catch (error) {
        console.error("Error parsing data from sessionStorage", error);
        return null;
      }
    }
    return null;
  };

  // Func: вычисления прогресса заполнения формы
  const calculateFormPropgress = (
    values: Partial<IPersonalizedFormData>,
    stepscount: number
  ): number => {
    const filledSteps = Object.values(values).filter(
      (value) => value !== undefined && value !== ""
    ).length;

    // console.log("values", values);
    // console.log("stepscount", stepscount);
    // console.log("filledSteps", filledSteps);

    return Math.max(5, Math.round((filledSteps / stepscount) * 100));
  };

  // Func: вычесления какой будет следущий шаг заполнения формы
  const calculateNextStep = (values: IPersonalizedFormData): string => {
    const dynamicSteps = getSteps(
      values.haveSymptoms || false,
      values.isEmailRequire || values.isEmailRequire === undefined
    ); // Динамический список шагов
    const stepFields: (keyof IPersonalizedFormData)[] = [
      FormNames.gender,
      FormNames.age,
      FormNames.doctor,
      FormNames.haveSymptoms,
      ...(values.haveSymptoms ? [FormNames.symptoms] : []),
      ...(values.isEmailRequire || values.isEmailRequire === undefined ? [FormNames.email] : []),
    ];

    for (let i = 0; i < stepFields.length; i++) {
      const field = stepFields[i];

      const isEmptyField =
        values[field] === undefined || values[field] === null || values[field] === "";

      if (isEmptyField) {
        return dynamicSteps[i];
      }
    }

    return "Форма заполнена";
  };

  // Func: отчистки формы
  const handleResetForm = () => {
    form.resetFields();

    sessionStorage.removeItem("OrderData");
    setIsFormEmpty(true);
    setFormProgress(5);
    setNextStep(getSteps()[0]);
  };

  // Func: изменения формы
  const handleValuesFormChange = (
    _: Partial<IPersonalizedFormData>,
    allValues: IPersonalizedFormData
  ) => {
    const values: IPersonalizedFormData = form.getFieldsValue();

    const isValueEmpty = !Object.values(omit(values, [FormNames.isEmailRequire])).some(
      (value) => value !== undefined && value !== null && value !== ""
    );

    const requireField = omit(values, [FormNames.isEmailRequire]);
    setFormProgress(
      calculateFormPropgress(
        requireField,
        getSteps(
          allValues.haveSymptoms || false,
          allValues.isEmailRequire || allValues.isEmailRequire === undefined
        ).length
      )
    );

    setIsFormEmpty(isValueEmpty);

    setNextStep(calculateNextStep(values));
  };

  //Func: подготовка и отправка запроса на создание заказа
  const handleSubmitForm = (values: IPersonalizedFormData) => {
    if (values.hasOwnProperty("email") && (values.email === undefined || values.email === "")) {
      setFormErrors(form, [{ name: "email", error: "Введите адрес электронной почты" }]);
      return;
    }

    submitForm(prepareFormData(values));
  };

  useEffect(() => {
    const storedData = loadFormDataFromSession();

    if (storedData) {
      // Устанавливаем значения в форму
      form.setFieldsValue(storedData);

      setIsFormEmpty(false);
    }
  }, [form]);

  return {
    form,
    handleValuesFormChange,
    formProgress,
    nextStep,
    handleResetForm,
    isFormEmpty,
    isPending,
    handleSubmitForm,
  };
};
