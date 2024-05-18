const express = require("express");

const router = express.Router();

router.post("/user", (req, res) => {
  const { username, password } = req.body;

  // Simulate successful login (replace with validation)
  if (username === "user123" && password === "dummy-password") {
    const user = {
      id: 1,
      username,
    };

    res.json({
      success: true,
      user,
    });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
});

module.exports = router;
