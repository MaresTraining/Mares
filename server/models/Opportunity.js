import mongoose from 'mongoose';

const Opportunitieschema = mongoose.Schema({
  id: {type: String},
  name: {type: String},
  // CompanyID: {type: Number},
  companyID: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
  generalSpecializationField: {type: String},
  specificSpecializationField: {type: String},
  opportunityName: {type: String},
  trainingType: {type: String},
  city: {type: String},
  customizedTrainingPlans: {type: Object},
  trainingDuration: {type: Number},
  semester: {type: String},
  startAndEndDates:{type:  Date},
  workingDays: {type: String},
  workingHours: {type: Number},
  trainingHours: {type: Number},
  trainingPlan: {type: String},
  numberOfTrainees:{type:  Number},
  trainingBonus: {type: Number},
  description: {type: String},
  duties: {type: String},
  benefits: {type: String},
});

export default mongoose.model("Opportunity",Opportunitieschema);
