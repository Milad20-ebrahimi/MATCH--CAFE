import type {
  Request,
  Response,
} from "express";

import type {
  AuthRequest,
} from "../middleware/auth.middleware.js";

import {
  registerUser,
  loginUser,
} from "../services/auth.service.js";

import {
  getUserProfile,
} from "../services/user.service.js";


export const register = async (
  req: Request,
  res: Response
) => {

  const user = await registerUser(
    req.body
  );

  res.json({
    message: "User created successfully",
    user,
  });

};


export const login = async (
  req: Request,
  res: Response
) => {

  const {
    email,
    password,
  } = req.body;


  const result = await loginUser(
    email,
    password
  );


  res.json(result);

};


export const me = async (
  req: AuthRequest,
  res: Response
) => {

  const user = await getUserProfile(
    req.user!.id
  );


  res.json({
    user,
  });

};