import type { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service.js";


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

  try {

    const { email, password } = req.body;


    const result = await loginUser(
      email,
      password
    );


    return res.json({
      message: "Login successful",
      ...result,
    });


  } catch (error) {

    return res.status(401).json({
      message:
        error instanceof Error
          ? error.message
          : "Login failed",
    });

  }

};



export const me = async (
  req: Request,
  res: Response
) => {

  res.json({
    message: "Current user"
  });

};