import type {
  Response,
  NextFunction,
} from "express";

import type {
  AuthRequest,
} from "./auth.middleware.js";


type Role =
  | "USER"
  | "ADMIN"
  | "STAFF";


export function requireRole(
  ...roles: Role[]
) {

  return (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {


    const userRole =
      req.user?.role as Role | undefined;


    if (!userRole) {

      return res.status(401).json({
        message:
          "Authentication required",
      });

    }


    if (!roles.includes(userRole)) {

      return res.status(403).json({
        message:
          "Access denied",
      });

    }


    next();

  };

}