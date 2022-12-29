import React from "react";
import { message, Button } from "antd";

const Message = ({ type, text }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info(text);
  };
  const success = () => {
    messageApi.success(text);
  };
  const error = () => {
    messageApi.error(text);
  };
  const warning = () => {
    messageApi.warning(text);
  };
  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        onClick={
          type === "info"
            ? info
            : type === "error"
            ? error
            : type === "success"
            ? success
            : type === "warning"
            ? warning
            : info
        }
      >
        Display normal message
      </Button>
    </>
  );
};

export default Message;
