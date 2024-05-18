import mongoose from "mongoose";
const { Schema, model, SchemaTypes } = mongoose;

const Opportunitieschema = Schema({
  name: {type: String},
  companyId: {type: SchemaTypes.ObjectId, ref: 'Company', required: true}, 
  generalSpecializationField: {type: String},
  specificSpecializationField: {type: String},
  opportunityName: {type: String},
  trainingType: {type: String},
  city: {type: String},
  customizedTrainingPlans: {type: Object},
  trainingDuration: {type: Number},
  semester: {type: String},
  startDates:{type:  Date},
  endDates:{type:  Date},
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

export default model("Opportunity",Opportunitieschema);
