const express = require("express");

const loginRouter = require("./routes/login.js");
const seatsRouter = require("./routes/seats.js");
const moviesRouter = require("./routes/movies.js");

const app = express();
const port = 3000; // Adjust port number as needed

app.use(express.json()); // Parse incoming JSON data

// Mount the routers to specific paths
app.use("/api/login", loginRouter);
app.use("/api/seats", seatsRouter);
app.use("/api/movies", moviesRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Error handling (optional):
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
