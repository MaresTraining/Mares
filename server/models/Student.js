import mongoose from "mongoose";
const { Schema, model, SchemaTypes } = mongoose;
const studentSchema = Schema({
  firstName: {type: String},
  lastName:  {type: String},
  email: {type: String,  trim: true, minlength: 5, maxlength: 100, unique: true,required: true},
  password: {type: String,  trim: true, minlength: 8, required: true},
  role:{type: String , default:"student"},
  dateOfBirth: {type:Date},
  city: {type:String},
  phoneNumber:{type:  String},
  universityName: {type:String},
  collegeName: {type:String},//4
  major: {type:String},
  academicLevel: {type:String},
  graduationDate: {type:Date},//6
  language: {type:String},//7
  discription: {type: String},//1
  cv: {type:Object},//2
  certificates: {type: Object},//3
  technicalSkills: {type:String},
  jobRelatedSkills: {type:String},
  tools: {type:String},
  administrativeSkills: {type:String},
  // experiences: {type:String},
  companyName: {type:String},
  jobTitle: {type:String},
  companyLocation: {type:String},
  typeOfTheJob: {type:String},
  workDescription: {type:String},
  address: {type: String},//وصف كتابي نفس الكومبني

});

studentSchema.methods.saveStudent = function() {
  return this.save(); // استخدام دالة save() المدمجة في Mongoose لحفظ البيانات في قاعدة البيانات
};


export default model("Student",studentSchema);
