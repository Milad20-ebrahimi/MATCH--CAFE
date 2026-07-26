import {
  findAllCategories,
  findCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../repositories/category.repository.js";


export async function getCategories() {

  return await findAllCategories();

}


export async function getCategoryById(
  id: string
) {

  return await findCategoryById(id);

}
type CreateCategoryInput = {
  name: string;
  slug: string;
  description?: string | null;
  type: "CAFE" | "STORE";
};


export async function createNewCategory(
  data: CreateCategoryInput
) {

  return await createCategory(data);

}
type UpdateCategoryInput = {
  name?: string;
  slug?: string;
  description?: string | null;
  type?: "CAFE" | "STORE";
};


export async function updateExistingCategory(
  id: string,
  data: UpdateCategoryInput
) {

  return await updateCategory(
    id,
    data
  );

}
export async function deleteExistingCategory(
  id: string
) {

  return await deleteCategory(id);

}