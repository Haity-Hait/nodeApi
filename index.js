import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from "dotenv";
import mongoose from 'mongoose';
import {router as productRoute} from './routers/productRoute.js';
const app = express();
config()

const port = process.env.PORT || 2006;
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
app.use(express.json());
app.use(cors({ origin: "*" }))
app.use("/", productRoute)
mongoose.connect(process.env.MONGOURL)
    .then(() => console.log("Database Connected."))
    .catch(() => console.log("Database Not Connected."))


app.get("/", (req, res) => {
    res.json({ Test: "Testinggg......" })
})


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})
