import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// middleware for parsing request body
app.use(express.json());

// middleware for handling cors policy
// option 1 - allow all origins with default of cors(*)
app.use(cors());

// first route
app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send("First Http Route")
});

app.use("/books", booksRoute)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to DB")
        app.listen(PORT, () => {
            console.log(`App is listening on ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    });