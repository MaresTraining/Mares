import mongoose from 'mongoose';

const applicationSchema= mongoose.Schema({
  opportunityId: [{ type: Schema.Types.ObjectId, ref: 'Opportunity' }],
  studentId: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});

export default mongoose.model("Application",applicationSchema);
