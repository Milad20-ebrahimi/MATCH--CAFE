import type { Response } from "express";

import type { AuthRequest } from "../middleware/auth.middleware.js";

import {
  getUserProfile,
} from "../services/user.service.js";


export const getMe = async (
  req: AuthRequest,
  res: Response
) => {

  const user = await getUserProfile(
    req.user!.id
  );

console.log("USER CONTROLLER RUNNING");
console.log(user);
  res.json({
    user,
  });

};