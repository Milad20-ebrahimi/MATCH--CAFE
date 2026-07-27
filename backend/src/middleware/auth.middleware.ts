import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/jwt.js";


export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}


export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {

  const authHeader = req.headers.authorization;


  if (!authHeader) {
    return res.status(401).json({
      message: "Authentication required",
    });
  }


  const token = authHeader.split(" ")[1];


  if (!token) {
    return res.status(401).json({
      message: "Invalid token format",
    });
  }


  try {

    const decoded = jwt.verify(
      token,
      JWT_SECRET
    ) as {
      id: string;
      email: string;
      role: string;
    };


    req.user = decoded;


    next();


  } catch (error) {

    return res.status(401).json({
      message: "Invalid or expired token",
    });

  }

}