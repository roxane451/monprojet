const express = require("express");
const router = express.Router();

router.get("/:name(\\w+)", function(req, res, next) {
  res.render("update-user", { name: req.params.name });
});

router.put("/:name", function(req, res, next) {
  res.send(`The new name is ${req.body.name}`);
  console.log(req.body.name);
});

router.get("/:id(\\d+)", function(req, res, next) {
  res.render("delete-user", { id: req.params.id });
});

router.delete("/:id", function(req, res, next) {
  res.send(`The deleted id is ${req.body.id}`);
});

module.exports = router;
