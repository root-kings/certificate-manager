let router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Read API Docs.");
});

router.get("/api", (req, res) => {
  res.send("Read API Docs.");
});

router.use("/api/user", require("./user"));
router.use("/api/certificate", require("./certificate"));

module.exports = router;
