import { Button, Card, CardContent, Typography,Grid,CardActions ,CardMedia } from "@mui/material"
import Sidebar from './StudentHome/Sidebar';
import StudentHeader from './StudentHome/StudentHeader/StudentHeader';
import { Link } from "react-router-dom";
import { useOpportunityContext } from "contexts/OpportunityContext";
import { useSystemContext } from "contexts/SystemContext";

function OpportunityCard({opportunity, ...props}) {
  const {handleSelectedOpp} = useOpportunityContext();
  const {goToPage} = useSystemContext();

  const {  _id,  oppName,trainingType, trainingDuration, city, imageURL, numberOfTrainees }= opportunity;
    return (
      <Card sx={{ maxWidth: 345 }}>
           <CardMedia
        component="img"
        height="140"
        image={imageURL}
        alt="Computer"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
           {_id}
          </Typography>

          <Typography variant="h5" component="div">
        {oppName}
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
          نوع التدريب :{trainingType}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            مدةالتدريب: {trainingDuration}
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


  export default function DispalyOpportunities() {
    const {opportunities, loadOpportunities}= useOpportunityContext();
  
    
  return (
    <Grid container spacing={2}>

      <Grid item xs={12}>
        <StudentHeader />
      </Grid>

      <Grid item xs={3}>
        <Sidebar />
      </Grid>

      <Grid item xs={9}>
        <Grid container spacing={2}>
          {opportunities.map((r, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <OpportunityCard
              opportunity={r}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
  }
  