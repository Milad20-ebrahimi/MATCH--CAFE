import { eq } from "drizzle-orm";

import { db } from "../database/index.js";
import { cafeTables } from "../database/schema/cafe-table.schema.js";

type CreateCafeTableInput = {
  tableNumber: number;
  capacity: number;
  status?: "AVAILABLE" | "INACTIVE" | "MAINTENANCE";
};

export async function findAllCafeTables() {
  return await db
    .select({
      id: cafeTables.id,
      tableNumber: cafeTables.tableNumber,
      capacity: cafeTables.capacity,
      status: cafeTables.status,
      createdAt: cafeTables.createdAt,
      updatedAt: cafeTables.updatedAt,
    })
    .from(cafeTables);
}

export async function findCafeTableById(
  id: string
) {
  const table = await db
    .select({
      id: cafeTables.id,
      tableNumber: cafeTables.tableNumber,
      capacity: cafeTables.capacity,
      status: cafeTables.status,
      createdAt: cafeTables.createdAt,
      updatedAt: cafeTables.updatedAt,
    })
    .from(cafeTables)
    .where(eq(cafeTables.id, id))
    .limit(1);

  return table[0] ?? null;
}

export async function createCafeTable(
  data: CreateCafeTableInput
) {
  const table = await db
    .insert(cafeTables)
    .values(data)
    .returning({
      id: cafeTables.id,
      tableNumber: cafeTables.tableNumber,
      capacity: cafeTables.capacity,
      status: cafeTables.status,
      createdAt: cafeTables.createdAt,
      updatedAt: cafeTables.updatedAt,
    });

  return table[0];
}

export async function updateCafeTable(
  id: string,
  data: Partial<CreateCafeTableInput>
) {
  const table = await db
    .update(cafeTables)
    .set(data)
    .where(eq(cafeTables.id, id))
    .returning({
      id: cafeTables.id,
      tableNumber: cafeTables.tableNumber,
      capacity: cafeTables.capacity,
      status: cafeTables.status,
      updatedAt: cafeTables.updatedAt,
    });

  return table[0] ?? null;
}

export async function deleteCafeTable(
  id: string
) {
  const table = await db
    .delete(cafeTables)
    .where(eq(cafeTables.id, id))
    .returning({
      id: cafeTables.id,
      tableNumber: cafeTables.tableNumber,
    });

  return table[0] ?? null;
}