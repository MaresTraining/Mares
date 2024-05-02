import express from 'express';
const router = express.Router();
// updateAccount, deleteAccount ه

import { signinCompany, signupCompany , testCompany ,resetPassword,updateProofileCV ,deleteAccount,AddOpportunities} from '../controllers/company.js';

router.post('/sign-in',signinCompany );
router.post('/sign-up', signupCompany);
router.get('/testCompany', testCompany);
router.post("/reset-password", resetPassword);
router.post('/updateProofileCV', updateProofileCV);//CreateProfile/updateProfile
router.post('/deleteAccount', deleteAccount);
router.get('/AddOpportunities', AddOpportunities);

export default router;


