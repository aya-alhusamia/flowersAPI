const express = require("express");

const { singup } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", singup);
module.exports = router;
