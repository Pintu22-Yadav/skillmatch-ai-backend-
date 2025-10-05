const express = require("express");
const router = express.Router();

// Fake users (for demo)
const users = [];

// Signup
router.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const newUser = { id: Date.now(), username, email, password };
  users.push(newUser);

  res.status(201).json({ message: "Signup successful", user: newUser });
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user });
});

module.exports = router;
