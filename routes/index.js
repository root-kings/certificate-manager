let router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Read API Docs.");
});

router.use("/api/user", require("./user"));

module.exports = router;
