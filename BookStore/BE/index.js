import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send(`First Http Route`)
});

app.post('/books', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all erquired fields: title, author, publishYear'
            })
        }
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

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