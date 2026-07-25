import {
  findUserById,
} from "../repositories/user.repository.js";


export async function getUserProfile(
  id: string
) {

  const user = await findUserById(id);


  if (!user) {
    throw new Error("User not found");
  }


  return user;
}