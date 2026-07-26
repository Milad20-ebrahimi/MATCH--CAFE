import type {
  Request,
  Response,
} from "express";
import {
  getCategories,
  getCategoryById,
  createNewCategory,
  updateExistingCategory,
  deleteExistingCategory,
} from "../services/category.service.js";


export const getAllCategories = async (
  req: Request,
  res: Response
) => {

  const categories = await getCategories();

  res.json({
    categories,
  });

};



export const getCategory = async (
  req: Request<{ id: string }>,
  res: Response
) => {

  const { id } = req.params;


  const category =
    await getCategoryById(id);


  if (!category) {
    return res.status(404).json({
      message: "Category not found",
    });
  }


  res.json({
    category,
  });

};
export const createCategory = async (
  req: Request,
  res: Response
) => {

  const data = req.body;


  const category =
    await createNewCategory(data);


  res.status(201).json({
    category,
  });

};
export const updateCategory = async (
  req: Request<{ id: string }>,
  res: Response
) => {

  const { id } = req.params;

  const data = req.body;


  const category =
    await updateExistingCategory(
      id,
      data
    );


  if (!category) {
    return res.status(404).json({
      message: "Category not found",
    });
  }


  res.json({
    category,
  });

};
export const deleteCategory = async (
  req: Request<{ id: string }>,
  res: Response
) => {

  const { id } = req.params;


  const category =
    await deleteExistingCategory(id);


  if (!category) {
    return res.status(404).json({
      message: "Category not found",
    });
  }


  res.json({
    message: "Category deleted successfully",
    category,
  });

};