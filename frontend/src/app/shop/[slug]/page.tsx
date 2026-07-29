import Container from "@/components/shared/Container";
import ProductDetail from "./ProductDetail";

import {
  fetchProductBySlug,
} from "@/features/products/services/product.service";


export default async function ProductPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {


  const { slug } = await params;


  const product =
    await fetchProductBySlug(slug);



  if (!product) {

    return (

      <main className="bg-[#f8f5ed] py-32">

        <Container>

          <div
            className="
            rounded-[40px]
            border
            border-[#0d1a12]/10
            bg-white/70
            p-12
            text-center
            shadow-xl
            backdrop-blur-xl
            "
          >

            <h1
              className="
              text-3xl
              font-light
              text-[#0d1a12]
              "
            >
              محصول پیدا نشد
            </h1>


            <p
              className="
              mt-4
              text-sm
              text-[#0d1a12]/60
              "
            >
              محصول مورد نظر وجود ندارد یا حذف شده است.
            </p>


          </div>


        </Container>

      </main>

    );

  }



  return (

    <ProductDetail
      product={product}
    />

  );

}
