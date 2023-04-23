import express from "express";
import { notFoundMiddleware, errorHandlerMiddleware } from "./middleware/";
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("welcome");
});

// error handling
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => console.log(`Server is listening on port ${port} ...`));
