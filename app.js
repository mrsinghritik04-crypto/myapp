const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! CI/CD Pipeline Working 🚀');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
