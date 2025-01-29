const express = require("express");
const movieRoutes = require("./routes/movieRoutes");
const setupSwagger = require("./swagger");

const app = express();
app.use(express.json());

setupSwagger(app);
app.use("/api/movies", movieRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;