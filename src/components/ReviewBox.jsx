import { Box, Typography } from "@mui/material";
import React from "react";
import star from '../assets/svg/star.svg'
import dots from '../assets/svg/dots.svg'
const ReviewBox = () => {
    return (
        <>
<Box sx={{
    backgroundColor: '#F7F7FE',
   display:' flex', 
  margin:'10px',
  width:'60%',
    borderRadius: '40px',
    padding:'25px',
    justifyContent:'center',
    alignItems:'center'
}}>
<Box sx={{}}>
<img src={star} alt="star"/>
    <Typography fontSize="15px" fontWeight="500" color="#3F55D">
    This is my favorite fertility monitor I’ve tried so far. I was cautious about ordering since there’s very little info or reviews
    </Typography>
    <Typography fontSize="15px" fontWeight="500" color="#3F55D">
     around the internet, but it seems to be a very well made and reliable device. It’s totally fascinating to see my hormone
    </Typography>
    <Typography fontSize="15px" fontWeight="500" color="#3F55D">
   levels on the chart! My LH levels don’t cooperate with standard ovulation strips (I never get a positive with standard strips),
    </Typography>
    <Typography fontSize="15px" fontWeight="500" color="#3F55D">
  so it’s nice to see all the different hormones mapped out together.
    </Typography>
    <div style={{display:'flex',justifyContent:'flex-start',marginTop:'15px'}}>
<Typography>
    Sunny
</Typography>
</div>
    </Box>
    
</Box>
<Box sx={{display:'flex'}}>

<Box>
        <img src={dots} alt="dots"/>
    </Box>
    </Box>
        </>
    )
}

export default ReviewBox;