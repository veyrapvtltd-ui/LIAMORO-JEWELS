const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Disable caching for development
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});

// Serve static project files
app.use(express.static(__dirname));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`LIAMORO dev server running on http://localhost:${PORT}`);
});
