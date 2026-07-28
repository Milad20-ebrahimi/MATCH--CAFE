import {
  increaseProductStock,
} from "../repositories/product.repository.js";
import {
  createInventoryTransaction,
} from "../repositories/inventory.repository.js";
import {
  decreaseProductStock,
  findProductById,
} from "../repositories/product.repository.js";


export async function addStock(
  data: {
    productId:string;
    quantity:number;
    note?:string;
  }
){

  await increaseProductStock(
    data.productId,
    data.quantity
  );


  return await createInventoryTransaction({
    productId:data.productId,
    quantity:data.quantity,
    type:"IN",
    note:data.note,
  });

}
export async function removeStock(
  data: {
    productId: string;
    quantity: number;
    note?: string;
  }
) {

  const product =
    await findProductById(
      data.productId
    );


  if (!product) {
    throw new Error(
      "Product not found"
    );
  }


  if (
    product.stock < data.quantity
  ) {
    throw new Error(
      "Not enough stock"
    );
  }


  await decreaseProductStock(
    data.productId,
    data.quantity
  );


  return await createInventoryTransaction({

    productId:
      data.productId,

    quantity:
      data.quantity,

    type:
      "OUT",

    note:
      data.note,

  });

}