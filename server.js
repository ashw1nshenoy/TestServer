const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json({ limit: "50mb" }));

app.post("/", (req, res) => {
    const data = JSON.stringify(req.body, null, 2); // Format the JSON for readability
    const filePath = "systeminfo.json"; // You can change the file name/path as needed

    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return res.status(500).send("Failed to save data.");
        }
        res.send("Data saved successfully.");
    });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server is running on 3000");
});
