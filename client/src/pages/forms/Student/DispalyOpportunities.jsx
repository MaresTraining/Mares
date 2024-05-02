import React from 'react';
import Sidebar from './StudentHome/Sidebar';
import StudentHeader from './StudentHome/StudentHeader/StudentHeader';
import Search from './Search'
import { Box, Typography, Grid, Card, CardContent, CardActions, CardMedia, Button } from '@mui/material';

function OpportunityCard({ OpportunityID, OpportunityName, TrainingType, TrainingDuration, City, imageURL }) {
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
          {OpportunityID}
        </Typography>
        <Typography sx={{fontFamily:'Tajawal, sans-serif'}} variant="h5" component="div">
          {OpportunityName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          نوع التدريب: {TrainingType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          مدة التدريب: {TrainingDuration}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          المدينة: {City}
        </Typography>
        <CardActions>
          <Button size="small">عرض التفاصيل</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}


const DispalyOpportunities = () => {
  const opp = [
    { OpportunityID: '002', OpportunityName: 'محلل بيانات', TrainingType: 'عن بعد', TrainingDuration: '6 أشهر', City: 'جدة', imageURL: '/images/mm.jpg' },
    { OpportunityID: '003', OpportunityName: 'مطور ويب', TrainingType: 'حضوري', TrainingDuration: '4 أشهر', City: 'الدمام', imageURL: '/images/web_developer.jpg' },
    { OpportunityID: '002', OpportunityName: 'مهندس بيانات', TrainingType: 'عن بعد', TrainingDuration: '10 أشهر', City: 'مكة', imageURL: '/images/mm.jpg' },

  ];

  return (
    <div>


      <StudentHeader/>
      <Search/>

<Typography style={{ fontFamily: 'Tajawal, sans-serif' ,fontWeight:'bold' }}>
    الفرص التدريبية:
</Typography>

     
      <Grid container spacing={2} sx={{ width: '80%', margin: 'auto', marginTop: '20px' ,   marginRight: '300px' , marginLeft: '500px'}}>
    
<br></br>
<br></br>


        {opp.map((r, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <OpportunityCard
              OpportunityID={r.OpportunityID}
              OpportunityName={r.OpportunityName}
              TrainingType={r.TrainingType}
              TrainingDuration={r.TrainingDuration}
              City={r.City}
              imageURL={r.imageURL}
            />
          </Grid>
        ))}
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


    </div>
  );
};

export default DispalyOpportunities;



