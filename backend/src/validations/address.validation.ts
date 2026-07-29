import { z } from "zod";

export const createAddressSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters"),

  recipientName: z
    .string()
    .min(2, "Recipient name must be at least 2 characters"),

  recipientPhone: z
    .string()
    .min(7, "Invalid phone number"),

  province: z
    .string()
    .min(2, "Province is required"),

  city: z
    .string()
    .min(2, "City is required"),

  address: z
    .string()
    .min(5, "Address must be at least 5 characters"),

  postalCode: z
    .string()
    .min(5, "Invalid postal code"),

  buildingNumber: z
    .string()
    .nullable()
    .optional(),

  unit: z
    .string()
    .nullable()
    .optional(),

  isDefault: z
    .boolean()
    .optional(),
});

export const updateAddressSchema =
  createAddressSchema.partial();