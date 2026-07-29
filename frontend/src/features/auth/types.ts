export type UserRole =
  | "customer"
  | "admin";


export interface User {

  id: string;

  name: string;

  phone: string;

  password: string;

  role: UserRole;

}
