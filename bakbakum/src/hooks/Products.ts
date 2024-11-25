import { TFilterQuery } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = (query: TFilterQuery[]) => {
  return useQuery({
    queryKey: ["products", query],
    queryFn: async () => {
      const params = new URLSearchParams();
      query.forEach((q) => {
        params.append(q.name, q.value);
      });


      const response = await fetch(
        `https://api.icchaporon.com/api/v1/products?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return response.json();
    },
  });
};
