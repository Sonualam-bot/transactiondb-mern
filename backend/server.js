import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json({ limit: "20mb" }));

app.use(
  express.urlencoded({
    extended: true,
  })
);

//seed to the db
//first make a fetch call to get the json data
//next use the seed db functionality

app.get("*", (req, res) => {
  res.json({ TDashboard: "Server Connected" });
});

app.listen(PORT, () => {
  console.log(`Server connected to port: ${PORT}`);
  connectMongoDB();
});
