import Applicant from '../models/Applicant.js';
import Opportunity from '../models/Opportunity.js';
import { getStudentApplicants } from './applicantController.js';

export const addOpportunity = async (req, res) => {
   const data = req.body;
   console.log(req.body);
   try {
      const existingOpportunity = await Opportunity.findOne({ companyId: data.companyId, oppName: data.oppName });
      console.log('existingOpportunity: ', existingOpportunity);
      if (existingOpportunity) {
         console.log("opportunity dosen't saved")
         return res.status(400).json({ message: "لقد قمت بإضافة هذه الفرصة مسبقا" });
      }
      const opp = await Opportunity.create(data)
      res.status(200).json(opp);
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
      res.status(200).json({ message: "تم حذف الفرصة بنجاح" });

   } catch (error) {
      res.status(400).send({ success: false, msg: error.message });
   };
};

export const getOpportunities = async (req, res) => {
   console.log(req.body)
   try {
      const data = await Opportunity.find();
      console.log(data)
      res.status(200).json(data);

   } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'خطأ في الإتصال' });
   }
}

export const getCompanyOpportunities = async (req, res) => {
   const { companyId } = req.params;
   try {
      const data = await Opportunity.find({ companyId });
      res.status(200).json(data);

   } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'خطأ في الإتصال' });
   }
}

export const getStudentOpportunities = async (req, res) => {
   const { studentId } = req.params;
   try {
      const applicants = await Applicant.find({ studentId });
      if (!applicants) {
         return res.status(404).json({ message: 'لا توجد طلبات مسجلة' });
      }
      const opportunityIds = applicants.map(applicant => applicant.opportunityId);
      const uniqueOpportunityIds = [...new Set(opportunityIds)];
      const opportunities = await Opportunity.find({ _id: { $in: uniqueOpportunityIds } });
      res.status(200).json(opportunities);
   } catch (error) {
      console.error(error);
      if (!res.headersSent) {
         res.status(500).json({ message: 'خطأ في الإتصال' });
      }
   }
}

export const getOpportunity = async (req, res) => {

   const { opportunityId } = req.body;

   try {
      const data = await Opportunity.findOne({ _id: opportunityId });
      res.status(200).json(data);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'خطأ في الإتصال' });
   }
}