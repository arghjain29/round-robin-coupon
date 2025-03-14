import mongoose from "mongoose";

const claimRecordSchema = new mongoose.Schema({
  ipAddress: { type: String, required: true },
  browserId: { type: String, required: true },
  couponId: { type: mongoose.Schema.Types.ObjectId, ref: "Coupon", required: true },
  claimedAt: { type: Date, default: Date.now }
});

export default mongoose.model("ClaimRecord", claimRecordSchema);
