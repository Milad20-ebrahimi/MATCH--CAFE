import type {
  Request,
  Response,
  NextFunction,
} from "express";

import type { ZodSchema } from "zod";

import { AppError } from "../utils/AppError.js";


export function validate(
  schema: ZodSchema
) {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    const result = schema.safeParse(req.body);


    if (!result.success) {

     throw new AppError(
  "Validation failed",
  400,
  result.error.flatten()
);

    }


    req.body = result.data;

    next();
  };
}