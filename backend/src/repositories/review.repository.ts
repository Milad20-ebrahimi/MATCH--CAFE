import { eq } from "drizzle-orm";

import { db } from "../database/index.js";

import {
  reviews,
} from "../database/schema/review.schema.js";



export async function createReview(
  data: {
    userId: string;
    productId: string;
    orderId: string;
    rating: number;
    comment?: string;
  }
) {

  const review =
    await db
      .insert(reviews)
      .values({
        userId:
          data.userId,

        productId:
          data.productId,

        orderId:
          data.orderId,

        rating:
          data.rating,

        comment:
          data.comment ?? null,
      })
      .returning();


  return review[0];

}




export async function findProductReviews(
  productId: string
) {

  return await db
    .select()
    .from(reviews)
    .where(
      eq(
        reviews.productId,
        productId
      )
    );

}




export async function findUserReviews(
  userId: string
) {

  return await db
    .select()
    .from(reviews)
    .where(
      eq(
        reviews.userId,
        userId
      )
    );

}




export async function findReviewById(
  id: string
) {

  const review =
    await db
      .select()
      .from(reviews)
      .where(
        eq(
          reviews.id,
          id
        )
      )
      .limit(1);


  return review[0] ?? null;

}




export async function deleteReview(
  id: string
) {

  const review =
    await db
      .delete(reviews)
      .where(
        eq(
          reviews.id,
          id
        )
      )
      .returning();


  return review[0] ?? null;

}