export const formatExpiryDate = (value: string) => {
  const raw = value.replace(/\D/g, "");
  if (raw.length === 0) return "";
  if (raw.length <= 2) return raw;
  return raw.slice(0, 2) + "/" + raw.slice(2, 4);
};
