import React from 'react';
import CompanyHeader from './CompanyHome/CompanyHeader/CompanyHeader';
import CompanySidebar from './CompanyHome/CompanySidebar';

import { Box, Typography,  Card, CardContent } from '@mui/material';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ChatIcon from '@mui/icons-material/Chat';
import PublishIcon from '@mui/icons-material/Publish';
 
function  viewCard({ CompanyName, DescriptionCompany, SocialMedia, Comments ,image }) {
  return (
   
    <Card style={{ fontFamily: 'Tajawal, sans-serif' , display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       


      <div style={{ flex: 1, textAlign: 'left', padding: '1rem' }}>
        <Box style={{ flex: 1, textAlign: 'center', padding: '1rem' ,margin: '10px' }}>
        <img src={image} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />

        <Typography variant="h5" gutterBottom style={{ fontFamily: 'Tajawal, sans-serif' }} >
         اسم الشركة {CompanyName}
        </Typography>
        </Box>

        <Box style={{ flex: 1, textAlign: 'center', padding: '1rem', border: '3px solid #ccc' , margin: '50px'  }}>
        <Typography variant="h5" gutterBottom style={{ fontFamily: 'Tajawal, sans-serif' }}>
         عدد التدريبات التي تم نشرها  
          <br></br>
         0
        </Typography>
        </Box>

        <Box style={{ flex: 1, textAlign: 'center', padding: '1rem', border: '3px solid #ccc' , margin: '50px'  }}>
        <Typography variant="h5" gutterBottom style={{ fontFamily: 'Tajawal, sans-serif' }}>
        وسائل التواصل الإجتماعي{SocialMedia}
        </Typography>
        </Box>

      </div>

      <div style={{ fontFamily: 'Tajawal, sans-serif' , flex: 2, textAlign: "", padding: '1rem' }}>
        
        <CardContent>
        <Box style={{ flex: 1, textAlign: 'center', padding: '1rem' , border: '3px solid #ccc' , margin: '50px' }}>
          <Typography variant="h6" gutterBottom style={{ fontFamily: 'Tajawal, sans-serif' }}>
          <ContactPageIcon color="disabled" style={{ marginLeft: '400px',fontSize: 50 }} />
            <strong>تعريف بالشركة:</strong> {DescriptionCompany}
          </Typography>
          </Box>

          <Box style={{ flex: 1, textAlign: 'center', padding: '1rem' , border: '3px solid #ccc', margin: '50px'}} >
          <Typography variant="h6" gutterBottom style={{ fontFamily: 'Tajawal, sans-serif' }}>
          <PublishIcon color="disabled" style={{ marginLeft: '400px',fontSize: 50 }} />
            <strong>العروض التدربية التي تم نشرها:</strong>
          </Typography>
          </Box>

          <Box style={{ flex: 1, textAlign: 'center', padding: '1rem' , border: '3px solid #ccc', margin: '50px'}} >
          <Typography variant="h6" gutterBottom style={{ fontFamily: 'Tajawal, sans-serif' }}>
          <ChatIcon color="disabled" style={{ marginLeft: '400px',fontSize: 50 }} />
            <strong>التعليقات:</strong> {Comments}
          </Typography>
          </Box>

        </CardContent>
      </div>
    </Card>

  );
}




export default function ViewCompanyProfile() {
  
  const view = [
    { CompanyName : '', 
    SocialMedia:'',
    DescriptionCompany: '..................................', 

    Comments: '..........' }
]

  return ( 
<div>
<CompanyHeader/>  
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
            <strong>ملف الشركة</strong> 
          </Typography>    
          
  {view.map((v)=>{
   
      return  viewCard(v)
  }) }
    </Box>

</div> 
);
}
