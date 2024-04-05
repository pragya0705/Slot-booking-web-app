const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyTeacherController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllTeachersController,
  bookeAppointmnetController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//APply Teacher || POST
router.post("/apply-teacher", authMiddleware, applyTeacherController);

//Notifiaction  Teacher || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notifiaction  Teacher || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

router.get("/getAllTeachers", authMiddleware, getAllTeachersController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookeAppointmnetController);

module.exports = router;
