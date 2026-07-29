import type { Response } from "express";

import type {
  AuthRequest,
} from "../middleware/auth.middleware.js";

import {
  getUserAddresses,
  getUserAddress,
  createUserAddress,
  updateUserAddress,
  deleteUserAddress,
  setDefaultAddress,
} from "../services/address.service.js";


export const getAddresses = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;

  const addresses =
    await getUserAddresses(userId);

  return res.json({
    addresses,
  });
};


export const getAddress = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;

  const address =
    await getUserAddress(
      userId,
      req.params.id as string
    );

  if (!address) {
    return res.status(404).json({
      message: "Address not found",
    });
  }

  return res.json({
    address,
  });
};


export const createAddress = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;

  const address =
    await createUserAddress(
      userId,
      req.body
    );

  return res.status(201).json({
    message:
      "Address created successfully",
    address,
  });
};


export const updateAddress = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;

  const address =
    await updateUserAddress(
      userId,
      req.params.id as string,
      req.body
    );

  if (!address) {
    return res.status(404).json({
      message: "Address not found",
    });
  }

  return res.json({
    message:
      "Address updated successfully",
    address,
  });
};


export const deleteAddress = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;

  const address =
    await deleteUserAddress(
      userId,
      req.params.id as string
    );

  if (!address) {
    return res.status(404).json({
      message: "Address not found",
    });
  }

  return res.json({
    message:
      "Address deleted successfully",
    address,
  });
};


export const setDefault = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;

  const address =
    await setDefaultAddress(
      userId,
      req.params.id as string
    );

  if (!address) {
    return res.status(404).json({
      message: "Address not found",
    });
  }

  return res.json({
    message:
      "Default address updated successfully",
    address,
  });
};