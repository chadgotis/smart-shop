const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const dishes = require("./routes/api/Dishes");

mongoose
  .connect("mongodb://localhost/shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.log(err));

const app = express();

app.use(bodyParser.json());

// dishes route
app.use("/api/dishes", dishes);

const PORT = 5000;

app.listen(PORT, () => console.log(`connection established at port ${PORT}`));
