import { Router } from "express";

import {
  getImagesByProduct,
  getImage,
  createImage,
  deleteImage,
} from "../controllers/product-image.controller.js";


const router = Router();



router.get(
  "/products/:productId/images",
  getImagesByProduct
);


router.get(
  "/products/images/:id",
  getImage
);


router.post(
  "/products/:productId/images",
  createImage
);


router.delete(
  "/products/images/:id",
  deleteImage
);



export default router;