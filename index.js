const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = process.env.PORT || 3000;

// Simple logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`); // Log the HTTP method and URL
    next(); // Pass control to the next middleware or route handler
});

// Connect to SQLite database
const db = new sqlite3.Database('geonames.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the geonames database.');
    }
});

// Geocoding endpoint
app.get('/geocode', (req, res) => {
    const address = req.query.address;

    if (!address) {
        return res.status(400).json({ error: 'Address query parameter is required' });
    }

    const sql = `SELECT latitude, longitude, name FROM geonames WHERE name LIKE ? LIMIT 1`;
    db.get(sql, [`%${address}%`], (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: 'Error querying database' });
        }
        if (!row) {
            return res.status(404).json({ error: 'Address not found' });
        }

        res.json({
            latitude: row.latitude,
            longitude: row.longitude,
            name: row.name,
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
