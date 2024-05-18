import express from 'express';
const router = express.Router();

import { addOpportunity,  updateOpportunity ,deleteOpportunity,
    getStudentOpportunities, getCompanyOpportunities, getOpportunity } from '../controllers/opportunityController.js';

router.post('/', addOpportunity );
router.patch('/:id', updateOpportunity);
router.post('/delete', deleteOpportunity);
router.get('/student/:studentId', getStudentOpportunities);
router.get('/company/:companyId', getCompanyOpportunities);
router.get('/:_id', getOpportunity);

export default router;
