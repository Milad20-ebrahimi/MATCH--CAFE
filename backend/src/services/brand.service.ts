import {
  findAllBrands,
  findBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
} from "../repositories/brand.repository.js";

type CreateBrandInput = {
  name: string;
  slug: string;
  description?: string | null;
  logoUrl?: string | null;
};

type UpdateBrandInput = {
  name?: string;
  slug?: string;
  description?: string | null;
  logoUrl?: string | null;
};

export async function getBrands() {
  return await findAllBrands();
}

export async function getBrandById(id: string) {
  return await findBrandById(id);
}

export async function createNewBrand(
  data: CreateBrandInput
) {
  return await createBrand(data);
}

export async function updateExistingBrand(
  id: string,
  data: UpdateBrandInput
) {
  return await updateBrand(id, data);
}

export async function deleteExistingBrand(
  id: string
) {
  return await deleteBrand(id);
}