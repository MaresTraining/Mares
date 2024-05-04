import mongoose from 'mongoose';

const evaluationsSchema = mongoose.Schema({
  opportunityId: { type: mongoose.Types.ObjectId, ref: 'Opportunity', required: true },
  studentId:{type: mongoose.Types.ObjectId, ref: 'Student', required: true},
  comment: {type: String},
  numOfStars:{type: Number},
});

export default mongoose.model("Evaluation",evaluationsSchema);
