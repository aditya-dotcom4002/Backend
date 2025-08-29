/*
import mongoose from "mongoose";
import {DB_NAME} from './constants';

import express from "express";

const app = express();
 
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Application not able to talk to database", error);
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("Error connecting to database", error);
        throw err;
    }
}) ()



export default app;

*/