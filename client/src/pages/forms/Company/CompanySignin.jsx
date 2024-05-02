
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../../../components/header/header';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useSystemContext } from '../../../contexts/SystemContext';





export default function CompanySignin() {

  const {signIn, error, isCompany, isStudent}= useAuthContext();
  const {goToPage}= useSystemContext();
  React.useEffect(() => {
    if(isCompany){
      goToPage("company-home");
    }
    else if(isStudent){
      goToPage("student-home");
    }
  }, [goToPage, isCompany, isStudent]);

  const handleSubmit = async (event) => {
    event.preventDefault();
      const cred = new FormData(event.currentTarget);
      signIn({
        role: "company",
        email: cred.get('email'),
      password: cred.get('password'),});
  };


  return (
    <div>
   
   <Header/>
<Container component="main" maxWidth="xs">

        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'Tajawal, sans-serif', 
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'mediumaquamarine;' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           <span>تسجيل الدخول</span> 
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
             
              <Grid item xs={12}>
                <TextField
                              required
                              fullWidth
                              id="email"
                              label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}>الإيميل الإلكتروني </span>}
                              name="email"
                              autoComplete="email"
                              type="email"
             
           
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}>كلمة المرور </span>}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
       
            
            </Grid>
            <Button
        
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: 'mediumaquamarine', color: 'black' }}
            >
            <span> تسجيل الدخول</span> 
            </Button>
            <Grid container justifyContent="flex-end"  >
              <Grid item >
              <span >ليس لديك حساب في مارس؟ <a href="/CompanySignup">إنشاء حساب</a></span>  
              <br></br>              
              <span>نسيت كلمة المرور؟ <a href="/ResetPassword"> إعادة تعيين </a></span>

             </Grid>
            </Grid>
          </Box>
        </Box>
        <br></br>
     <br></br>
     <br></br>
      </Container>

    </div>
 
   
  );
}
