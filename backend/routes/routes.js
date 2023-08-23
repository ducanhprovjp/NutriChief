// import express 
import express from "express";

import {
    createOtp, verifyOtp
} from "../controllers/otp.js";

import {
    getUser,
    updateUser
} from "../controllers/user.js";

import {
    getMealPref,
    createMealPref,
    updateMealPref
} from "../controllers/mealpref.js";

// init express router
const router = express.Router();

////////////////////////// OTP ////////////////////////////////
// update otp user
router.post("/apis/otp/create", createOtp);

// verify otp user
router.post("/apis/otp/verify", verifyOtp);


////////////////////////// USER ////////////////////////////////
// get user by id
router.post("/apis/user/get", getUser);

// update user
router.post("/apis/user/update", updateUser);


//////////////////////// MEAL PREF //////////////////////////////
// get meal pref by user id
router.post("/apis/mealpref/get", getMealPref);

// create meal pref 
router.post("/apis/mealpref/create", createMealPref);

// update meal pref 
router.post("/apis/mealpref/update", updateMealPref);

// export default router
export default router;