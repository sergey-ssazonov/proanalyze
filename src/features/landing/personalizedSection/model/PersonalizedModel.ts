import { Form } from "antd";
import { useState } from "react";
import { IPersonalizedData } from "./FormPersonalized";
import { omit } from "@/src/shared/utils/omit";

const steps: string[] = [
  "Укажите пол",
  "Укажите возраст",
  "Выберите врача",
  "Укажите последний день менструации",
];

export const usePersonalizedModel = () => {
  const [form] = Form.useForm();
  const [isFemale, setIsFemale] = useState<boolean>(false);
  const [formProgress, setFormProgress] = useState<number>(5);
  const [nextStep, setNextStep] = useState<string>(steps[0]);
  const [isFormEmpty, setIsFormEmpty] = useState<boolean>(true);

  const calculateFormPropgress = (
    values: IPersonalizedData,
    steps: string[],
  ): number => {
    const totalSteps = steps.length;
    const filledSteps = Object.values(values).filter((value) => value).length;

    return Math.max(5, Math.round((filledSteps / totalSteps) * 100));
  };

  const calculateNextStep = (values: IPersonalizedData): string => {
    const filledSteps = Object.values(values).filter((value) => value).length;

    return steps[filledSteps];
  };

  const handleResetForm = () => {
    form.resetFields();
    setIsFormEmpty(true);
  };

  const handleValuesChange = (changedValues: IPersonalizedData) => {
    const values: IPersonalizedData = form.getFieldsValue();
    const genderValue = values.gender;

    const isValueEmpty = !Object.values(values).some(
      (value) => value !== undefined && value !== null && value !== "",
    );

    setIsFormEmpty(isValueEmpty);

    if (changedValues.gender === "male") {
      form.setFieldValue("menses_day", undefined);
    }

    if (genderValue === "female") {
      setIsFemale(true);
      setFormProgress(calculateFormPropgress(values, steps));
    } else {
      setIsFemale(false);
      setFormProgress(
        calculateFormPropgress(omit(values, "menses_day"), steps.slice(0, 3)),
      );
    }
    setNextStep(calculateNextStep(values));
  };

  return {
    form,
    isFemale,
    handleValuesChange,
    formProgress,
    nextStep,
    handleResetForm,
    isFormEmpty,
  };
};
