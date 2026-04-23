const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! CI/CD Pipeline Working 🚀');
});

const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Auto stop after 5 seconds (for Jenkins)
setTimeout(() => {
    server.close(() => {
        console.log("Server stopped (CI/CD test complete)");
        process.exit(0);
    });
}, 5000);