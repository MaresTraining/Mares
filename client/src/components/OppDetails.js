import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useAuthContext } from 'contexts/AuthContext';
import { useApplicantContext } from 'contexts/ApplicantContext';
import { Button } from 'reactstrap';
const dayjs = require('dayjs')

const OppDetails = ({ opp }) => {
    const { isStudent, user } = useAuthContext();
    const { addApplicant } = useApplicantContext();

    return (
        <Box style={{flex: 1, flexDirection:"column", justifyContent:"space-between", height:"75vh"}}>
            <Grid container columns={2} px={5} direction="row" alignItems="start">
                <h1 style={{ width: "100%", marginTop: '20px' }}>تفاصيل الفرصة التدريبية</h1>
                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>عنوان الفرصة التدريبية: {opp.oppName}</Typography>
                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>مجال التخصص العام: {opp.generalSpecializationField}</Typography>

                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>مجال التخصص الدقيق: {opp.specificSpecializationField}</Typography>
                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>الفصل الدراسي: {opp.semester}</Typography>

                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>كيفية مزاولة التدريب: {opp.trainingType}</Typography>
                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>المدينة: {opp.city}</Typography>

                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>عدد المتدربين: {opp.numberOfTrainees}</Typography>
                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>مكافأة التدريب: {opp.trainingBonus}</Typography>

                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>تاريخ بدء التدريب: {dayjs(opp.startDate).format("DD-MM-YYYY")}</Typography>
                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>تاريخ انتهاء التدريب: {dayjs(opp.endDate).format("DD-MM-YYYY")}</Typography>

                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>أيام العمل: {opp.workingDays}</Typography>
                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>ساعات العمل: {opp.workingHours}</Typography>


                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>وصف الشاغر التدريبي: {opp.description}</Typography>
                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>واجبات الشاغر التدريبي: {opp.duties}</Typography>
                <Typography variant="h6" style={{ width: "50%", marginBottom: '10px' }}>فوائد التدريب: {opp.benefits}</Typography>
                {isStudent &&
                    <Button
                        variant="contained"
                        style={{padding:8, fontSize:"14px", fontWeight:"bold", width:"20%", backgroundColor: 'mediumaquamarine', color: 'black' }}
                        onClick={() => {
                            addApplicant(user._id, opp._id)
                        }}
                    >طلب الإنضمام للفرصة التدريبية</Button>}

            </Grid>
        </Box>
    );
};

export default OppDetails;
