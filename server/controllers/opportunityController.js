import Opportunity from '../models/Opportunity.js';
import { getStudentApplicants } from './applicantController.js';

export const addOpportunity = async (req, res) => {
   const data = req.body;
   console.log(req.body);
   try {
      const existingOpportunity = await Opportunity.findOne({ companyId: data.companyId, opportunityName: data.opportunityName });
      console.log('existingOpportunity: ', existingOpportunity);
      if (!existingOpportunity) {
         console.log("opportunity dosen't saved")
         return res.status(400).json({ message: "لقد قمت بإضافة هذه الفرصة مسبقا" });
      }
      const opp = await Opportunity.create(data)
      res.status(200).json(app);
   } catch (error) {
      if (error.name === 'ValidationError') {
         console.log(error.message)
         res.status(400).json({ message: `خطأ في التحقق: ${error.message}` });
      } else {
         res.status(500).json({ message: 'خطأ في الإتصال' });
      }
   }
}

export const updateOpportunity = async (req, res) => {
   const updateData = req.body;
   const { _id } = req.params;
   console.log('req.body: ', req.body)
   console.log('_id: ', _id)
   Opportunity.findOneAndUpdate(
      _id,
      updateData, // opportunity data to be updated from req.body such as Certificates, CollegeName etc...
      { new: true }, // to return the opdated object
      (err, doc) => { // CallBack function
         if (err) {
            console.log("حدث خظأ ما!");
            return res.status(400).json({ message: 'حدث خطأ من الخادم' });
         } if (!doc) {
            return res.status(404).json({ message: "الفرصة غير موجودة" });
         }
         console.log("تم تغيير البيانات بنجاح :", doc);
         res.status(200).json({ message: 'تم التحديث بنجاح' });
      }
   );
};
// // delete profile

export const deleteOpportunity = async (req, res) => {
   try {
      await Opportunity.deleteOne(Opportunity._id);
      return res.status(200).json({ message: "تم حذف الفرصة بنجاح" });

   } catch (error) {
      res.status(400).send({ success: false, msg: error.message });
   };
};

export const getOpportunities = async (req, res) => {
   try {
      const data = await Opportunity.findOne();
      return res.status(200).json(data);

   } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'خطأ في الإتصال' });
   }
}

export const getCompanyOpportunities = async (req, res) => {
   const { companyId } = req.params;
   try {
      const data = await Opportunity.find({ companyId });
      return res.status(200).json(data);

   } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'خطأ في الإتصال' });
   }
}

export const getStudentOpportunities = async (req, res) => {
   try {
      const applicants = await getStudentApplicants(req, res)
      const data = [];
      for (const key in applicants) {
         const applicant = applicants[key];
         data.push(await Opportunity.find({ _id: applicant.opportunityId }));
      }
      return res.status(200).json(data);
   } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'خطأ في الإتصال' });
   }
}

export const getOpportunity = async (req, res) => {

   const { opportunityId } = req.body;

   try {
      const data = await Opportunity.findOne({ _id: opportunityId });
      return res.status(200).json(data);
   } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'خطأ في الإتصال' });
   }
}