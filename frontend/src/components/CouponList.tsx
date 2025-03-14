import { useEffect, useState } from "react";
import { getAvailableCoupons, claimCoupon } from "../api/couponService";
import { Coupon } from "../types";
import { toast } from "react-toastify";

const CouponList = () => {
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchCoupons();
    }, []);

    const fetchCoupons = async () => {
        try {
            setLoading(true);
            const data = await getAvailableCoupons();
            setCoupons(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(`Failed to fetch coupons. \n ${error.message}`);
            } else {
                toast.error("Failed to fetch coupons.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleClaim = async (couponId: string) => {
        try {
            const response = await claimCoupon(couponId);
            toast.success(response.message);
            fetchCoupons();
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error((error as { response?: { data?: { message?: string } } }).response?.data?.message || "Error claiming coupon.");
            } else {
                toast.error("Error claiming coupon.");
            }
        }
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-brick px-4">
        <div className="glass-card w-full max-w-[480px] p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
            🎟 Available Coupons
          </h2>
    
          {loading ? (
            <div className="flex justify-center items-center">
              <span className="spinner"></span>
            </div>
          ) : coupons.length === 0 ? (
            <p className="text-center text-gray-700">No available coupons.</p>
          ) : (
            <ul className="space-y-3">
              {coupons.map((coupon) => (
                <li key={coupon._id} className="coupon-item">
                  <span className="text-sm sm:text-lg font-medium">{coupon.code}</span>
                  <button onClick={() => handleClaim(coupon._id)} className="btn-primary">
                    Claim
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
    
};

export default CouponList;
