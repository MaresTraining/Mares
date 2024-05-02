import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EventIcon from '@mui/icons-material/Event';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Button from '@mui/material/Button';

const Test = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        phone: '',
        dob: '',
        city: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async () => {
        try {
            const response = await fetch(' ', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log('Response from server:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Grid container direction="column" justifyContent="flex-start" alignItems="center" style={{ height: '100vh' }}>
            <h3 style={{ fontFamily: 'Tajawal, sans-serif' }}>المعلومات الشخصية</h3>
            <TextField
                margin="normal"
                required
                name="firstName"
                label= {<span style={{ fontFamily: 'Tajawal, sans-serif',fontWeight: 'bold'}}> الإسم الأول </span>}
                value={formData.firstName}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <PersonIcon />
                    ),
                }}
                style={{ width: '50%', fontFamily: 'Tajawal, sans-serif' }} 
            />
            <br />
            <TextField
                margin="normal"
                required
                name="lastName"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif',fontWeight: 'bold'}}> الإسم الأخير </span>}
                value={formData.lastName}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <PersonIcon />
                    ),
                }}
                style={{ width: '50%', fontFamily: 'Tajawal, sans-serif' }} 
            />
            <TextField
                margin="normal"
                name="phone"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif',fontWeight: 'bold'}}>رقم الهاتف  </span>}
                value={formData.phone}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <PhoneIcon />
                    ),
                }}
                style={{ width: '50%', fontFamily: 'Tajawal, sans-serif' }} 
            />
            <TextField
                margin="normal"
                name="dob"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif',fontWeight: 'bold'}}>تاريخ الميلاد  </span>}
                type="date"
                value={formData.dob}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <EventIcon />
                    ),
                }}
                style={{ width: '50%', fontFamily: 'Tajawal, sans-serif' ,fontWeight: 'bold'}} 
            />
            <TextField
                margin="normal"
                name="city"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif',fontWeight: 'bold'}}> المدينة </span>}
                value={formData.city}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <LocationCityIcon />
                    ),
                }}
                style={{ width: '50%', fontFamily: 'Tajawal, sans-serif '   }} 
            />

<Button
         onClick={handleSave}
        type="submit"
      
        sx={{ mt: 3, mb: 2 }}
        style={{ backgroundColor: 'mediumaquamarine', color: 'black' , width: '50%', fontFamily: 'Tajawal, sans-serif'}}
      >
      <span> حفظ</span> 
  
      </Button  >
            
        </Grid>
    );
};

export default Test;

