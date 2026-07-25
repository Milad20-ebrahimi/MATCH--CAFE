import type { Request, Response } from "express";

export const register = async (
  req: Request,
  res: Response
) => {
  res.json({
    message: "Register endpoint"
  });
};

export const login = async (
  req: Request,
  res: Response
) => {
  res.json({
    message: "Login endpoint"
  });
};

export const me = async (
  req: Request,
  res: Response
) => {
  res.json({
    message: "Current user"
  });
};