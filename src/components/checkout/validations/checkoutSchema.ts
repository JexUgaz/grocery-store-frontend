import { ValidationErrors } from "@/types/ValidationErrors";
import { z } from "zod";

const clientSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().min(6, "Invalid phone number"),
  address: z.string().min(2, "Address is required"),
  city: z.string().min(2, "City is required"),
  reference: z.string().optional(),
});

const cardSchema = z.object({
  number: z
    .string()
    .regex(/^(\d{4} ?){4}$/, "Card number must be 16 digits formatted"),
  cardName: z.string().min(2, "Name on card is required"),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry format"),
  cvv: z.string().length(3, "CVV must be 3 digits"),
});

export const checkoutSchema = z.object({
  client: clientSchema,
  card: cardSchema,
});

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
export type CheckoutErrors = ValidationErrors<CheckoutSchema>;
