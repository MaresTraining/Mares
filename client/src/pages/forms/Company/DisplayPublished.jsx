// import React from 'react';
import { useEffect } from 'react';
import { useOpportunityContext } from '../../../contexts/OpportunityContext';
import CompanyHeader from './CompanyHome/CompanyHeader/CompanyHeader';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

function OpportunityCard({opportunity, ...props}) {
  const {  _id,  opportunityName,trainingType, trainingDuration, city, imageURL, numberOfTrainees }= opportunity;
    // const currentDate = new Date();
    //  const startDate = new Date('2024-05-10');// تاريخ بدء التدريب - مو مسموح بعد يسجل
    //  const endDates = new Date('2024-06-01');
    //  const regDate = new Date('2024-03-01');// - مو مسموح قبله يسجل تاريخ بدء التسجيل
    //  let OppnumberOfTrainees = 20;//'2024-04-28',

    return (

      <Card sx={{ maxWidth: 345 , bgcolor: '#efefef' ,border: '3px solid #ccc', fontFamily:'Tajawal, sans-serif'}}>
        <CardMedia
          component="img"
          height="140"
          image={imageURL}
          alt="Computer"
        />
        <CardContent sx={{fontFamily:'Tajawal, sans-serif'}}>
          <Typography variant="body2" color="text.secondary">
            {_id}
          </Typography>
          <Typography sx={{fontFamily:'Tajawal, sans-serif'}} variant="h5" component="div">
            {opportunityName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            نوع التدريب: {trainingType}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            مدة التدريب: {trainingDuration}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            المدينة: {city}
          </Typography>
          <CardActions>
            <Button size="small">عرض التفاصيل</Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
  

export default function DisplayPublished() {
  const {opportunities, loadOpportunities}= useOpportunityContext();
  // useEffect(() => {
  //   console.log(opportunities);
  //   loadOpportunities();
  // }, []);

    return (
        <div>
            <CompanyHeader />


        <Grid container  direction="column" justifyContent="flex-start" alignItems="center" style={{ height: '100vh' }}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    
        
        <Typography
    style={{
        fontFamily: 'Tajawal, sans-serif',
        textAlign: 'center', // Center the text
        fontSize: '2rem',    // Set the font size to 2rem (adjust as needed)
        paddingLeft: '400px',
    }}
>
    الفرص المنشورة
</Typography>
     
      <Grid container spacing={2} sx={{ width: '80%', margin: 'auto', marginTop: '20px' ,   marginRight: '300px' , marginLeft: '500px'}}>
    
<br></br>
<br></br>


        {opportunities.map((opp, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>

             <OpportunityCard opportunity={opp}/>
           </Grid>
            ))} 
            </Grid>
            </Grid>

        </div>
    );
};

