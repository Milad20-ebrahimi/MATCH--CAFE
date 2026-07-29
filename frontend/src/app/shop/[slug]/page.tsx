import Container from "@/components/shared/Container";

import ProductDetail from "./ProductDetail";

import {
  fetchProductBySlug,
} from "@/features/products/services/product.service";



export default async function ProductPage({
  params,
}: {
  params: Promise<{
    slug:string;
  }>;
}) {


  const {
    slug,
  } = await params;



  const product =
    await fetchProductBySlug(slug);



  if(!product){

    return (

      <main className="py-32">

        <Container>

          <h1 className="text-3xl font-bold">
            محصول پیدا نشد
          </h1>

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
