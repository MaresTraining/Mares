import Opportunity from '../models/Opportunity.js';

export const saveOpportunity = async (req, res) => { 
   const  data  = req.body;
   console.log(req.body);
   try {
      const existingOpportunity = await Opportunity.findOne({companyId:data.companyId, opportunityName:data.opportunityName});
      console.log('existingOpportunity: ', existingOpportunity);
      if(!existingOpportunity){
         console.log("opportunity dosen't saved")
         return  res.status(400).json({message:"opportunity dosen't saved"});
      } 
      res.status(200).json({result: existingOpportunity, token, message:"opportunity signed in" });
   } catch (error) {
      console.log('ERROR')
      res.status(500).json({message:'حدث خطأ ما!'});
   } 
}

export const updateOpportunity = async (req, res) => {
   const  updateData  = req.body;
   const  {_id } = req.params;
   console.log('req.body: ',req.body)
   console.log('_id: ',_id)
   Opportunity.findOneAndUpdate(
      _id, 
      updateData, // opportunity data to be updated from req.body such as Certificates, CollegeName etc...
      { new: true }, // to return the opdated object
      (err, doc) => { // CallBack function
            if (err) {
               console.log("حدث خظأ ما!");
               return res.status(400).json({message:'حدث خطأ من الخادم'});
            }if (!doc) {
               return res.status(404).json({ message: "الفرصة غير موجودة" });
            }
               console.log("تم تغيير البيانات بنجاح :", doc);
               res.status(200).json({message:'تم التحديث بنجاح'});
         }
   );
};
// // delete profile

export const deleteOpportunity = async (req, res) => {
   try {

      const result = await Opportunity.deleteOne(Opportunity._id);
      return res.status(200).json({message:"تم حذف الفرصة بنجاح"});

      } catch (error) {
      res.status(400) . send({ success: false,msg: error.message });
      };


};

export const getOpportunities = async (req, res) => { 
  try {
    const data = await Opportunity.findOne();
    return res.status(200).json(data);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'خطأ في النظام' });
  }
}

export const getOpportunity = async (req, res) => { 

   const { opportunity_id } = req.body;

  try {
    const data = await Opportunity.findOne({ _id:opportunity_id });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'خطأ في النظام' });
  }
}