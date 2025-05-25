import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB with proper async handling
mongoose
.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");

    // Start server only after DB connection is successful
    app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    });
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
});

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
