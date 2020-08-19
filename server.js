require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;

const authRoute = require("./routes/api/auth");
const itemRoute = require("./routes/api/item");
const rewardRoute = require("./routes/api/reward");
const userRoute = require("./routes/api/user");

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/item", itemRoute);
app.use("/api/reward", rewardRoute);
app.use("/api/user", userRoute);

app.listen(port, console.log(`express app running on port:${port}`));
