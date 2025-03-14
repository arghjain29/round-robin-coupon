import express from "express";
import { claimCoupon, getAvailableCoupons } from "../controllers/couponController.js";

const router = express.Router();

router.get("/available", getAvailableCoupons);
router.post("/claim", claimCoupon);

export default router;
