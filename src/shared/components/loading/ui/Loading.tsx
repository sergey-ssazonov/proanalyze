import { Flex, Spin } from "antd";
import React, { FC } from "react";

type TLoadingProps = {
  className?: string;
};

const Loading: FC<TLoadingProps> = ({ className }) => {
  return (
    <Flex className={`h-screen ${className}`} align="center" justify="center">
      <Spin size="large" />
      {/* <LoadingOutlined spin size={size || 60} /> */}
    </Flex>
  );
};

export default Loading;
