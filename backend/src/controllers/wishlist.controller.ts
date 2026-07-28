import type { Request, Response } from "express";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../services/wishlist.service.js";

export const getWishlistController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const wishlist = await getWishlist(userId);

    return res.status(200).json({
      success: true,
      data: wishlist,
    });
  } catch (error) {
    console.error("Get wishlist error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get wishlist",
    });
  }
};

export const addToWishlistController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.user?.id;
    const { productId } = req.body;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    const wishlistItem = await addToWishlist(
      userId,
      productId
    );

    return res.status(201).json({
      success: true,
      data: wishlistItem,
    });
  } catch (error) {
    console.error("Add to wishlist error:", error);

    if (
      error instanceof Error &&
      error.message === "Product is already in wishlist"
    ) {
      return res.status(409).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to add product to wishlist",
    });
  }
};

export const removeFromWishlistController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.user?.id;
    const productId = req.params.productId as string;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    await removeFromWishlist(
      userId,
      productId
    );

    return res.status(200).json({
      success: true,
      message: "Product removed from wishlist",
    });
  } catch (error) {
    console.error("Remove from wishlist error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to remove product from wishlist",
    });
  }
};