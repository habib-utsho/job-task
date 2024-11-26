"use server";

export const getSingleProduct = async (id: string) => {
  const fetchOptions = {};

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/products/${id}`,
    fetchOptions
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data from the server");
  }

  const data = await response.json();
  return data;
};
