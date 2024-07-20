const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const {
  authMiddleWare,
  authUserMiddleWare,
} = require("../middleware/authMiddleware");

router.post("/sign-up", userController.createUser);
router.post("/sign-in", userController.loginUser);
router.post("/log-out", userController.logoutUser);
router.put("/update-user/:id", authUserMiddleWare, userController.updateUser);
router.delete(
  "/delete-user/:id",
  authUserMiddleWare,
  userController.deleteUser
);
router.get("/getAll", userController.getAllUser);
router.get(
  "/get-details/:id",
  authUserMiddleWare,
  userController.getDetailUser
);
router.post("/refresh-token", userController.refreshToken);

module.exports = router;
