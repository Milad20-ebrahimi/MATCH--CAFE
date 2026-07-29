import type { Request, Response } from "express";

import {
  getAllCafeTables,
  getCafeTableById,
  createNewCafeTable,
  updateExistingCafeTable,
  removeCafeTable,
} from "../services/cafe-table.service.js";


export const getCafeTables = async (
  req: Request,
  res: Response
) => {
  const tables = await getAllCafeTables();

  res.json({
    tables,
  });
};


export const getCafeTable = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;

  const table = await getCafeTableById(id);

  if (!table) {
    return res.status(404).json({
      message: "Cafe table not found",
    });
  }

  res.json({
    table,
  });
};


export const createCafeTable = async (
  req: Request,
  res: Response
) => {
  const table = await createNewCafeTable(
    req.body
  );

  res.status(201).json({
    table,
  });
};


export const updateCafeTable = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;

  const table = await updateExistingCafeTable(
    id,
    req.body
  );

  if (!table) {
    return res.status(404).json({
      message: "Cafe table not found",
    });
  }

  res.json({
    table,
  });
};


export const deleteCafeTable = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;

  const table = await removeCafeTable(id);

  if (!table) {
    return res.status(404).json({
      message: "Cafe table not found",
    });
  }

  res.json({
    message: "Cafe table deleted successfully",
    table,
  });
};