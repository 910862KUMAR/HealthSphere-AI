export const formatDate = (date) => {

  return new Date(date).toLocaleDateString();

};

export const formatCurrency = (amount) => {

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);

};

export const capitalize = (text) => {

  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);

};