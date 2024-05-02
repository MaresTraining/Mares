import React from 'react';
import StudentHeader from './StudentHome/StudentHeader/StudentHeader';
import { Box, Typography,  Card, CardContent } from '@mui/material';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
 

function  viewCard({ FirstName, LastName, Discription, Experiences, Skills ,image }) {
  return (
   
    <Card style={{ fontFamily: 'Tajawal, sans-serif' , display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       

      <div style={{ flex: 1, textAlign: 'left', padding: '1rem' }}>
        <Box style={{ flex: 1, textAlign: 'center', padding: '1rem' ,margin: '10px' }}>
        <img src={image} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />

        <Typography variant="h5" gutterBottom style={{ fontFamily: 'Tajawal, sans-serif' }} >
          {FirstName} {LastName}
        </Typography>
        </Box>

        <Box style={{ flex: 1, textAlign: 'center', padding: '1rem' }}>
        <Typography variant="h5" gutterBottom style={{ fontFamily: 'Tajawal, sans-serif' }}>
         الطلبات التي تم إنشائها
         0 
        </Typography>
        </Box>

        <Box style={{ flex: 1, textAlign: 'center', padding: '1rem' }}>
        <Typography variant="h5" gutterBottom style={{ fontFamily: 'Tajawal, sans-serif' }}>
        التدريبات المنتهية
        0
        </Typography>
        </Box>

      </div>

      <div style={{ fontFamily: 'Tajawal, sans-serif' , flex: 2, textAlign: "", padding: '1rem' }}>
        
        <CardContent>
        <Box style={{ flex: 1, textAlign: 'center', padding: '1rem' , border: '3px solid #ccc' , margin: '50px' }}>
          <Typography variant="h6" gutterBottom style={{ fontFamily: 'Tajawal, sans-serif' }}>
          <ContactPageIcon color="disabled" style={{ fontSize: 50 }} />
            <strong>الوصف:</strong> {Discription}
          </Typography>
          </Box>

          <Box style={{ flex: 1, textAlign: 'center', padding: '1rem', border: '3px solid #ccc',  margin: '50px' }}>
          <Typography variant="h6" gutterBottom style={{ fontFamily: 'Tajawal, sans-serif' }}>
          <AssessmentIcon color="disabled" style={{ marginLeft: '400px',fontSize: 50 }} />
            <strong>الخبرات:</strong>
             {Experiences}
          </Typography>
          </Box>

          <Box style={{ flex: 1, textAlign: 'center', padding: '1rem' , border: '3px solid #ccc', margin: '50px'}} >
          <Typography variant="h6" gutterBottom style={{ fontFamily: 'Tajawal, sans-serif' }}>
          <MenuBookIcon color="disabled" style={{ marginLeft: '400px',fontSize: 50 }} />
            <strong>المهارات:</strong> {Skills}
          </Typography>
          </Box>

        </CardContent>
      </div>
    </Card>

  );
}




export default function ViewStudentProfile() {
  
  const view = [
    { FirstName: 'منار', LastName: 'الخطابي', image: '' ,
    
    Discription: '..................................', Experiences: '..............................', Skills: '..........' }
]

  return ( 
<div>
  <StudentHeader />
  <Box
      sx={{
        width: '80%',
        margin: 'auto',
        marginTop: '20px',
        marginRight: '300px',
        marginLeft: '400px',
        margin : '100px'
      }}
    >
      <Typography variant="h6" gutterBottom style={{ fontFamily: 'Tajawal, sans-serif' }}>
            <strong>الملف الشخصي</strong> 
          </Typography>   
  {view.map((v)=>{
  
      return  viewCard(v)
  }) }
    </Box>

</div> 
);
}



