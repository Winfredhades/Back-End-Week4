import app from "../index.js";

// Add this middleware after your routes
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});