import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import CompanyHeader from "./CompanyHome/CompanyHeader/CompanyHeader";
import CompanySidebar from "./CompanyHome/CompanySidebar";
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useOpportunityContext } from '../../../contexts/OpportunityContext';

const TrainingOpportunity = () => {
    const { saveOpportunity } = useOpportunityContext()
    const [workingFrom, setWorkingFrom] = useState("8:00")
    const [workingTo, setWorkingTo] = useState("16:00")
    const [fromDay, setFromDay] = useState('الأحد')
    const [toDay, setToDay] = useState("الخميس")

    const [formData, setFormData] = useState({
        generalSpecializationField: 'تقنية', // قيمة افتراضية للتخصص العام
        specificSpecializationField: '',
        opportunityName: '',
        semester: '',
        trainingType: '',
        city: '',
        numberOfTrainees: '',
        trainingBonus: '',
        description: '',
        duties: '',
        benefits: '',
        trainingHours: "",
        name: "",
        customizedTrainingPlans: "",
        trainingDuration: "",
        startDates: "",
        endDates: "",
        workingDays: "",
        workingHours: "",
        trainingPlan: "",



        // المتغيرات الأخرى هنا
    });

    const handleGeneralSpecializationChange = (event, value) => {
        setFormData({ ...formData, generalSpecializationField: value });
    };

    const handleSave = () => {
        saveOpportunity(formData);
    };

    const handleCancel = () => {
    };


    function getDaysBetween(startDay, endDay) {
        let startIndex = daysOfWeek.indexOf(startDay);
        let endIndex = daysOfWeek.indexOf(endDay);
        if (startIndex >= endIndex) {
            const temp = startIndex;
            startIndex = endIndex;
            endIndex = temp;
        }
        const daysInBetween = daysOfWeek.slice(startIndex + 1, endIndex);
        return daysInBetween.join(', ');
    }

    const handleFromChange = (event) => {
        const value = event.target.value
        setFromDay(value)
        formData.workingDays = getDaysBetween(value, toDay)
    };

    const handleToChange = (event) => {
        const value = event.target.value
        setToDay(value)
        formData.workingDays = getDaysBetween(fromDay, value)
    };

    const daysOfWeek = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];

    function calculateHoursBetween(start, end) {

        var startTime = "" + start.split(":");
        var endTime = "" + end.split(":");
        var startMinutes = parseInt(startTime[0]) * 60 + parseInt(startTime[1]);
        var endMinutes = parseInt(endTime[0]) * 60 + parseInt(endTime[1]);
        var minuteDifference = endMinutes - startMinutes;
        var hourDifference = Math.floor(minuteDifference / 60);
        var minuteRemainder = minuteDifference % 60;
        return hourDifference + " : " + minuteRemainder;
    }


    const handleWorkingToChange = (event) => {
        const value = event.target.value
        setWorkingTo(value);
        formData.workingHours = calculateHoursBetween(workingFrom, value);
    };

    const handleWorkingFromChange = (event) => {
        const value = event.target.value;
        setWorkingFrom(value);
        formData.workingHours = calculateHoursBetween(value, workingTo);

    };

    const generateHourOptions = () => {
        let options = [];
        for (let hour = 8; hour <= 16; hour++) {
            options.push(hour + ":00")
            if (hour !== 16) {
                options.push(hour + ":30");
            }
        }
        return options;
    };


    const handleNumberOfTraineesChange = (event, value) => {
        setFormData({ ...formData, numberOfTrainees: value });
    };





    const handleTrainingBonusChange = (event, value) => {
        setFormData({ ...formData, trainingBonus: value });
    };



    const handleChangeDescription = (event) => {
        setFormData({ ...formData, description: event.target.value });
    };

    const handleChangeDuties = (event) => {
        setFormData({ ...formData, duties: event.target.value });
    };

    const handleChangeBenefits = (event) => {
        setFormData({ ...formData, benefits: event.target.value });
    };



    const handleFileUpload = (event) => {
        // اكمل معالجة تحميل الملف هنا
    };



    return (
        <div>
            <CompanyHeader />

            <Grid container direction="column" justifyContent="center" alignItems="center">
                <h1 style={{ marginTop: '20px' }}>إنشاء فرصة تدريبية</h1>
                <h3 style={{ marginBottom: '20px' }}>مجال التدريب:</h3>
                <Autocomplete
                    options={['تقنية', 'علوم تطبيقية', 'ادارة اعمال', 'التسويق', 'الإعلام']}
                    value={formData.generalSpecializationField}
                    onChange={handleGeneralSpecializationChange}
                    renderInput={(params) => <TextField {...params} label={<span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 'bold' }}> مجال التخصص العام:</span>} />}
                    style={{ marginBottom: '20px', width: '50%' }}
                />
                <Autocomplete
                    options={['برمجة', 'تطوير مواقع الويب', 'هندسة الشبكات', 'الدعم الفني', 'اتصالات وتقنية المعلومات']}
                    value={formData.specificSpecializationField}
                    onChange={(event, value) => setFormData({ ...formData, specificSpecializationField: value })}
                    renderInput={(params) => <TextField {...params} label={<span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 'bold' }}> مجال التخصص الدقيق:</span>} />}
                    style={{ marginBottom: '20px', width: '50%' }}
                />
                <h3 style={{ marginBottom: '20px' }}>حول التدريب:</h3>
                <TextField
                    label={<span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 'bold' }}>عنوان الفرصة التدريبية:</span>}
                    value={formData.opportunityName}
                    onChange={(event) => setFormData({ ...formData, opportunityName: event.target.value })}
                    style={{ marginBottom: '20px', width: '50%' }}
                />

                <Autocomplete
                    options={['الفصل الدراسي الأول', 'الفصل الدراسي الثاني', 'الفصل الدراسي الثالث', 'الصيف']}
                    value={formData.semester}
                    onChange={(event, value) => setFormData({ ...formData, semester: value })}
                    renderInput={(params) => <TextField {...params} label={<span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 'bold' }}> الفصل الدراسي:</span>} />}
                    style={{ marginBottom: '20px', width: '50%' }}
                />

                <Autocomplete
                    options={['حضوري', 'عن بعد', 'هجين']}
                    value={formData.trainingType}
                    onChange={(event, value) => setFormData({ ...formData, trainingType: value })}
                    renderInput={(params) => <TextField {...params} label={<span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 'bold' }}> كيفية مزاولة التدريب:</span>} />}
                    style={{ marginBottom: '20px', width: '50%' }}
                />
                <h3 style={{ marginBottom: '20px' }}>تفاصيل حول الفرصة التدريبية:</h3>
                <TextField
                    label={<span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 'bold' }}> المدينة:</span>}
                    value={formData.city}
                    onChange={(event) => setFormData({ ...formData, city: event.target.value })}
                    style={{ marginBottom: '20px', width: '50%' }}
                />


                <h4>أيام التدريب</h4>
                <div style={{ width: '50%', marginBottom: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControl variant="standard" sx={{ width: '100%' }}>
                                <InputLabel id="from-label">{<span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 'bold' }}>من</span>}</InputLabel>
                                <Select
                                    labelId="from-label"
                                    id="from"
                                    value={fromDay} // Set the value accordingly
                                    label="من"
                                    onChange={handleFromChange}
                                >
                                    {/* Add options for "From" day */}
                                    {daysOfWeek.map((day, index) => (
                                        <MenuItem key={index} value={day}>{day}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl variant="standard" sx={{ width: '100%' }}>
                                <InputLabel id="to-label">{<span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 'bold' }}>الى</span>}</InputLabel>
                                <Select
                                    labelId="to-label"
                                    id="to"
                                    value={toDay} // Set the value accordingly
                                    label="الى"
                                    onChange={handleToChange}
                                >
                                    {/* Add options for "To" day */}
                                    {daysOfWeek.map((day, index) => (
                                        <MenuItem key={index} value={day}>{day}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </div>

                <h4>ساعات التدريب</h4>

                <div style={{ width: '50%', marginBottom: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControl variant="standard" sx={{ width: '100%' }}>
                                <InputLabel id="from-label">{<span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 'bold' }}>من</span>}</InputLabel>
                                <Select
                                    labelId="from-label"
                                    id="from"
                                    value={workingFrom} // Set the value accordingly
                                    label="من"
                                    onChange={handleWorkingFromChange}
                                >
                                    {/* Add options for "From" working hour */}
                                    {generateHourOptions().map((hour, index) => (
                                        <MenuItem key={index} value={hour}>{hour}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl variant="standard" sx={{ width: '100%' }}>
                                <InputLabel id="to-label">{<span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 'bold' }}>الى</span>}</InputLabel>
                                <Select
                                    labelId="to-label"
                                    id="to"
                                    value={workingTo} // Set the value accordingly
                                    label="الى"
                                    onChange={handleWorkingToChange}
                                >
                                    {/* Add options for "To" working hour */}
                                    {generateHourOptions().map((hour, index) => (
                                        <MenuItem key={index} value={hour}>{hour}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </div>


                <Autocomplete
                    options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'اخرى']}
                    value={formData.numberOfTrainees}
                    onChange={handleNumberOfTraineesChange}
                    renderInput={(params) => <TextField {...params} label={<span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 'bold' }}>عدد المتدربين:</span>} />}
                    style={{ marginBottom: '20px', width: '50%' }}
                />


                <Autocomplete
                    options={['1000', '1500', '2000', '2500', 'اخرى']}
                    value={formData.trainingBonus}
                    onChange={handleTrainingBonusChange}
                    renderInput={(params) => <TextField {...params} label={<span style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 'bold' }}>مكافأة التدريب:</span>} />}
                    style={{ marginBottom: '20px', width: '50%' }}
                />

                <h3 style={{ marginBottom: '20px' }}>الفرصة التدريبية:</h3>

                <h4 style={{ marginBottom: '20px' }}>وصف الشاغر التدريبي</h4>

                <TextareaAutosize

                    aria-label="Description"
                    value={formData.description}
                    onChange={handleChangeDescription}
                    style={{ width: '50%', minHeight: '100px', marginBottom: '20px' }}
                />
                <h4 style={{ marginBottom: '20px' }}>واجبات الشاغر التدريبي</h4>

                <TextareaAutosize
                    aria-label="Duties"
                    value={formData.duties}
                    onChange={handleChangeDuties}
                    style={{ width: '50%', minHeight: '100px', marginBottom: '20px' }}
                />
                <h4 style={{ marginBottom: '20px' }}>فوائد التدريب معنا</h4>
                <TextareaAutosize
                    aria-label="Benefits"
                    value={formData.benefits}
                    onChange={handleChangeBenefits}
                    style={{ width: '50%', minHeight: '100px', marginBottom: '20px' }}
                />


                <input
                    type="file"
                    id="file-upload"
                    style={{ display: 'none', }}

                    onChange={handleFileUpload}
                />
                <label htmlFor="file-upload">
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'mediumaquamarine', color: 'black', fontSize: '12px' }}
                        component="span"
                    >
                        +    إضافة خطة تدريبية مفصلة             </Button>
                </label>
                <br></br>
                <br></br>


                <div style={{ display: 'flex', gap: '10px' }}>
                    <Button
                        onClick={handleSave}
                        variant="contained"
                        style={{ backgroundColor: 'mediumaquamarine', color: 'black', width: '40%', fontSize: '12px' }}
                    >
                        حفظ
                    </Button>
                    <Button
                        onClick={handleCancel}
                        variant="contained"
                        style={{ backgroundColor: 'lightcoral', color: 'black', width: '40%', fontSize: '12px' }}
                    >
                        إلغاء
                    </Button>
                </div>
            </Grid>
            <br></br>
            <br></br>
        </div>
    );
};

export default TrainingOpportunity;












