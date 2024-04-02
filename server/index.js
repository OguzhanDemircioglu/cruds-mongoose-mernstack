import express from 'express';
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./src/router.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

app.use('/posts',router)

app.listen(`${process.env.PORT}`, () => {
    console.log(`Server is running on port ${process.env.PORT}`);

    mongoose.connect(`${process.env.MONGO_URI}`)
        .then(() => {
        console.log("DB is Connected");
    }).catch((reason) => {
        console.error("DB Connection Error:", reason);
    });
});