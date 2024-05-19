import React from 'react';
import CompanyHeader from 'components/company/CompanyHeader';
import {  Typography,Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Link } from "react-router-dom";
import { useOpportunityContext } from 'contexts/OpportunityContext';


const OpportunityList = ({ onOpportunitySelect }) => {
    const {opportunities, loadOpportunities}= useOpportunityContext();

    return (
        <div>
            <CompanyHeader />
            <div style={{ marginTop: '50px', marginRight: '500px' }}>
            <Typography variant="h4" gutterBottom fontFamily='Tajawal' marginRight='100px' marginBottom='30px' fontWeight='bold'>إدارة الطلبات</Typography>

            <Typography variant="h6" gutterBottom fontFamily='Tajawal, sans-serif' fontWeight='bold'>اختر  فرصة تدريبية:</Typography>
                <select
                style={{width: '50%', minHeight: '30px', fontFamily: 'Tajawal'}}
                onChange={(e) => onOpportunitySelect(opportunities[e.target.value])}>
                    {opportunities.map((opportunity, index) => (
                        <option key={opportunity._id} value={index}>{opportunity.name}</option>
                    ))}
                </select>
            </div>


            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <Link to="/select-student" style={{ textDecoration: 'none', marginLeft: '100px', marginRight: '70px' ,marginTop:'80px'}}>
            <Button
    variant="contained"
    startIcon={<PersonAddIcon />}
    sx={{
        fontFamily: 'Tajawal, sans-serif',
        backgroundColor: 'mediumaquamarine',
        color: 'black', // Set the font color to black
        '& .MuiButton-startIcon': {
            marginLeft: '8px', // Adjust the space between icon and text
        },
        '&:hover': {
            backgroundColor: '#efefef', // Set the hover color to #efefef
        },
    }}
>
    الطلاب المتقدمين
</Button>

            </Link>


         
                <Link to="/accepted-student" style={{ textDecoration: 'none',marginTop:'80px' }}>
                    <Button
                        variant="contained"
                        startIcon={<HowToRegIcon />}
                        sx={{
                            fontFamily: 'Tajawal, sans-serif',
                            backgroundColor: 'mediumaquamarine',
                             color: 'black', // Set the font color to black
                            '& .MuiButton-startIcon': {
                                marginLeft: '8px', // Adjust the space between icon and text
                            },
                            '&:hover': {
                                backgroundColor: '#efefef', // Set the hover color to #efefef
                            },
                        }}
                       
                    >
                        الطلاب المقبولين
                    </Button>
                </Link>
            </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>



        
        </div>
    );
};

export default OpportunityList;
