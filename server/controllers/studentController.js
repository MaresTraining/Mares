import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Student from '../models/Student.js';

const secret = 'app';

// // Signin

export const signin = async (req, res) => { 
   //من الفرونت ناخذ
   const { email,password } = req.body;
   console.log(req.body);
   try {
      const existingStudent = await Student.findOne({email: email});
      console.log('existingStudent: ', existingStudent);
      if(!existingStudent){
         console.log("uesr dosen't exist")
         return  res.status(404).json({message:"uesr dosen't exist"});
      } 
      
      const isPasswordCorrect = password=== existingStudent.password;
      
      if(!isPasswordCorrect){
         console.log("invalied Password")
         return  res.status(400).json({message:"invalied Password"});
      }
      const token = jwt.sign({email: existingStudent.email, id:existingStudent._id},secret,{expiresIn:"1h"});//app=env file
      console.log("student signed in")
      res.status(200).json({result: existingStudent, token:token, message:"student signed in" });
   } catch (error) {
      console.log('ERROR')
      res.status(500).json({message:'حدث خطأ ما!'});
   } 
}
// // Signup

export const signup = async (req, res) => { 
const user = req.body;
   console.log(req.body) ;
    try {
       const existingStudent = await Student.findOne({email: user.email});
       if(existingStudent){
         console.log("error:",existingStudent);
         return res.status(400).json({message:"الحساب موجود مسبقا!"});
       }
       const result = await Student.create(user);
       const token = jwt.sign({email: result.email, id:result._id},secret,{expiresIn:"1h"});//app=env file
       res.status(200).json({result, token, message:"New student added"});
   
    } catch (error) {
       res.status(500).json({message:'حدث خطأ ما!'});
       console.log(error);
    }
   };

// // ResetPassword

   export const resetPassword = async (req, res) => {
      const { email, newPassword } = req.body;
      try {
      const existingStudent = await Student.findOne({ email });
      if (!existingStudent) 
        return res.status(404).sed("الحساب غير مسجل مسبقا!");
      
        const hashPassword = await bcrypt.hash(newPassword,12);
        const result = await Student.update(student._id, { password: hashPassword });//ارجع له
        return res.status(200).json({message:"تم تغيير كلمة المرور بنجاح"});
      }
      catch (error) {
        console.log(error);
        return res.status(500).json({message:"حدث خطأ ما!"});
      }
   };

//  //  Complete Profile
  
// // update profile

export const updateProfileCV = async (req, res) => {
   const { email, ...updateData } = req.body;
   // console.log('req.body: ',req.body)
   Student.findOneAndUpdate(
      { email: email }, // find student by his email
      updateData, // student data to be updated from req.body such as Certificates, CollegeName etc...
      { new: true }, // to return the opdated object
      (err, doc) => { // CallBack function
            if (err) {
               console.log("Something went wrong when updating data!");
               return res.status(400).json({message:'حدث خطأ من الخادم'});
            }if (!doc) {
               return res.status(404).json({ message: "Student not found" });
            }
               console.log("Student document  updated! :", doc);
               res.status(200).json({message:'تم التحديث بنجاح'});
         }
   );
};
// // delete profile

export const deleteAccount = async (req, res) => {
   try {

      const result = await Student.deleteOne(student._id);
      return res.status(200).json({message:"تم حذف الحساب بنجاح"});

      } catch (error) {
      res.status(400) . send({ success: false,msg: error.message });
      };


};




//   View Student Profile
export const ViewProfile = async (req, res) => { 

   try {
      const student = await student.findById(req.studentId);
      if (!student) {
        return res.status(404).json({ message: 'الشركة غير موجودة' });
      }
  
      return res.status(200).json(student);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message:  'خطأ في النظام' });
    }

};

//   View Company Page
export const ViewCompanyPage = async (req, res) => { 
   try {
      const company = await company.findById(req.companyId);
      if (!company) {
        return res.status(404).json({ message: 'الشركة غير موجودة' });
      }
  
      return res.status(200).json(company);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message:  'خطأ في النظام' });
    }
};

//   Filter The Opportunities
export const FilterTheOpp = async (req, res) => { 
   const { major, numOfStars } = req.query;

   try {
      const evaluationResults = await Evaluation.find({ numOfStars });
      const opportunityIds = evaluationResults.map((evaluation) => evaluation.opportunityId);
  
      const filteredOpportunities = await Opportunity.find({
        major,
        _id: { $in: opportunityIds },
      });
  
      return res.status(200).json(filteredOpportunities);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server Error' });
    }

}

//   Search For The Opportunity
export const SearchForTheOpp = async (req, res) => { 
   const { query } = req.query;

   try {
     // Perform search based on the query
     const result = await Item.find({ name: { $regex: query, $options: 'i' } }); // Case-insensitive search
 
     res.json(result);
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'An error occurred while searching.' });
   }
}


//   Registration in the opportunity
export const RegistrationInTheOpp = async (req, res) => { 
}

//   Discover Location
export const DiscoverLocation = async (req, res) => { 
};

//   View Request
export const ViewRequest = async (req, res) => { 
};

export const test = async (req, res) => { 
   // const existingStudent = await Student.find();
   res.json("HELLO");
};