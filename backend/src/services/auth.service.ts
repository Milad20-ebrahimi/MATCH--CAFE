import bcrypt from "bcrypt";
import {
  findUserByEmail,
  createUser,
} from "../repositories/auth.repository.js";


interface RegisterInput {
  name?: string;
  email: string;
  password: string;
  phone?: string;
}


export async function registerUser(
  data: RegisterInput
) {

  // 1. Check existing user
  const existingUser = await findUserByEmail(
    data.email
  );


  if (existingUser) {
    throw new Error("Email already exists");
  }


  // 2. Hash password
  const hashedPassword = await bcrypt.hash(
    data.password,
    10
  );


  // 3. Create user
  const user = await createUser({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    phone: data.phone,
  });


  // 4. Return safe user data
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}