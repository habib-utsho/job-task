import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#8F71E1",
        },
        components: {
          Button: {
            colorPrimary: "#8F71E1",
            fontWeight: "semibold",
          },
          Checkbox: {
            colorPrimary: "#8F71E1",
          },
        },
      }}
    >
      {children};
    </ConfigProvider>
  );
};

export default Providers;
