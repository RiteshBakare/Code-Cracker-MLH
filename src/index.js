import app from "./app.js";
import connectToDatabase from "./db/db.js";
import dotenv from "dotenv";

/// configuring all environmental variables.
dotenv.config({
    path: "./.env",
});

/// connecting to mongo db database.
connectToDatabase()
    .then(() => {

        app.on("error", (error) => {
            console.error("Fail to start server: " + error);
            process.exit(1);
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is Running on PORT ${process.env.PORT}`);
            console.log(`http://localhost:${process.env.PORT}`);
            // navigate to app.js file for routes.
        });

    })
    .catch(() => {
        console.error("DB Connection Failed: " + error);
        process.exit(1);
    });