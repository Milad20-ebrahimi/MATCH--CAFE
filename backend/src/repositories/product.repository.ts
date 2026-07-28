import { eq } from "drizzle-orm";
import { db } from "../database/index.js";
import { products } from "../database/schema/product.schema.js";
import { categories } from "../database/schema/category.schema.js";
import { brands } from "../database/schema/brand.schema.js";
import { productImages } from "../database/schema/product-image.schema.js";
import type {
  NodePgDatabase,
} from "drizzle-orm/node-postgres";
type Database = NodePgDatabase<any>;
type CreateProductInput = {
  name: string;
  slug: string;
  description: string | null;
  price: number;
  stock: number;
  imageUrl: string | null;

  categoryId: string;
  brandId: string;
};
type UpdateProductInput = {
  name?: string;
  slug?: string;
  description?: string | null;
  price?: number;
  stock?: number;
  imageUrl?: string | null;

  categoryId?: string;
  brandId?: string;
};
export async function findAllProducts() {

  const result = await db
    .select({
      id: products.id,
      name: products.name,
      slug: products.slug,
      price: products.price,
      stock: products.stock,
      imageUrl: products.imageUrl,

      category: {
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
      },

      brand: {
        id: brands.id,
        name: brands.name,
        slug: brands.slug,
      },

      images: {
        id: productImages.id,
        imageUrl: productImages.imageUrl,
        isPrimary: productImages.isPrimary,
        sortOrder: productImages.sortOrder,
      },

    })
    .from(products)
    .leftJoin(
      categories,
      eq(products.categoryId, categories.id)
    )
    .leftJoin(
      brands,
      eq(products.brandId, brands.id)
    )
    .leftJoin(
      productImages,
      eq(products.id, productImages.productId)
    );


  const productsMap = new Map();


  for (const row of result) {

    if (!productsMap.has(row.id)) {

      productsMap.set(row.id, {
        id: row.id,
        name: row.name,
        slug: row.slug,
        price: row.price,
        stock: row.stock,
        imageUrl: row.imageUrl,

        category: row.category,
        brand: row.brand,

        images: [],
      });

    }


    if (row.images?.id) {

      productsMap
        .get(row.id)
        .images
        .push(row.images);

    }

  }


  return Array.from(productsMap.values());

}
export async function findProductById(
  id: string
) {

  const result = await db
    .select({
      id: products.id,
      name: products.name,
      slug: products.slug,
      description: products.description,
      price: products.price,
      stock: products.stock,
      imageUrl: products.imageUrl,

      category: {
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
      },

      brand: {
        id: brands.id,
        name: brands.name,
        slug: brands.slug,
      },

      images: {
        id: productImages.id,
        imageUrl: productImages.imageUrl,
        isPrimary: productImages.isPrimary,
        sortOrder: productImages.sortOrder,
      },

    })
    .from(products)
    .leftJoin(
      categories,
      eq(products.categoryId, categories.id)
    )
    .leftJoin(
      brands,
      eq(products.brandId, brands.id)
    )
    .leftJoin(
      productImages,
      eq(products.id, productImages.productId)
    )
    .where(
      eq(products.id, id)
    );


  if (!result.length) {
    return null;
  }


  const product = {
    id: result[0].id,
    name: result[0].name,
    slug: result[0].slug,
    description: result[0].description,
    price: result[0].price,
    stock: result[0].stock,
    imageUrl: result[0].imageUrl,

    category: result[0].category,
    brand: result[0].brand,

    images: Array<{
  id: string;
  imageUrl: string;
  isPrimary: boolean;
  sortOrder: number;
}>(),
  };


  for (const row of result) {

    if (row.images?.id) {

      product.images.push(
        row.images
      );

    }

  }


  return product;
}
export async function createProduct(
  data: CreateProductInput
) {
  const product = await db
    .insert(products)
    .values(data)
    .returning({
      id: products.id,
      name: products.name,
      slug: products.slug,
      description: products.description,
      price: products.price,
      stock: products.stock,
      imageUrl: products.imageUrl,
      createdAt: products.createdAt,
    });

  return product[0];
}
export async function updateProductById(
  id: string,
  data: UpdateProductInput
) {
  const product = await db
    .update(products)
    .set(data)
    .where(eq(products.id, id))
    .returning({
      id: products.id,
      name: products.name,
      slug: products.slug,
      description: products.description,
      price: products.price,
      stock: products.stock,
      imageUrl: products.imageUrl,
      updatedAt: products.updatedAt,
    });


  return product[0] ?? null;
}
export async function deleteProductById(
  id: string
) {
  const product = await db
    .delete(products)
    .where(eq(products.id, id))
    .returning({
      id: products.id,
      name: products.name,
      slug: products.slug,
    });

  return product[0] ?? null;
}
export async function decreaseProductStock(
  productId: string,
  quantity: number,
  tx: Database = db
) {

  const product = await tx
    .select({
      id: products.id,
      stock: products.stock,
    })
    .from(products)
    .where(
      eq(products.id, productId)
    )
    .limit(1);


  const currentProduct = product[0];


  if (!currentProduct) {
    throw new Error(
      "Product not found"
    );
  }


  if (currentProduct.stock < quantity) {
    throw new Error(
      "Not enough stock"
    );
  }


  const updatedProduct = await tx
    .update(products)
    .set({
      stock:
        currentProduct.stock - quantity,
    })
    .where(
      eq(products.id, productId)
    )
    .returning();


  return updatedProduct[0];

}