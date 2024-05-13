import React from 'react';
import CompanyHeader from './CompanyHome/CompanyHeader/CompanyHeader';
import {  Typography,Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Link } from "react-router-dom";


const OpportunityList = ({ onOpportunitySelect }) => {
    // Define dummy opportunity data
    const opportunities = [
        { id: 1, name: 'فرصة محلل بيانات', description: 'Description of Opportunity 1' },
        { id: 2, name: 'فرصة مهندس شبكات', description: 'Description of Opportunity 2' },
        { id: 3, name: 'فرصة الدعم الفني', description: 'Description of Opportunity 3' },
        // Add more opportunities as needed
    ];

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
            <Link to="/SelectStudent" style={{ textDecoration: 'none', marginLeft: '100px', marginRight: '70px' ,marginTop:'80px'}}>
                <Button
                    variant="contained"
                    startIcon={<PersonAddIcon />}
                    sx={{
                        fontFamily: 'Tajawal, sans-serif',
                        backgroundColor: 'mediumaquamarine',
                        '& .MuiButton-startIcon': {
                            marginLeft: '8px', // Adjust the space between icon and text
                        },
                    }}
                >
                    الطلاب المتقدمين
                </Button>
            </Link>


         
                <Link to="/AcceptedStudent" style={{ textDecoration: 'none',marginTop:'80px' }}>
                    <Button
                        variant="contained"
                        startIcon={<HowToRegIcon />}
                        sx={{
                            fontFamily: 'Tajawal, sans-serif',
                            backgroundColor: 'mediumaquamarine',
                            '& .MuiButton-startIcon': {
                                marginLeft: '8px', // Adjust the space between icon and text
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
