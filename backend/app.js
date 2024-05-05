const express = require("express");
const cors = require("cors");
require("dotenv").config()

const port = 8080;

const router = require("./routers/bookRoutes");

const app = express();
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.json());

app.use("/book", router);
app.listen(port)
