import bcrypt from 'bcrypt';
import params from 'params';
import jwt from 'jsonwebtoken';
import Application from '../models/Application.js';

const secret = 'app';



export const updateApplication = async (req, res) => {
   const  updateData  = req.body;
   const  {_id } = req.params;
   console.log('req.body: ',req.body)
   console.log('_id: ',_id)
   Application.findOneAndUpdate(
      _id, 
      updateData, // user data to be updated from req.body such as Certificates, CollegeName etc...
      { new: true }, // to return the opdated object
      (err, doc) => { // CallBack function
            if (err) {
               console.log("حدث خظأ ما!");
               return res.status(400).json({message:'حدث خطأ من الخادم'});
            }if (!doc) {
               return res.status(404).json({ message: "الطلب غير موجود" });
            }
               console.log("تم تغيير البيانات بنجاح :", doc);
               res.status(200).json({message:'تم التحديث بنجاح'});
         }
   );
};

export const deleteApplication = async (req, res) => {
   try {

      const result = await Application.deleteOne(Application._id);
      return res.status(200).json({message:"تم حذف الطلب بنجاح"});

      } catch (error) {
      res.status(400) . send({ success: false,msg: error.message });
      };


};




export const registerStudent = async (req, res) => { 

   const applicant = req.body;

  try {
    const existingApplicant = await Application.findOne({ studentId:applicant.studentId });
    if (existingApplicant) {
      return res.status(400).json({ message: 'الطالب مُسجل مسبقا' });
    }

    const result = await Application.create(applicant);

    return res.status(200).json({result, message: 'تمت اضافة الطالب ' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'خطأ في النظام' });
  }
}