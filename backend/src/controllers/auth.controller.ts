import type { Request, Response } from "express";
import { registerUser } from "../services/auth.service.js";


export const register = async (
  req: Request,
  res: Response
) => {

  try {

    const user = await registerUser(req.body);


    return res.status(201).json({
      message: "User created successfully",
      user,
    });


  } catch (error) {

    return res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });

  }

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