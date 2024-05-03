import mongoose from 'mongoose';

const applicationSchema= mongoose.Schema({
  opportunitiesId: [{ type: Schema.Types.ObjectId, ref: 'Opportunity' }],
  studentId: [{ type: Schema.Types.ObjectId, ref: 'Student' }]


});

export default mongoose.model("Application",applicationSchema);
