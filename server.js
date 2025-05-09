const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json({ limit: "50mb" }));

app.post("/", (req, res) => {
    console.log(req.body)
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server is running on 3000");
});
