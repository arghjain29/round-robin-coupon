import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import couponRoutes from "./routes/couponRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors(
    {
        origin: process.env.CLIENT_URL || "http://localhost:5174",
        credentials: true,
    }
));
app.use(express.json());
app.use(cookieParser());

app.use("/api/coupons", couponRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
