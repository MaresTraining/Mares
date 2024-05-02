
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





export default function CompanySignin() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cred = new FormData(event.currentTarget);
      console.log({
        email: cred.get('email'),
        password: cred.get('password'),
        
      });

      const response = await fetch("http://localhost:5000/Company/signinCompany", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: cred.get('email'),
          password: cred.get('password'),
        }),

      });
    const data = await response.json(); 

    // if (!response.ok) {
    
    //   console.log(data);
    //   throw new Error(`Network response was not ok: ${response.statusText}`);
    // }

    console.log(data); 

    // Store token in localStorage
    localStorage.setItem("user_token", data.token);
    console.log("The token is " + localStorage.getItem("user_token"));

  } catch (error) {
    console.error('Error during fetch:', error);
  }

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
            </Button  >
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
