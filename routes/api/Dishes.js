const express = require("express");
const router = express.Router();

const Dish = require("../../models/Dish");

//@route GET item
//@desc ALL item
//@access Public for now
router.get("/", (req, res) => {
  Dish.find().then((dishes) => res.json(dishes));
});

//@route POST item
//@access Public for now

router.post("/", (req, res) => {
  const newDish = new Dish({
    name: req.body.name,
    price: req.body.price,
  });
  newDish.save().then((dish) => res.json(dish));
});

//@route DELETE item
//@access Public for now

router.delete("/:id", (req, res) => {
  Dish.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
