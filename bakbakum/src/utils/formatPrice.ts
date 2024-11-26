const formatPrice = (price: string | number) => {
  // Convert the number to a string
  if (!price) return;
  const priceString = price?.toString();

  // Use regex to add commas in the correct positions
  const lastThreeDigits = priceString?.slice(-3);
  const otherDigits = priceString?.slice(0, -3);

  // Add commas to the other digits
  const formattedOtherDigits = otherDigits?.replace(
    /\B(?=(\d{2})+(?!\d))/g,
    ","
  );

  // Combine the formatted parts
  return (
    formattedOtherDigits + (formattedOtherDigits ? "," : "") + lastThreeDigits
  );
};

export default formatPrice;
