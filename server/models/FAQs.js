import mongoose from 'mongoose';

const FAQsSchema = mongoose.Schema({
  answersID:{type: Number},
  questionsID:{type: Number},
  answers :{type: String},
  questions: {type: String},
});

export default mongoose.model("FAQs",FAQsSchema);
