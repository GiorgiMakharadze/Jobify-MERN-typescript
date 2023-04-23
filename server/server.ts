import express from "express";
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(port, () => console.log(`Server is listening on port ${port} ...`));
