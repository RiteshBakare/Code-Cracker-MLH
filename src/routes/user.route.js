import express from "express";
import {
    getUserDetails,
    loginUser,
    logOut,
    registerUser,
    updateAvatar,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { auth } from "../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser);

userRouter.post("/register", registerUser);

userRouter.post(
    "/update-profile-image",
    auth,
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
    ]),
    updateAvatar
);

userRouter.get("/logout",auth,logOut);

userRouter.get("/details",auth,getUserDetails)

export default userRouter;