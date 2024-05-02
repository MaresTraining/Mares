import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchField = () => {
    return (
        <TextField
            placeholder="ابحث عن الفرصة التدريبية...."
            variant="outlined"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton>
                            <SearchIcon style={{ color: '#66cdaa' }} />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            style={{ width: '50%', minHeight: '100px', fontFamily: 'Tajawal, sans-serif', marginTop: '55px',marginRight:'400px', borderColor: '#66cdaa', borderWidth: '20px' }}
        />
    );
};

export default SearchField;

