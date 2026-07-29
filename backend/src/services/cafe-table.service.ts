import {
  findAllCafeTables,
  findCafeTableById,
  createCafeTable,
  updateCafeTable,
  deleteCafeTable,
} from "../repositories/cafe-table.repository.js";

export async function getAllCafeTables() {
  return await findAllCafeTables();
}

export async function getCafeTableById(
  id: string
) {
  const table = await findCafeTableById(id);

  if (!table) {
    throw new Error("Cafe table not found");
  }

  return table;
}

export async function createNewCafeTable(
  data: {
    tableNumber: number;
    capacity: number;
    status?: "AVAILABLE" | "INACTIVE" | "MAINTENANCE";
  }
) {
  if (data.tableNumber <= 0) {
    throw new Error("Table number must be greater than 0");
  }

  if (data.capacity <= 0) {
    throw new Error("Table capacity must be greater than 0");
  }

  const existingTables =
    await findAllCafeTables();

  const duplicate =
    existingTables.find(
      (table) =>
        table.tableNumber === data.tableNumber
    );

  if (duplicate) {
    throw new Error(
      "Table number already exists"
    );
  }

  return await createCafeTable(data);
}

export async function updateExistingCafeTable(
  id: string,
  data: {
    tableNumber?: number;
    capacity?: number;
    status?: "AVAILABLE" | "INACTIVE" | "MAINTENANCE";
  }
) {
  const existing =
    await findCafeTableById(id);

  if (!existing) {
    throw new Error("Cafe table not found");
  }

  if (
    data.tableNumber !== undefined &&
    data.tableNumber <= 0
  ) {
    throw new Error(
      "Table number must be greater than 0"
    );
  }

  if (
    data.capacity !== undefined &&
    data.capacity <= 0
  ) {
    throw new Error(
      "Table capacity must be greater than 0"
    );
  }

  if (
    data.tableNumber !== undefined &&
    data.tableNumber !== existing.tableNumber
  ) {
    const allTables =
      await findAllCafeTables();

    const duplicate =
      allTables.find(
        (table) =>
          table.tableNumber ===
          data.tableNumber
      );

    if (duplicate) {
      throw new Error(
        "Table number already exists"
      );
    }
  }

  return await updateCafeTable(
    id,
    data
  );
}

export async function removeCafeTable(
  id: string
) {
  const existing =
    await findCafeTableById(id);

  if (!existing) {
    throw new Error("Cafe table not found");
  }

  return await deleteCafeTable(id);
}