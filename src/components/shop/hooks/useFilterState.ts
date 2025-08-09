import { useState, useCallback } from "react";
import {
  FilterProps,
  FilterPropsKey,
  filterSchema,
  attrIsEmpty,
} from "@/components/shop/validations";
import { areObjectsEqualLoose } from "@/utils";

const useFilterState = (initial: FilterProps) => {
  const parsedInitial = filterSchema.parse(initial);
  const [values, setValues] = useState<FilterProps>(parsedInitial);

  const isDirty = !areObjectsEqualLoose<FilterProps>(values, parsedInitial);

  const isEmpty = Object.values(values).every(attrIsEmpty);

  const setFilter = useCallback(
    <K extends FilterPropsKey>(field: K, value: FilterProps[K]) => {
      setValues((prev) => ({
        ...prev,
        [field]: value === "" ? null : value,
      }));
    },
    []
  );

  const reset = useCallback(() => setValues(parsedInitial), [parsedInitial]);
  const clearAll = useCallback(
    () =>
      setValues({
        min: null,
        max: null,
        category: null,
        sale: false,
      }),
    []
  );

  return {
    values,
    setFilter,
    reset,
    isDirty,
    isEmpty,
    clearAll,
  };
};

export { useFilterState, attrIsEmpty };
