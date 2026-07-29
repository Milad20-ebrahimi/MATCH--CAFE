import { eq, and } from "drizzle-orm";

import { db } from "../database/index.js";
import { addresses } from "../database/schema/address.schema.js";

export type CreateAddressInput = {
  title: string;
  recipientName: string;
  recipientPhone: string;
  province: string;
  city: string;
  address: string;
  postalCode: string;
  buildingNumber?: string | null;
  unit?: string | null;
  isDefault?: boolean;
};

export async function findAddressesByUserId(
  userId: string
) {
  return await db
    .select()
    .from(addresses)
    .where(eq(addresses.userId, userId));
}

export async function findAddressById(
  id: string,
  userId: string
) {
  const result = await db
    .select()
    .from(addresses)
    .where(
      and(
        eq(addresses.id, id),
        eq(addresses.userId, userId)
      )
    )
    .limit(1);

  return result[0] ?? null;
}

export async function createAddress(
  userId: string,
  data: CreateAddressInput
) {
  const result = await db
    .insert(addresses)
    .values({
      userId,
      ...data,
    })
    .returning();

  return result[0];
}

export async function updateAddress(
  id: string,
  userId: string,
  data: Partial<CreateAddressInput>
) {
  const result = await db
    .update(addresses)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(addresses.id, id),
        eq(addresses.userId, userId)
      )
    )
    .returning();

  return result[0] ?? null;
}

export async function deleteAddress(
  id: string,
  userId: string
) {
  const result = await db
    .delete(addresses)
    .where(
      and(
        eq(addresses.id, id),
        eq(addresses.userId, userId)
      )
    )
    .returning();

  return result[0] ?? null;
}

export async function clearDefaultAddresses(
  userId: string
) {
  return await db
    .update(addresses)
    .set({
      isDefault: false,
      updatedAt: new Date(),
    })
    .where(
      eq(addresses.userId, userId)
    );
}