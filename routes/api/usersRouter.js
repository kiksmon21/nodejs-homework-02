import express from "express";
import { ctrlWrapper } from "../../helpers/ctrlWrapper.js";
import { getCurrentUsers, loginUser, logoutUser, signupUser, updateAvatar, updateUserSubscription, verifyEmail, resendVerifyEmail } from "../../controllers/usersController.js";
import { authenticateToken } from "../../middlewares/authenticateToken.js";
import { upload } from "../../middlewares/upload.js";

const router = express.Router()

router.post('/signup', ctrlWrapper(signupUser));

router.post('/login', ctrlWrapper(loginUser));

router.get('/logout', authenticateToken, ctrlWrapper(logoutUser));

router.get('/current',authenticateToken, ctrlWrapper(getCurrentUsers));

router.patch('/', authenticateToken, ctrlWrapper(updateUserSubscription));

router.patch('/avatars', authenticateToken, upload.single("avatar"), ctrlWrapper(updateAvatar));

router.get("/verify/:verificationToken", ctrlWrapper(verifyEmail));

router.post("/verify", authenticateToken, ctrlWrapper(resendVerifyEmail));

export { router };
