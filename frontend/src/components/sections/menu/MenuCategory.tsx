import { Suspense } from "react";
import MenuCategoryClient from "./MenuCategoryClient";


export default function MenuCategory() {

  return (
    <Suspense fallback={null}>
      <MenuCategoryClient />
    </Suspense>
  );

}
