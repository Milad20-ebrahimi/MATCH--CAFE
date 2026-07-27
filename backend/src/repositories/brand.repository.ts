import { eq } from "drizzle-orm";

import { db } from "../database/index.js";
import { brands } from "../database/schema/brand.schema.js";

type CreateBrandInput = {
  name: string;
  slug: string;
  description?: string | null;
  logoUrl?: string | null;
};

export async function findAllBrands() {
  return await db
    .select({
      id: brands.id,
      name: brands.name,
      slug: brands.slug,
      logoUrl: brands.logoUrl,
    })
    .from(brands);
}

export async function findBrandById(
  id: string
) {
  const brand = await db
    .select({
      id: brands.id,
      name: brands.name,
      slug: brands.slug,
      description: brands.description,
      logoUrl: brands.logoUrl,
      createdAt: brands.createdAt,
    })
    .from(brands)
    .where(eq(brands.id, id))
    .limit(1);

  return brand[0] ?? null;
}

export async function createBrand(
  data: CreateBrandInput
) {
  const brand = await db
    .insert(brands)
    .values(data)
    .returning({
      id: brands.id,
      name: brands.name,
      slug: brands.slug,
      description: brands.description,
      logoUrl: brands.logoUrl,
      createdAt: brands.createdAt,
    });

  return brand[0];
}

export async function updateBrand(
  id: string,
  data: Partial<CreateBrandInput>
) {
  const brand = await db
    .update(brands)
    .set(data)
    .where(eq(brands.id, id))
    .returning({
      id: brands.id,
      name: brands.name,
      slug: brands.slug,
      description: brands.description,
      logoUrl: brands.logoUrl,
      createdAt: brands.createdAt,
    });

  return brand[0] ?? null;
}

export async function deleteBrand(
  id: string
) {
  const brand = await db
    .delete(brands)
    .where(eq(brands.id, id))
    .returning({
      id: brands.id,
      name: brands.name,
      slug: brands.slug,
    });

  return brand[0] ?? null;
}