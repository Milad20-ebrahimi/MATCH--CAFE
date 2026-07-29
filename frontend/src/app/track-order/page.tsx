"use client";

import { Suspense } from "react";
import {  } from "next/navigation";
import { useSearchParams } from "next/navigation";

function TrackOrderContent(){

const searchParams = useSearchParams();


  const orderId =
    searchParams.get("id");


  return (
    <main>
      {/* محتوای فعلی صفحه track-order اینجا باشد */}
    </main>
  );
}



export default function TrackOrderPage(){

  return (
    <Suspense
      fallback={
        <div className="py-32 text-center">
          Loading...
        </div>
      }
    >
      <TrackOrderContent />
    </Suspense>
  );

}
