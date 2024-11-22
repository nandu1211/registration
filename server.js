const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let registrations = [];

app.post("/register", (req, res) => {
    const { name, email, event } = req.body;

    if (!name || !email || !event) {
        return res.status(400).send("All fields are required.");
    }

    registrations.push({ name, email, event });
    console.log("Current Registrations:", registrations);

    res.status(201).send("Registration successful!");
});

app.get("/registrations", (req, res) => {
    res.json(registrations);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});