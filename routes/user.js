let router = require("express").Router();

// Controllers -----

const userController = require("../controllers/user");

router.get("/", userController.index);

router.get("/about", (req, res) => {
  res.send("user about");
});

module.exports = router;
