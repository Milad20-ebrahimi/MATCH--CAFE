import type { ReactNode } from "react";

import AdminSidebar from "@/components/admin/AdminSidebar";


export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {


  return (

    <div
      className="
      min-h-screen
      bg-[#f8f5ed]
      "
    >
      <header
        className="
        bg-[#203c27]
        px-8
        py-5
        text-white
        "
      >
        <div
          className="
          mx-auto
          max-w-7xl
          "
        >
          <h1
            className="
            text-2xl
            font-bold
            "
          >
            MATCH--CAFE Admin
          </h1>
        </div>
      </header>
      <div
        className="
        mx-auto
        flex
        max-w-7xl
        flex-col
        gap-8
        p-8
        lg:flex-row
        "
      >
        <AdminSidebar />
        <main
          className="
          flex-1
          "
        >
          {children}
        </main>
      </div>
    </div>
  );}
