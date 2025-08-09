import { z } from "zod";

export const filterSchema = z.object({
  min: z.string().nullable().optional(),
  max: z.string().nullable().optional(),
  category: z.string().nullable().optional(),
  sale: z.boolean().optional(),
});

export type FilterProps = z.infer<typeof filterSchema>;
export type FilterPropsKey = keyof FilterProps;
