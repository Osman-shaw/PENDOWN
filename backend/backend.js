// importng modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// initializing express
const app = express();

dotenv.config();

// / Routes
import routes from "./routes/routes.js";

// connecting database
mongoose.connect('mongodb://127.0.0.1:27017/noteapp')
.then((_result) =>
  app.listen(process.env.PORT || 3000, () => {
    console.log("Connection to the Database was established!");
  })
)
.catch((error) => console.log(error));

// Middlewares
app.use(express.json()); // JSON Parser
app.use(express.urlencoded({ extended: true })); // URL Body Parser

// cors
app.use(
  cors({
    origin: "*",
    // credentials: true,
  })
);


app.use("/api", routes);