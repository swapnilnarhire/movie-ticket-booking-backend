const express = require("express");

const router = express.Router();

const moviesData = [
  {
    id: 1,
    title: "Movie Title 1",
    description: "A brief description of the movie.",
    image: "https://source.unsplash.com/featured/?movie",
  },
  {
    id: 2,
    title: "Movie Title 2",
    description: "A brief description of the movie.",
    image: "https://source.unsplash.com/featured/?movie",
  },
  {
    id: 3,
    title: "Movie Title 3",
    description: "A brief description of the movie.",
    image: "https://source.unsplash.com/featured/?movie",
  },
  {
    id: 4,
    title: "Movie Title 4",
    description: "A brief description of the movie.",
    image: "https://source.unsplash.com/featured/?movie",
  },
  {
    id: 5,
    title: "Movie Title 5",
    description: "A brief description of the movie.",
    image: "https://source.unsplash.com/featured/?movie",
  },
  {
    id: 6,
    title: "Movie Title 6",
    description: "A brief description of the movie.",
    image: "https://source.unsplash.com/featured/?movie",
  },
  {
    id: 7,
    title: "Movie Title 7",
    description: "A brief description of the movie.",
    image: "https://source.unsplash.com/featured/?movie",
  },
  {
    id: 8,
    title: "Movie Title 8",
    description: "A brief description of the movie.",
    image: "https://source.unsplash.com/featured/?movie",
  },
  {
    id: 9,
    title: "Movie Title 9",
    description: "A brief description of the movie.",
    image: "https://source.unsplash.com/featured/?movie",
  },
  {
    id: 10,
    title: "Movie Title 10",
    description: "A brief description of the movie.",
    image: "https://source.unsplash.com/featured/?movie",
  },
];

router.get("/data", (req, res) => {
  res.json(moviesData);
});

module.exports = router;
