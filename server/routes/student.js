import express from 'express';
const router = express.Router();
// updateAccount, deleteAccount ه

import { signin, signup, test ,resetPassword,updateProfileCV,deleteAccount,ViewProfile,ViewCompanyPage,FilterTheOpp, SearchForTheOpp,RegistrationInTheOpp, DiscoverLocation,ViewRequest} from '../controllers/student.js';
// ,updateProfile,updateCV
router.post('/sign-in', signin);
router.post('/sign-up', signup);
router.get('/test', test);
router.post('/reset-password', resetPassword);
router.get('/update-profile-cv', updateProfileCV);//CreateProfile/updateProfile
router.get('/delete-account', deleteAccount);
router.post('/view-profile', ViewProfile);
router.post('/view-company-page', ViewCompanyPage);
router.post('/filter-theOpp', FilterTheOpp);
router.post('/search-for-the-opp', SearchForTheOpp);
router.post('/registration-in-the-Opp', RegistrationInTheOpp);
router.post('/discover-location', DiscoverLocation);
router.post('/view-request', ViewRequest);





export default router;
