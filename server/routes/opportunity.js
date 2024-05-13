import express from 'express';
const router = express.Router();

import { saveOpportunity,  updateOpportunity ,deleteOpportunity,
    getOpportunities, getOpportunity } from '../controllers/opportunityController.js';

router.post('/', saveOpportunity );
router.patch('/update/:id', updateOpportunity);
router.post('/delete', deleteOpportunity);
router.get('/', getOpportunities);
router.get('/:_id', getOpportunity);

export default router;
