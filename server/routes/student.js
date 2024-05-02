import express from 'express';
const router = express.Router();
// updateAccount, deleteAccount ه

import { signin, signup, test ,resetPassword,updateProofileCV,deleteAccount,ViewProfile,ViewCompanyPage} from '../controllers/student.js';
// ,updateProfile,updateCV
router.post('/sign-in', signin);
router.post('/sign-up', signup);
router.get('/test', test);
router.post('/resetPassword', resetPassword);
router.post('/updateProofileCV', updateProofileCV);//CreateProfile/updateProfile
router.post('/deleteAccount', deleteAccount);
router.post('/ViewProfile', ViewProfile);
router.post('/ViewCompanyPage', ViewCompanyPage);




export default router;
