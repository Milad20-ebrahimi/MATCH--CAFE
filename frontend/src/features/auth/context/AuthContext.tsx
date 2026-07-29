"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import type {
  User,
  UserRole,
} from "../types";
interface AuthContextType {
  user: User | null;
  register: (
    user: Omit<User, "id" | "role">
  ) => boolean;
  login: (
    phone: string,
    password: string
  ) => boolean;
  logout: () => void;
  isAdmin: () => boolean;
}
export const AuthContext = createContext<
  AuthContextType | undefined
>(undefined);
const ADMIN_USER: User = {
  id: "admin-001",
  name: "مدیر کافه",
  phone: "09000000000",
  password: "admin123",
  role: "admin",
};
export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);
  useEffect(() => {
    const savedUser =
      localStorage.getItem(
        "matcha-user"
      );
    if(savedUser){
      setUser(
        JSON.parse(savedUser)
      );}
    const adminExists =
      localStorage.getItem(
        "matcha-admin-created"
      );
    if(!adminExists){
      localStorage.setItem(
        "matcha-admin",
        JSON.stringify(ADMIN_USER)
      );
      localStorage.setItem(
        "matcha-admin-created",
        "true"
      );}}, []);
  function register(
    newUser: Omit<User, "id" | "role">
  ){



    const customerUser: User = {


      id:
        "USR-" +
        Math.random()
        .toString(36)
        .substring(2,8)
        .toUpperCase(),



      ...newUser,



      role: "customer",


    };




    localStorage.setItem(

      "matcha-user",

      JSON.stringify(customerUser)

    );



    setUser(customerUser);



    return true;


  }









  function login(

    phone: string,

    password: string

  ){



    const adminData =
      localStorage.getItem(
        "matcha-admin"
      );



    if(adminData){


      const adminUser: User =
        JSON.parse(adminData);



      if(

        adminUser.phone === phone &&

        adminUser.password === password

      ){


        localStorage.setItem(

          "matcha-user",

          JSON.stringify(adminUser)

        );


        setUser(adminUser);


        return true;


      }


    }









    const savedUser =
      localStorage.getItem(
        "matcha-user"
      );



    if(!savedUser){

      return false;

    }






    const existingUser: User =
      JSON.parse(savedUser);






    if(

      existingUser.phone === phone &&

      existingUser.password === password

    ){


      setUser(existingUser);


      localStorage.setItem(

        "matcha-user",

        JSON.stringify(existingUser)

      );


      return true;


    }






    return false;


  }









  function logout(){


    localStorage.removeItem(

      "matcha-user"

    );


    setUser(null);


  }









  function isAdmin(){


    return user?.role === "admin";


  }









  return (


    <AuthContext.Provider

      value={{

        user,

        register,

        login,

        logout,

        isAdmin,

      }}

    >


      {children}


    </AuthContext.Provider>
);}
