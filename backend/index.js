// backend/index.js
const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Secure Node App Deployed via GitHub Actions 🔐"));
app.listen(3000, () => console.log("App running on port 3000"));
