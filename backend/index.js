require('dotenv').config(); // ✅ Should be at the very top

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Basic route
app.get("/", (req, res) => 
  res.send("Secure Node App Deployed via GitHub Actions 🔐")
);

// Start server
app.listen(3000, () => console.log("🚀 App running on port 3000"));
