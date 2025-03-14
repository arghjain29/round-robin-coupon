import axios from "axios";

const BackendUrl = import.meta.env.VITE_BACKEND_URL; // Update if needed

// Function to get or set browser ID
const getOrSetBrowserId = () => {
  let browserId = document.cookie
    .split("; ")
    .find((row) => row.startsWith("browser_id="))
    ?.split("=")[1];

  if (!browserId) {
    browserId = Math.random().toString(36).substr(2, 9); // Generate unique ID
    document.cookie = `browser_id=${browserId}; path=/; max-age=31536000`; // Set for 1 year
  }

  return browserId;
};

export const getAvailableCoupons = async () => {
  try {
    const response = await axios.get(`${BackendUrl}/api/coupons/available`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching coupons:", error);
    throw error;
  }
};

export const claimCoupon = async (couponId: string) => {
  try {
    const browserId = getOrSetBrowserId();
    const response = await axios.post(
      `${BackendUrl}/api/coupons/claim`,
      { couponId },
      { withCredentials: true, headers: { "X-Browser-ID": browserId } }
    );
    return response.data;
  } catch (error) {
    console.error("Error claiming coupon:", error);
    throw error;
  }
};
