export class AppError extends Error {

  statusCode: number;
  status: string;
  isOperational: boolean;
  errors?: unknown;


  constructor(
    message: string,
    statusCode: number,
    errors?: unknown
  ) {
    super(message);

    this.statusCode = statusCode;

    this.status =
      `${statusCode}`.startsWith("4")
        ? "fail"
        : "error";

    this.errors = errors;

    this.isOperational = true;


    Error.captureStackTrace(
      this,
      this.constructor
    );
  }

}