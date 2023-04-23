import express from "express";
import "dotenv/config";
import morgan from "morgan";
import { notFoundMiddleware, errorHandlerMiddleware } from "./middleware/";
import { connectDB } from "./db/connect";
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("welcome");
});

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
