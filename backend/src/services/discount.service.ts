import {
  findDiscountByCode,
  createDiscount,
  findAllDiscounts,
  updateDiscountStatus,
  deleteDiscount,
  increaseDiscountUsage,

} from "../repositories/discount.repository.js";




export async function createNewDiscount(
  data: {
    code: string;
    type:
      | "percentage"
      | "fixed";
    value: number;
    minPurchaseAmount?: number;
    usageLimit?: number;
    startsAt?: Date;
    expiresAt?: Date;
  }
) {

  const existingDiscount =
    await findDiscountByCode(
      data.code
    );


  if (existingDiscount) {
    throw new Error(
      "Discount code already exists"
    );
  }


  return await createDiscount(
    data
  );

}




export async function getDiscounts() {

  return await findAllDiscounts();

}




export async function toggleDiscount(
  id: string,
  isActive: boolean
) {

  const discount =
    await updateDiscountStatus(
      id,
      isActive
    );


  if (!discount) {
    throw new Error(
      "Discount not found"
    );
  }


  return discount;

}




export async function removeDiscount(
  id: string
) {

  const discount =
    await deleteDiscount(
      id
    );


  if (!discount) {
    throw new Error(
      "Discount not found"
    );
  }


  return discount;

}




// مهم‌ترین بخش برای Checkout
export async function calculateDiscount(
  code: string,
  totalAmount: number
) {


  const discount =
    await findDiscountByCode(
      code
    );


  if (!discount) {
    throw new Error(
      "Invalid discount code"
    );
  }



  if (!discount.isActive) {
    throw new Error(
      "Discount is inactive"
    );
  }



  const now =
    new Date();



  if (
    discount.startsAt &&
    now < discount.startsAt
  ) {

    throw new Error(
      "Discount not started"
    );

  }



  if (
    discount.expiresAt &&
    now > discount.expiresAt
  ) {

    throw new Error(
      "Discount expired"
    );

  }



  if (
    discount.minPurchaseAmount &&
    totalAmount < discount.minPurchaseAmount
  ) {

    throw new Error(
      "Minimum purchase amount not reached"
    );

  }



  if (
    discount.usageLimit &&
    discount.usedCount >= discount.usageLimit
  ) {

    throw new Error(
      "Discount usage limit reached"
    );

  }



  let discountAmount = 0;



  if (
    discount.type === "percentage"
  ) {

    discountAmount =
      Math.floor(
        totalAmount *
        discount.value /
        100
      );

  }



  if (
    discount.type === "fixed"
  ) {

    discountAmount =
      discount.value;

  }



 return {
  discount,

  discountAmount,

  finalAmount:
    Math.max(
      0,
      totalAmount - discountAmount
    ),
};

}
export async function increaseUsage(
  id: string,
  tx?: any
) {

  return await increaseDiscountUsage(
    id,
    tx
  );

}