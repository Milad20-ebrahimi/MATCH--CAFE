import { Router } from "express";


const router = Router();


router.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Cafe Matcha API is healthy 🚀"
  });
});


export default router;