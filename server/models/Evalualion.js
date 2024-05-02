import mongoose from 'mongoose';

const evaluationsSchema = mongoose.Schema({
  id: {type: String},
 // studentID:{type: Number},
  //opportunityID :{type: Number},
  comment: {type: String},
  numOiStars:{type: Number},
});

export default mongoose.model("Evaluation",evaluationsSchema);
