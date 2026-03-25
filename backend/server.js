const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/connection");
const authRoutes = require("./routes/auth.router");
const cookieparser = require("cookie-parser");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieparser());
app.use("/api/v1/auth", authRoutes);

app.use((err, req, res, next) => {
  res.status(400).json({
    status: "failed",
    message: err.message,
  });
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit process with failure
  });
