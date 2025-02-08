import { FileJpgOutlined, FilePdfOutlined } from "@ant-design/icons";
import { UploadFile } from "antd";
import { ReactNode } from "react";

export const showIconByType = (file: UploadFile): ReactNode => {
  if (file.type === "application/pdf") {
    return <FilePdfOutlined />;
  } else if (file.type === "image/jpeg" || file.type === "image/png") {
    return <FileJpgOutlined />;
  }
};
