const attrIsEmpty = (value?: string | null | boolean): boolean => {
  return (
    value === null || value === undefined || value === "" || value === false
  );
};

const validateMin = (
  minValue?: string | null,
  maxValue?: string | null
): string | null | undefined => {
  const isMaxEmpty = attrIsEmpty(maxValue);
  const isMinEmpty = attrIsEmpty(minValue);

  const max = Number(maxValue);
  const min = Number(minValue);

  const minIsNegative = min < 0;
  const maxIsPositive = !isMaxEmpty && max > 0;
  const maxIsZeroOrNegative = isMaxEmpty || max <= 0;
  const minGreaterThanMax = !isMaxEmpty && min > max;

  if (isMinEmpty) return null;
  if (minIsNegative && maxIsZeroOrNegative) return "0";
  if (minIsNegative && maxIsPositive) return "0";
  if (minGreaterThanMax) return maxValue;
  return minValue;
};

const validateMax = (
  maxValue?: string | null,
  minValue?: string | null
): string | null | undefined => {
  const isMaxEmpty = attrIsEmpty(maxValue);
  const isMinEmpty = attrIsEmpty(minValue);

  const max = Number(maxValue);
  const min = Number(minValue);

  const maxIsNegative = max < 0;
  const minIsPositive = !isMinEmpty && min > 0;
  const minIsZeroOrNegative = isMinEmpty || min <= 0;
  const minGreaterThanMax = !isMinEmpty && min > max;

  if (isMaxEmpty) return null;
  if (maxIsNegative && minIsZeroOrNegative) return "0";
  if (maxIsNegative && minIsPositive) return minValue;
  if (minGreaterThanMax) return minValue;

  return maxValue;
};

export { attrIsEmpty, validateMax, validateMin };
