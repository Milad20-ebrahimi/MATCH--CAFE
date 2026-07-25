import { eq } from "drizzle-orm";
import { db } from "../database/index.js";
import { users } from "../database/schema/user.schema.js";


export async function findUserByEmail(email: string) {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  return user[0] ?? null;
}



export async function createUser(data: {
  name?: string;
  email: string;
  password: string;
  phone?: string;
}) {

  const [user] = await db
    .insert(users)
    .values({
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    })
    .returning();

  return user;
}