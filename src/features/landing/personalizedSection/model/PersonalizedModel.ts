import { Form } from "antd";
import { useState } from "react";
import { IPersonalizedData } from "./FormPersonalized";

export const usePersonalizedModel = () => {
  const [form] = Form.useForm();

  const [isFemale, setIsFemale] = useState<boolean>(false);
  const [formProgress, setFormProgress] = useState<number>(5);

  const handleValuesChange = (changedValues: IPersonalizedData) => {
    console.log(changedValues);
    if (changedValues.gender) {
      setIsFemale(changedValues.gender === "female");
    }
    setFormProgress((prev) => prev++);
  };

  const getFormPropgres = () => formProgress;

  return {
    form,
    isFemale,
    handleValuesChange,
    getFormPropgres,
    formProgress,
  };
};
