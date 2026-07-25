import { eq } from "drizzle-orm";
import { db } from "../database/index.js";
import { users } from "../database/schema/user.schema.js";


export async function findUserById(
  id: string
) {

  const user = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
      phone: users.phone,
      createdAt: users.createdAt,
    })
    .from(users)
    .where(eq(users.id, id))
    .limit(1);


  return user[0] ?? null;
}