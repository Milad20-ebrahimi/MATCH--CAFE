import type {
  Request,
  Response,
  NextFunction,
} from "express";

import { ZodError } from "zod";


export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {

  console.error(err);


  if (err instanceof ZodError) {

    return res.status(400).json({
      status: "fail",
      message: "Validation failed",
      errors: err.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });

  }


  const statusCode =
    err.statusCode || 500;


  const message =
    err.message || "Internal Server Error";


 return res.status(statusCode).json({
  status:
    statusCode >= 400 && statusCode < 500
      ? "fail"
      : "error",

  message,

  ...(err.errors && {
    errors: err.errors,
  }),
});

}