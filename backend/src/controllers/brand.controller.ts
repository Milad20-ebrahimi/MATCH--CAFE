import type { Request, Response } from "express";

import {
  getBrands,
  getBrandById,
  createNewBrand,
  updateExistingBrand,
  deleteExistingBrand,
} from "../services/brand.service.js";

export const getAllBrands = async (
  req: Request,
  res: Response
) => {
  const brands = await getBrands();

  res.json({
    brands,
  });
};

export const getBrand = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;

  const brand = await getBrandById(id);

  if (!brand) {
    return res.status(404).json({
      message: "Brand not found",
    });
  }

  res.json({
    brand,
  });
};

export const createBrand = async (
  req: Request,
  res: Response
) => {
  const brand = await createNewBrand(req.body);

  res.status(201).json({
    brand,
  });
};

export const updateBrand = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;

  const brand = await updateExistingBrand(
    id,
    req.body
  );

  if (!brand) {
    return res.status(404).json({
      message: "Brand not found",
    });
  }

  res.json({
    brand,
  });
};

export const deleteBrand = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;

  const brand = await deleteExistingBrand(id);

  if (!brand) {
    return res.status(404).json({
      message: "Brand not found",
    });
  }

  res.json({
    message: "Brand deleted successfully",
    brand,
  });
};