const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/expense/add-user", userController.adduser);
router.get("/expense/get-users", userController.getElement);
router.delete("/expense/delete-user/:id", userController.getDelete);
module.exports = router;
