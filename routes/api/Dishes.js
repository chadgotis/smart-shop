const express = require("express");
const router = express.Router();

const Dish = require("../../models/Dish");

//* @route GET item
router.get("/", async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//* @route GET by 1
router.get("/:id", getDishId, async (req, res) => {
  try {
    const dish = await res.dish;
    res.json(dish);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

//* @route POST item
router.post("/", async (req, res) => {
  // const newDish = new Dish({
  //   name: req.body.name,
  //   price: req.body.price,
  // });
  // newDish.save().then((dish) => res.json(dish));
  try {
    const dish = new Dish({
      name: req.body.name,
      price: req.body.price,
    });
    const newDish = await dish.save();
    res.json(newDish);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//* @route DELETE item

router.delete("/:id", getDishId, async (req, res) => {
  // Dish.findById(req.params.id)
  //   .then((item) => item.remove().then(() => res.json({ success: true })))
  //   .catch((err) => res.status(404).json({ success: false }));
  try {
    await res.dish.remove();
    res.json({ message: "Success" });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

async function getDishId(req, res, next) {
  let dish;
  try {
    dish = await Dish.findById(req.params.id);
    if (dish == null) {
      return res.status(404).json({ message: "Dish doesnt exist" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.dish = dish;
  next();
}

module.exports = router;
