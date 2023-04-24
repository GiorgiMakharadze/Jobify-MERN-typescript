import express from "express";
import "dotenv/config";
import "express-async-errors";
import morgan from "morgan";
import { notFoundMiddleware, errorHandlerMiddleware } from "./middleware/";
import { connectDB } from "./db/connect";
import authRouter from "./routes/authRoutes";
import jobsRouter from "./routes/jobsRoutes";

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(morgan("tiny"));
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

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
