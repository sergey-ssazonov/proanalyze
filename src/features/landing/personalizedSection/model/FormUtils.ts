import { FormInstance } from "antd";

//Func: вывод ошибок заполненыие формы
export const setFormErrors = (form: FormInstance, errors: { name: string; error: string }[]) => {
  errors.forEach(({ name, error }) => {
    form.setFields([
      {
        name,
        errors: [error],
      },
    ]);
  });
};
