import React from 'react';
import StudentHeader from 'components/student/StudentHeader';
import Search from './Search'
import { Box, Typography, Grid, Card, CardContent, CardActions, CardMedia, Button } from '@mui/material';
import { useOpportunityContext } from 'contexts/OpportunityContext';
import { useSystemContext } from 'contexts/SystemContext';

function OpportunityCard({ opportunity, ...props }) {
  const {handleSelectedOpp} = useOpportunityContext();
  const {goToPage} = useSystemContext();
  const { _id, oppName, trainingType, trainingDuration, city, imageURL, numberOfTrainees } = opportunity;
  return (
    <Card sx={{ maxWidth: 345, bgcolor: '#efefef', border: '3px solid #ccc', fontFamily: 'Tajawal, sans-serif' }}>
      <CardMedia
        component="img"
        height="140"
        image={imageURL}
        alt="Computer"
      />
      <CardContent sx={{ fontFamily: 'Tajawal, sans-serif' }}>
        <Typography variant="body2" color="text.secondary">
          {_id}
        </Typography>
        <Typography sx={{ fontFamily: 'Tajawal, sans-serif' }} variant="h5" component="div">
          {oppName}
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
        <Button onClick={()=>{
          handleSelectedOpp(opportunity)
          goToPage("/view-opp-details")
        }} size="small">عرض التفاصيل</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}


const DispalyOpportunities = () => {
  const { opportunities, loadOpportunities } = useOpportunityContext();

  return (
    <Box sx={{width:1}}>


      <StudentHeader />
      <Search />

      <Typography style={{ fontFamily: 'Tajawal, sans-serif', fontWeight: 'bold' }}>
        الفرص التدريبية:
      </Typography>


      <Grid container spacing={2} sx={{ width: '80%', margin: 'auto', marginTop: '20px', marginRight: '300px', marginLeft: '500px' }}>



        {opportunities.map((r, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <OpportunityCard
              opportunity={r}
            />
          </Grid>
        ))}
      </Grid>


    </Box>
  );
};

export default DispalyOpportunities;



