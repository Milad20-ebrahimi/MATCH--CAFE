import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import productRoute from "./routes/product.route.js";
import categoryRoute from "./routes/category.route.js";
import cartRoute from "./routes/cart.route.js";
import wishlistRoute from "./routes/wishlist.route.js";
import orderRoute from "./routes/order.route.js";
import paymentRoute from "./routes/payment.route.js";
import reservationRoute from "./routes/reservation.route.js";
import healthRoute from "./routes/health.route.js";
import brandRoute from "./routes/brand.route.js";
import productImageRoute from "./routes/product-image.route.js";
import inventoryRoute from "./routes/inventory.route.js";
import adminOrderRoute from "./routes/admin-order.route.js";
import adminPaymentRoute from "./routes/admin-payment.route.js";
import adminDiscountRoute from "./routes/admin-discount.route.js";
import reviewRoute from "./routes/review.route.js";
import cafeTableRoute from "./routes/cafe-table.route.js";

import { errorMiddleware } from "./middleware/error.middleware.js";


const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/health", healthRoute);
app.use("/api/v1/health", healthRoute);

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/categories", categoryRoute);
app.use("/api/v1/cart", cartRoute);
app.use("/api/v1/wishlist", wishlistRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/api/v1/payments", paymentRoute);
app.use("/api/v1/reservations", reservationRoute);
app.use("/api/v1/brands", brandRoute);
app.use("/api/v1/admin/orders",adminOrderRoute);
app.use("/api/v1/admin/payments",adminPaymentRoute);
app.use("/api/v1", productImageRoute);
app.use("/api/v1/inventory",inventoryRoute);
app.use("/api/v1/admin/discounts",adminDiscountRoute);
app.use("/api/v1/reviews",reviewRoute);
app.use("/api/v1/cafe-tables", cafeTableRoute);
app.use(errorMiddleware);

export default app;