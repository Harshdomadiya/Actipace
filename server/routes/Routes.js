const express = require('express');
const { otpSender, signUp, LoginOtp, Login } = require('../controller/Auth');
const { resetPasswordToken, resetPassword } = require('../controller/resetpassword');
const { capturePayment, verifySignature } = require('../controller/payment');
const { auth } = require('../middlewares/auth');
const { getplan } = require('../controller/Plan');
const { checkplan } = require('../controller/checkplan');
const { contact } = require('../controller/contact');
const { support } = require('../controller/support');
const { dashboard } = require('../controller/dashboard');
const { totalsecurity , basicdefence,internetsecurity } = require('../controller/downloadlink');
const router = express.Router();

router.post("/otpsender",otpSender);
router.post("/signUp",signUp);
router.post("/otplogin",LoginOtp);
router.post("/login",Login);

router.post("/resetPasswordToken",resetPasswordToken);
router.post("/resetPassword",resetPassword);


router.post("/capturePayment",capturePayment);
router.post("/verifySignature",verifySignature);

router.post("/getplan",getplan);

router.post("/contact",contact);

router.post("/support",support);

router.post("/checkplan",auth,checkplan);

router.get("/dashboard",auth,dashboard);
router.get("/download/totalsecurity",totalsecurity)
router.get("/download/basicdefence",basicdefence)
router.get("/download/internetsecurity",internetsecurity)

module.exports = router;