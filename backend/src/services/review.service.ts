import {
  createReview,
  findProductReviews,
  findUserReviews,
  findReviewById,
  deleteReview,
} from "../repositories/review.repository.js";

import {
  findOrderById,
} from "../repositories/order.repository.js";



export async function addReview(
  data: {
    userId: string;
    productId: string;
    orderId: string;
    rating: number;
    comment?: string;
  }
) {


  if (
    data.rating < 1 ||
    data.rating > 5
  ) {

    throw new Error(
      "Rating must be between 1 and 5"
    );

  }



  const order =
    await findOrderById(
      data.orderId
    );


  if (!order) {

    throw new Error(
      "Order not found"
    );

  }



  if (
    order.userId !== data.userId
  ) {

    throw new Error(
      "You cannot review this order"
    );

  }



  if (
    order.status !== "completed"
  ) {

    throw new Error(
      "You can only review completed orders"
    );

  }



  return await createReview(
    data
  );

}




export async function getProductReviews(
  productId: string
) {

  return await findProductReviews(
    productId
  );

}




export async function getUserReviews(
  userId: string
) {

  return await findUserReviews(
    userId
  );

}




export async function getReviewById(
  id: string
) {

  return await findReviewById(
    id
  );

}




export async function removeReview(
  id: string
) {

  return await deleteReview(
    id
  );

}