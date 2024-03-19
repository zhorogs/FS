import express from "express";
import { PORT, mongoDBURL } from "./config.js";

const app = express();


app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send(`First Http Route`)
});

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})