const express = require('express');
const { otpSender, signUp, LoginOtp, Login } = require('../controller/Auth');
const { resetPasswordToken, resetPassword } = require('../controller/resetpassword');
const { capturePayment, verifySignature } = require('../controller/payment');
const { auth } = require('../middlewares/auth');
const { getplan } = require('../controller/Plan');
const { checkplan } = require('../controller/checkplan');
const router = express.Router();

router.post("/otpsender",otpSender);
router.post("/signUp",signUp);
router.post("/otplogin",LoginOtp);
router.post("/login",Login);

router.post("/resetPasswordToken",resetPasswordToken);
router.post("/resetPassword",resetPassword);


router.post("/capturePayment",auth,capturePayment);
router.post("/verifySignature",auth,verifySignature);

router.post("/getplan",getplan);

router.post("/checkplan",auth,checkplan);

module.exports = router;