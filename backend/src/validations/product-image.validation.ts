import { z } from "zod";


export const createProductImageSchema = z.object({

  productId: z
    .string()
    .uuid("Invalid product id"),


  imageUrl: z
    .string()
    .url("Invalid image url"),


  isPrimary: z
    .boolean()
    .optional()
    .default(false),


  sortOrder: z
    .number()
    .int()
    .min(0)
    .optional()
    .default(0),

});