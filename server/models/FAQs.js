import mongoose from 'mongoose';

const FAQsSchema = mongoose.Schema({
  id: {type: String},
  answersID:{type: Number},
  questionsiD:{type: Number},
  answers :{type: String},
  questions: {type: String},
});

export default mongoose.model("FAQs",FAQsSchema);
