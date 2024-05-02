import mongoose from 'mongoose';

const applicationSchema= mongoose.Schema({
  id: {type: String},
  opportunitiesId: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
  stID: [{ type: Schema.Types.ObjectId, ref: 'Student' }]


});

export default mongoose.model("Application",applicationSchema);
