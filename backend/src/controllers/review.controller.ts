import type {
  Request,
  Response,
} from "express";


import {
  addReview,
  getProductReviews,
  getUserReviews,
  getReviewById,
  removeReview,
} from "../services/review.service.js";



export async function createProductReview(
  req: Request,
  res: Response
) {

  try {

    const userId =
      req.user!.id;


    const {
      productId,
      orderId,
      rating,
      comment,
    } = req.body;



    const review =
      await addReview({
        userId,
        productId,
        orderId,
        rating,
        comment,
      });



    res.status(201).json({
      message:
        "Review created successfully",

      review,
    });


  } catch (error) {

    res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });

  }

}





export async function getReviewsByProduct(
  req: Request,
  res: Response
) {

  try {

   const productId =
  String(req.params.productId);



    const reviews =
      await getProductReviews(
        productId
      );



    res.json({
      reviews,
    });


  } catch (error) {

    res.status(500).json({
      message:
        "Failed to get reviews",
    });

  }

}





export async function getMyReviews(
  req: Request,
  res: Response
) {

  try {

    const userId =
      req.user!.id;



    const reviews =
      await getUserReviews(
        userId
      );



    res.json({
      reviews,
    });


  } catch {

    res.status(500).json({
      message:
        "Failed to get user reviews",
    });

  }

}





export async function getSingleReview(
  req: Request,
  res: Response
) {

  const id =
  String(req.params.id);



  const review =
    await getReviewById(
      id
    );



  if (!review) {

    return res.status(404).json({
      message:
        "Review not found",
    });

  }



  res.json({
    review,
  });

}





export async function deleteProductReview(
  req: Request,
  res: Response
) {

  try {

   const id =
  String(req.params.id);



    const review =
      await removeReview(
        id
      );



    res.json({
      message:
        "Review deleted successfully",

      review,
    });


  } catch {

    res.status(500).json({
      message:
        "Failed to delete review",
    });

  }

}