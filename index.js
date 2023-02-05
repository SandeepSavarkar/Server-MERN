import express from "express";
import cors from "cors";
import router from "./src/router/index.js";
import db from "./src/db/index.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

db.then(() => console.log("connected Db")).catch((err) =>
  console.log("err", err)
);

//Json format dafault middleware
app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
