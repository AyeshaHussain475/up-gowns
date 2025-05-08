import express from "express";
import env from "dotenv";
import cors from "cors";

env.config();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
