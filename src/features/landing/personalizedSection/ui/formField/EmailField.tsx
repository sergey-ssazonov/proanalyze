import { Checkbox, Col, Form, FormInstance, Tooltip } from "antd";
import React, { FC } from "react";

import {
  ClassNames,
  Email as EmailAutocomplete,
  domains,
} from "@smastrom/react-email-autocomplete";

import styles from "./EmailField.module.scss";
import { BASE_EMAIL_LIST, TOOLTIP_EMAIL } from "../../data/Form.data";
import { InfoCircleOutlined } from "@ant-design/icons";
import { FormNames } from "../../model/FormInterfaces";

const EmailField: FC<{ form: FormInstance }> = ({ form }) => {
  const classeNames: ClassNames = {
    wrapper: styles.RefineWrapper,
    dropdown: styles.RefineDropdown,
    input: styles.RefineInput,
    suggestion: styles.RefineSuggestion,
    domain: styles.RefineDomain,
  };

  //Func: изменение поля email
  const handleChangeEmail = (newEmail: string) => {
    form.setFieldValue("email", newEmail);
  };

  const isEmailRequired = Form.useWatch(FormNames.isEmailRequire, form);

  return (
    <>
      <Col xs={24}>
        <Form.Item
          name={FormNames.isEmailRequire}
          valuePropName="checked"
          style={{
            marginBottom: "0.5rem",
          }}
        >
          <Checkbox defaultChecked>Отправить расшифровкy и чек на E-mail</Checkbox>
        </Form.Item>
      </Col>

      {isEmailRequired !== false && (
        <Col xs={24} md={12}>
          <Tooltip
            placement="topLeft"
            className="absolute right-4 top-2 z-40 hover:cursor-help"
            title={<p className="text-sm text-white">{TOOLTIP_EMAIL}</p>}
          >
            <InfoCircleOutlined
              style={{ color: "#D9D9D9" }}
              onClick={(event) => event.stopPropagation()}
            />
          </Tooltip>
          <Form.Item
            name={FormNames.email}
            style={{
              marginBottom: "0.5rem",
            }}
          >
            <EmailAutocomplete
              id="email-autocomplete"
              placeholder="Адрес электронной почты"
              classNames={classeNames}
              baseList={BASE_EMAIL_LIST}
              refineList={domains}
              onChange={handleChangeEmail}
              value={form.getFieldValue("email")}
              style={{ fontSize: "16px" }}
              aria-label="Введите ваш адрес электронной почты"
            />
          </Form.Item>
        </Col>
      )}
    </>
  );
};

export default EmailField;
