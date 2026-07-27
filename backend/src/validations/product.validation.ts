import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters"),

  description: z
    .string()
    .nullable()
    .optional(),

  price: z
    .number()
    .positive("Price must be greater than 0"),

  stock: z
    .number()
    .int()
    .min(0, "Stock cannot be negative"),

  imageUrl: z
    .string()
    .url("Invalid image url")
    .nullable()
    .optional(),

  categoryId: z
    .string()
    .uuid("Invalid category id"),

  brandId: z
    .string()
    .uuid("Invalid brand id"),
});

export const updateProductSchema =
  createProductSchema.partial();