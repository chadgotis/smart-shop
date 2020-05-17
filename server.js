const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const dishes = require("./routes/api/Dishes");
const auth = require("./routes/api/Auth");

const uri = process.env.URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

// dishes route
app.use("/api/dishes", dishes);
app.use("/", auth);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`connection established at port ${PORT}`));
