const express = require("express");
const fs = require("path");

const router = express.Router();
const bookingFilePath = fs.join(__dirname, "../bookings.json"); // Adjust path if needed

router.post("/select-seats", (req, res) => {
  const { userId, selectedSeats } = req.body;

  // Read booking data from JSON file
  try {
    const bookingsData = JSON.parse(fs.readFileSync(bookingFilePath, "utf8"));

    // Validate user ID (replace with actual user ID verification)
    if (!userId) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    // Validate selected seats (ensure they're within the range of 1-10)
    if (!selectedSeats || selectedSeats.some((seat) => seat < 1 || seat > 10)) {
      return res.status(400).json({ error: "Invalid seat selection" });
    }

    // Check availability for selected seats
    const unavailableSeats = selectedSeats.filter((seat) => bookingsData[seat]);

    if (unavailableSeats.length > 0) {
      return res.status(409).json({
        error: `Seats ${unavailableSeats.join(", ")} are already booked`,
      });
    }

    // Update bookings data with selected seats
    selectedSeats.forEach((seat) => {
      bookingsData[seat] = userId;
    });

    // Write updated bookings data back to the JSON file
    fs.writeFileSync(bookingFilePath, JSON.stringify(bookingsData, null, 2));

    res.json({ success: true, message: "Seats booked successfully" });
  } catch (error) {
    console.error("Error reading or writing bookings data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
