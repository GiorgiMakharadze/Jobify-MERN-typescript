import express from "express";
import "dotenv/config";
import "express-async-errors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import { notFoundMiddleware, errorHandlerMiddleware } from "./middleware/";
import { connectDB } from "./db/connect";
import authenticateUser from "./middleware/auth";
import authRouter from "./routes/authRoutes";
import jobsRouter from "./routes/jobsRoutes";

const app = express();
const port = process.env.PORT || 5000;

//middleware & security
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(cookieParser());

//routes

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

// error handling
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port} ...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
