import Coupon from "../models/coupon.js";
import ClaimRecord from "../models/ClaimRecord.js";
import { getClientIP, getBrowserId } from "../middleware/abusePrevention.js";


export const getAvailableCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find({ isClaimed: false });
    res.json(coupons);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const claimCoupon = async (req, res) => {
  try {
    const { couponId } = req.body; // Coupon ID selected by the user
    const ipAddress = getClientIP(req);
    const browserId = getBrowserId(req);

    // Check if the user has claimed a coupon within the last hour
    const existingClaim = await ClaimRecord.findOne({
      $or: [{ ipAddress }, { browserId }],
      claimedAt: { $gte: new Date(Date.now() - 60 * 60 * 1000) } // 1-hour restriction
    });

    if (existingClaim) {
      return res.status(429).json({ message: "You can claim another coupon after an hour." });
    }

    // Validate if the selected coupon is available
    const coupon = await Coupon.findOne({ _id: couponId, isClaimed: false });

    if (!coupon) {
      return res.status(400).json({ message: "Coupon is already claimed or does not exist." });
    }

    // Mark the selected coupon as claimed
    await Coupon.updateOne({ _id: couponId }, { $set: { isClaimed: true } });

    // Save the claim record in the ClaimCoupon collection
    await ClaimRecord.create({
      couponId,
      ipAddress,
      browserId,
      claimedAt: new Date()
    });

    res.json({ message: "Coupon claimed successfully!", couponCode: coupon.code });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};

