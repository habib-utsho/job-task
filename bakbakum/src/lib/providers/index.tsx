"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { ReactNode, useState } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(new QueryClient());
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
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ConfigProvider>
  );
};

export default Providers;
