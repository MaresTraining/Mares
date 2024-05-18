import mongoose from "mongoose";
const { Schema, model, SchemaTypes } = mongoose;

const companySchema = Schema({
  email: {type: String,  trim: true, minlength: 5, maxlength: 100, unique: true,required: true},
  password: {type: String,  trim: true, minlength: 8, required: true},
  role:{type: String , default:"company"},
  phoneNumber:{type:  String},
  companyName: {type:String},
  companySector: {type:String},
  companyField: {type:String},
  commercialRegistrationNumber: {type:Number},
  firstNameOfTheOfficial: {type:String},
  lastNameOfTheOfficial: {type:String},
  jobTitle: {type:String},
  companyAddress: {type:String},
  descriptionCompany: {type:String},
  companyImage: {  type: Object, default: { url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png", publicId: null,}},
  facebook: {type:String},
   twitter: {type:String}, 
   instagram: {type:String}, 
   linkedIn: {type:String},
  address: {type: String},// اناقش البنات +وصف كتابي

});

export default model("Company",companySchema);
