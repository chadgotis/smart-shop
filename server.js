const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const dishes = require("./routes/api/Dishes");

const uri = process.env.URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.log(err));

const app = express();

app.use(bodyParser.json());

// dishes route
app.use("/api/dishes", dishes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`connection established at port ${PORT}`));
