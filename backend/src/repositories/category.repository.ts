import { eq } from "drizzle-orm";

import { db } from "../database/index.js";
import { categories } from "../database/schema/category.schema.js";
type CreateCategoryInput = {
  name: string;
  slug: string;
  description?: string | null;
  type: "CAFE" | "STORE";
};

export async function findAllCategories() {

  return await db
    .select({
      id: categories.id,
      name: categories.name,
      slug: categories.slug,
      description: categories.description,
      type: categories.type,
    })
    .from(categories);

}


export async function findCategoryById(
  id: string
) {

  const category = await db
    .select({
      id: categories.id,
      name: categories.name,
      slug: categories.slug,
      description: categories.description,
      type: categories.type,
    })
    .from(categories)
    .where(eq(categories.id, id))
    .limit(1);


  return category[0] ?? null;

}
export async function createCategory(
  data: CreateCategoryInput
) {

  const category = await db
    .insert(categories)
    .values(data)
    .returning({
      id: categories.id,
      name: categories.name,
      slug: categories.slug,
      description: categories.description,
      type: categories.type,
      createdAt: categories.createdAt,
    });


  return category[0];

}
export async function updateCategory(
  id: string,
  data: Partial<CreateCategoryInput>
) {

  const category = await db
    .update(categories)
    .set(data)
    .where(eq(categories.id, id))
    .returning({
      id: categories.id,
      name: categories.name,
      slug: categories.slug,
      description: categories.description,
      type: categories.type,
      createdAt: categories.createdAt,
    });


  return category[0] ?? null;

}export async function deleteCategory(
  id: string
) {

  const category = await db
    .delete(categories)
    .where(eq(categories.id, id))
    .returning({
      id: categories.id,
      name: categories.name,
      slug: categories.slug,
    });


  return category[0] ?? null;

}