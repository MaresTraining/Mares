import './Company.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../../../components/header/header';
import { useSystemContext } from '../../../contexts/SystemContext';
import { useAuthContext } from '../../../contexts/AuthContext';



export default function CompanySignup() {
  const { goToPage } = useSystemContext();
  const { signUpStudent, error, isCompany, isStudent } = useAuthContext();
  React.useEffect(() => {
    if (isCompany) {
      goToPage("company-home");
    }
    else if (isStudent) {
      goToPage("student-home");
    }
  }, [goToPage, isCompany, isStudent]);


  function validateInput(cred) {
    console.log({
      companyName: cred.get('CompanyName'),
      commercialRegistrationNumber: cred.get('CommercialRegistrationNumber'),
      email: cred.get('email'),
      password: cred.get('password'),
      confirmpassword: cred.get('confirmpassword'),
    });

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cred = new FormData(event.currentTarget);
      validateInput(cred);
      signUpStudent({
        companyName: cred.get('CompanyName'),
        commercialRegistrationNumber: cred.get('CommercialRegistrationNumber'),
        email: cred.get('email'),
        password: cred.get('password'),
      })


    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };


  return (
    <div>
      <Header />
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
            <span>تسجيل جديد</span>
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="CompanyName"
                  required
                  fullWidth
                  id="CompanyName"
                  label={<span style={{ fontFamily: 'Tajawal, sans-serif' }}>إسم الشركة</span>}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="CommercialRegistrationNumber"
                  label={<span style={{ fontFamily: 'Tajawal, sans-serif' }}>رقم السجل التجاري</span>}
                  name="CommercialRegistrationNumber"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={<span style={{ fontFamily: 'Tajawal, sans-serif' }}>الإيميل الإلكتروني </span>}
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
                  label={<span style={{ fontFamily: 'Tajawal, sans-serif' }}>كلمة المرور </span>}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label={<span style={{ fontFamily: 'Tajawal, sans-serif' }}> تأكيد كلمة المرور</span>}
                  type="password"
                  id="confirmpassword"
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
              <span>إنشاء حساب</span>
            </Button>
            <Grid container justifyContent="flex-end"  >
              <Grid item >
                <span >
                  لديك حساب في مارس؟ <a href="/company-sign-in">تسجيل الدخول</a>
                </span>
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