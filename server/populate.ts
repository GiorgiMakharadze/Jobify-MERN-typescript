import { readFile } from "fs/promises";
import "dotenv/config";
import path from "path";
import { connectDB } from "./db/connect";
import Job from "./models/Job";
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    await Job.deleteMany();
    const filePath = path.join(__dirname, "mock-data.json");
    const jsonData = await readFile(filePath, "utf8");
    const jsonProducts = JSON.parse(jsonData);
    await Job.create(jsonProducts);
    console.log("Success!!!");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

start();
