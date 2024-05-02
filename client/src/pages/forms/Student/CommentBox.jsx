import React, { useState } from 'react';
import { TextField, Button, Typography, Rating } from '@mui/material';

const CommentBox = () => {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    // Function to handle submission of the comment
    const handleSubmit = () => {
        // Here you can submit the comment and rating to the database
        console.log('Comment:', comment);
        console.log('Rating:', rating);
        // Reset the comment and rating after submission
        setComment('');
        setRating(0);
    };

    return (
        <div style={{ width: '40%', marginTop: '20px' ,marginRight:'400px'}}>
            <Typography variant="h6" gutterBottom fontFamily='Tajawal, sans-serif'>
                ضع تعليقك:
            </Typography>
          
            <TextField
                label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}> صف تجربتك خلال التدريب </span>} 
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{ marginBottom: '20px' }}
                InputProps={{ style: { fontFamily: 'Tajawal, sans-serif' } }}
            />
            <Typography variant="subtitle1" gutterBottom fontFamily='Tajawal, sans-serif'>
                قيم تجربتك
            </Typography>
            <Rating
                name="rating"
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
                style={{ marginBottom: '20px' }}
            />
            <br></br>

            <Button
    variant="contained"
  
    onClick={handleSubmit}
    style={{ fontFamily: 'Tajawal, sans-serif', backgroundColor: '#66cdaa' , color: 'black'}}
>
    ارسل
</Button>


        </div>
    );
};

export default CommentBox;
