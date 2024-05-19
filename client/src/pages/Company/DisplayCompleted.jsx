// import React from 'react';
import CompanyHeader from 'components/company/CompanyHeader';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
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


export default function DisplayCompleted() {
  const { opportunities, loadOpportunities } = useOpportunityContext();
  return (
    <div>
      <CompanyHeader />


      <Grid container direction="column" justifyContent="flex-start" alignItems="center" style={{ height: '100vh' }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


        <Typography
          style={{
            fontFamily: 'Tajawal, sans-serif',
            textAlign: 'center', // Center the text
            fontSize: '2rem',    // Set the font size to 2rem (adjust as needed)
            paddingLeft: '400px',
          }}
        >
          الفرص المنجزة
        </Typography>

        <Grid container spacing={2} sx={{ width: '80%', margin: 'auto', marginTop: '20px', marginRight: '300px', marginLeft: '500px' }}>

          <br></br>
          <br></br>


          {opportunities.map((r, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>

              <OpportunityCard
                opportunity={r}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>

    </div>
  );
};

