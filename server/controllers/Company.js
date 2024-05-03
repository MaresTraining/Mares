import bcrypt from 'bcrypt';
import params from 'params';
import jwt from 'jsonwebtoken';
import Company from '../models/Company.js';

const secret = 'app';

export const signinCompany = async (req, res) => { 
   //من الفرونت ناخذ
   const {email,password } = req.body;
   console.log(req.body);
   try {
      const existingUser = await Company.findOne({email: email});
      console.log('existingUser: ', existingUser);
      if(!existingUser){
         console.log("uesr dosen't exist")
         return  res.status(404).json({message:"uesr dosen't exist"});
      } 
      
      const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
      
      if(!isPasswordCorrect){
         console.log("invalied Password")
         return  res.status(400).json({message:"invalied Password"});
      }
      const token = jwt.sign({email: existingUser.email, id:existingUser._id},secret,{expiresIn:"1h"});//app=env file
      console.log("user signed in")
      res.status(200).json({result: existingUser, token, message:"user signed in" });
   } catch (error) {
      console.log('ERROR')
      res.status(500).json({message:'حدث خطأ ما!'});
   } 
}

export const signupCompany = async (req, res) => { 
   const {CompanyName, CommercialRegistrationNumber, email, password, confirmPassword} = req.body;
   console.log(req.body) ;
    try {
       const existingUser = await Company.findOne({email: email});
       console.log(existingUser);
       if(existingUser)
        return res.status(400).json({message:"الحساب موجود مسبقا!"});
   //اذا فيه ايرور ارجع لذا    
   function checkPassword(password, confirmPassword) {
      if (password === confirmPassword) {return true;} else { return false;}}
      checkPassword(password, confirmPassword);
       if(!checkPassword)
      //  if (password !== confirmPassword)
        return res.status(400).json({message:"كلمة المرور غير متطابقة"});
       
       const hashPassword = await bcrypt.hash(password,12);
       const result = await Company.create({CompanyName, CommercialRegistrationNumber,email,password: hashPassword });
       const token = jwt.sign({email: result.email, id:result._id},secret,{expiresIn:"1h"});//app=env file
       
       res.status(200).json({result, token, message:"New user added"});
   
    } catch (error) {
       res.status(500).json({message:'حدث خطأ ما!'});
       console.log(error);
    }
   };


   export const resetPassword = async (req, res) => {
      const { email, newPassword } = req.body;
      try {
      const existingUser = await Company.findOne({ email });
      if (!existingUser) 
        return res.status(404).sed("الحساب غير مسجل مسبقا!");
      
        const hashPassword = await bcrypt.hash(newPassword,12);
        const result = await Company.update(Company._id, { password: hashPassword });//ارجع له
        return res.status(200).json({message:"تم تغيير كلمة المرور بنجاح"});
      }
      catch (error) {
        console.log(error);
        return res.status(500).json({message:"حدث خطأ ما!"});
      }
   };
    

export const testCompany = async (req, res) => { 
   // const existingUser = await user.find();
   res.json("HELLO");
}

  //  Complete Profile
  
// // update profile

export const updateProfileCV = async (req, res) => {
   const { email, ...updateData } = req.body;
   console.log('req.body: ',req.body)
   Company.findOneAndUpdate(
      { email: email }, // find user by his email
      updateData, // user data to be updated from req.body such as Certificates, CollegeName etc...
      { new: true }, // to return the opdated object
      (err, doc) => { // CallBack function
            if (err) {
               console.log("حدث خظأ ما!");
               return res.status(400).json({message:'حدث خطأ من الخادم'});
            }if (!doc) {
               return res.status(404).json({ message: "المستخدم غير موجود" });
            }
               console.log("تم تغيير البيانات بنجاح :", doc);
               res.status(200).json({message:'تم التحديث بنجاح'});
         }
   );
};
// // delete profile

export const deleteAccount = async (req, res) => {
   try {

      const result = await Company.deleteOne(Company._id);
      return res.status(200).json({message:"تم حذف الحساب بنجاح"});

      } catch (error) {
      res.status(400) . send({ success: false,msg: error.message });
      };


};



//   View Company Profile
export const ViewProfile = async (req, res) => { 
   try {
      const Company = await Company.findById(req.companyId);
      if (!Company) {
        return res.status(404).json({ message: 'الشركة غير موجودة' });
      }
  
      return res.status(200).json(Company);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message:  'خطأ في النظام' });
    }

}

//   View Student Page
export const ViewStudentPage = async (req, res) => { 

try {
      const Student = await Student.findById(req.studentId);
      if (!Student) {
        return res.status(404).json({ message: 'الشركة غير موجودة' });
      }
  
      return res.status(200).json(Student);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message:  'خطأ في النظام' });
    }
}
      export const AddOpportunities = async (req, res) => { 
         const {
            companyID, generalSpecializationField, specificSpecializationField, opportunityName, trainingType,
            city, customizedTrainingPlans, trainingDuration, semester, startAndEndDates, workingDays,
            workingHours, trainingHours, trainingPlan, numberOfTrainees, trainingBonus, description, duties, benefits } = req.body;
         
        
          try {
            const newOpportunity = new Opportunity({
               companyID, generalSpecializationField, specificSpecializationField, opportunityName, trainingType,
               city, customizedTrainingPlans, trainingDuration, semester, startAndEndDates, workingDays,
               workingHours, trainingHours, trainingPlan, numberOfTrainees, trainingBonus, description, duties, benefits
            });
            await newOpportunity.save();
        
            return res.status(200).json({ message: 'تمت اضافة الفرصة' });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'خطأ في النظام' });
          }
        };


//   Select Students
export const SelectStudents = async (req, res) => { 

   const { studentId } = req.body;

  try {
    const existingApplicant = await Application.findOne({ studentId });
    if (existingApplicant) {
      return res.status(400).json({ message: 'الطالب مُسجل مسبقا' });
    }

    const newApplicant = new Application({ studentId });
    await newApplicant.save();

    return res.status(200).json({ message: 'تمت اضافة الطالب ' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'خطأ في النظام' });
  }
}