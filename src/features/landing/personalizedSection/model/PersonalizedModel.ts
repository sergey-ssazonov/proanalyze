import { Form } from "antd";
import { useState } from "react";
import { IPersonalizedData } from "./FormPersonalized";
import { omit } from "@/src/shared/utils/omit";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const steps: string[] = [
  "Укажите пол",
  "Укажите возраст",
  "Выберите врача",
  "Есть ли жалобы / симптомы?",
  "Напишите жалобы / симптомы",
];

export const usePersonalizedModel = () => {
  const [form] = Form.useForm();
  const [haveSymptoms, setHaveSymptoms] = useState<boolean>(false);
  const [isEmailVisible, setEmailVisible] = useState<boolean>(true);
  const [formProgress, setFormProgress] = useState<number>(5);
  const [nextStep, setNextStep] = useState<string>(steps[0]);
  const [isFormEmpty, setIsFormEmpty] = useState<boolean>(true);

  const calculateFormPropgress = (values: IPersonalizedData, steps: string[]): number => {
    const totalSteps = steps.length;
    const filledSteps = Object.values(values).filter(
      (value) => value !== undefined && value !== ""
    ).length;

    return Math.max(5, Math.round((filledSteps / totalSteps) * 100));
  };

  const calculateNextStep = (values: IPersonalizedData): string => {
    const filledSteps = Object.values(values).filter((value) => value).length;

    return steps[filledSteps];
  };

  const handleResetForm = () => {
    form.resetFields();
    setIsFormEmpty(true);
    setFormProgress(5);
  };

  const handleValuesChange = (changedValues: IPersonalizedData) => {
    const values: IPersonalizedData = form.getFieldsValue();

    if (values.haveSymptoms) {
      setHaveSymptoms(true);
      setFormProgress(calculateFormPropgress(values, steps));
    } else {
      setHaveSymptoms(false);

      setFormProgress(calculateFormPropgress(omit(values, "symptoms"), steps.slice(0, 4)));
    }

    const isValueEmpty = !Object.values(values).some(
      (value) => value !== undefined && value !== null && value !== ""
    );

    setIsFormEmpty(isValueEmpty);

    if (changedValues.haveSymptoms === false) {
      form.setFieldValue("symptoms", undefined);
    }

    setNextStep(calculateNextStep(values));
  };

  const handleEmailCheckboxChange = (e: CheckboxChangeEvent) => setEmailVisible(e.target.checked);

  return {
    form,
    haveSymptoms,
    handleValuesChange,
    formProgress,
    nextStep,
    handleResetForm,
    isFormEmpty,
    isEmailVisible,
    handleEmailCheckboxChange,
  };
};
