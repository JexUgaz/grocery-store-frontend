export const formatExpiryDate = (value: string) => {
  const raw = value.replace(/\D/g, "");
  if (raw.length === 0) return "";
  if (raw.length <= 2) return raw;
  return raw.slice(0, 2) + "/" + raw.slice(2, 4);
};

export const formatCardNumber = (value: string) => {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
};
