import {
  createAddress,
  deleteAddress,
  findAddressById,
  findAddressesByUserId,
  updateAddress,
  clearDefaultAddresses,
} from "../repositories/address.repository.js";

import type {
  CreateAddressInput,
} from "../repositories/address.repository.js";

export async function getUserAddresses(
  userId: string
) {
  return await findAddressesByUserId(userId);
}

export async function getUserAddress(
  userId: string,
  addressId: string
) {
  return await findAddressById(
    addressId,
    userId
  );
}

export async function createUserAddress(
  userId: string,
  data: CreateAddressInput
) {
  if (data.isDefault) {
    await clearDefaultAddresses(userId);
  }

  return await createAddress(
    userId,
    data
  );
}

export async function updateUserAddress(
  userId: string,
  addressId: string,
  data: Partial<CreateAddressInput>
) {
  const existingAddress =
    await findAddressById(
      addressId,
      userId
    );

  if (!existingAddress) {
    return null;
  }

  if (data.isDefault) {
    await clearDefaultAddresses(userId);
  }

  return await updateAddress(
    addressId,
    userId,
    data
  );
}

export async function deleteUserAddress(
  userId: string,
  addressId: string
) {
  return await deleteAddress(
    addressId,
    userId
  );
}

export async function setDefaultAddress(
  userId: string,
  addressId: string
) {
  const existingAddress =
    await findAddressById(
      addressId,
      userId
    );

  if (!existingAddress) {
    return null;
  }

  await clearDefaultAddresses(userId);

  return await updateAddress(
    addressId,
    userId,
    {
      isDefault: true,
    }
  );
}