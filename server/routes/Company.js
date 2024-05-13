import express from 'express';
const router = express.Router();
// updateAccount, deleteAccount ه

import { signinCompany, signupCompany , testCompany ,resetPassword,updateProfileCV ,deleteAccount,ViewProfile,ViewStudentPage,AddOpportunities,SelectStudents } from '../controllers/companyController.js';

router.post('/sign-in',signinCompany );
router.post('/sign-up', signupCompany);
router.get('/testCompany', testCompany);
router.post("/reset-password", resetPassword);
router.patch('/update/:id', updateProfileCV);//CreateProfile/updateProfile
router.post('/delete-account', deleteAccount);
router.get('/view-profile', ViewProfile);
router.get('/view-student-page', ViewStudentPage);
router.post('/add-opportunities', AddOpportunities);
router.post('/select-students', SelectStudents);

export default router;
