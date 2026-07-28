import bcrypt from "bcrypt";

import { db } from "../database/index.js";
import { users } from "../database/schema/user.schema.js";


async function seedAdmin() {

  const hashedPassword = await bcrypt.hash(
    "123456",
    10
  );


  await db
    .insert(users)
    .values({
      name: "Admin",
      email: "admin@matcha.com",
      password: hashedPassword,
      role: "ADMIN",
    });


  console.log(
    "Admin created successfully"
  );


  process.exit(0);
}


seedAdmin();