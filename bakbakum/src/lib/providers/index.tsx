"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { ReactNode, useState } from "react";

// Import Swiper and module styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

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
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    </ConfigProvider>
  );
};

export default Providers;
