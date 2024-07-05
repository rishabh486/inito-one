import React from "react";
import { Box, Typography } from "@mui/material";
import fb from '../assets/svg/Vector.svg'
import insta from '../assets/svg/Instagram - Negative.svg'
import lk from '../assets/svg/LinkedIn - Negative.svg'
import yt from '../assets/svg/YouTube - Negative.svg'
import initoSmall from '../assets/svg/Logo Inito Small.svg'
const Footer = () => {
    return (
        <>
<Box sx={{backgroundColor:'#112D35',display:'flex',justifyContent:'center', alignItems: 'center',padding:'25px'}}>
<Box sx={{display:'flex',flexDirection:'column',marginRight: '130px'}}>
<div style={{padding:'10px'}}>
<Typography fontSize="15px" fontWeight="600" color="#FFFFFF">
               Company
               </Typography>
               </div>
               <div style={{padding:'10px'}}>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               About Us
               </Typography>
               </div>
               <div style={{padding:'10px'}}>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               Careers
               </Typography>
               </div>
               <div style={{padding:'10px'}}>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
              Blog
               </Typography>
               </div>
               <div style={{padding:'10px'}}>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               Contact Us
               </Typography>
               </div>
</Box>

<Box sx={{display:'flex',flexDirection:'column',marginRight: '130px'}}>
<div style={{padding:'10px'}}>
<Typography fontSize="15px" fontWeight="600" color="#FFFFFF">
               Support
               </Typography>
               </div>
               <div style={{padding:'10px'}}>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               FAQ
               </Typography>
               </div>
               <div style={{padding:'10px'}}>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               Terms
               </Typography>
               </div>
               <div style={{padding:'10px'}}>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               Privacy Policy
               </Typography>
               </div>
               <div style={{padding:'10px'}}>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               Returns & Warranty
               </Typography>
               </div>
</Box>

<Box sx={{display:'flex',flexDirection:'column',marginRight: '130px',marginBottom:'46px'}}>
<div style={{padding:'10px'}}>
<Typography fontSize="15px" fontWeight="600" color="#FFFFFF">
               Get In Touch
               </Typography>
               </div>
               <div style={{padding:'10px'}}>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               +1 815-369-0989
               </Typography>
               </div>
               <div style={{padding:'10px'}}>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               help@inito.com
               </Typography>
               </div>
               <div style={{padding:'10px'}}>
               <Typography fontSize="15px" fontWeight="400" color="#A0ABAE">
               355 Bryant Street, Suite 403, San Francisco 94017
               </Typography>
               </div>
</Box>
<Box sx={{display:'flex',justifyContent:'space-between', marginBottom: '165px'}}>
<div style={{padding: '10px'}}>
<img src={fb} alt="fb"/>
</div>
<div style={{padding: '10px'}}>
<img src={insta} alt="insta"/>
</div>
<div style={{padding: '10px'}}>
<img src={lk} alt="lk"/>
</div>
<div style={{padding: '10px'}}>
<img src={yt} alt="yt"/>
</div>
</Box>
</Box>
<Box sx={{ backgroundColor:'#000000'}}>
<div style={{display:'flex',justifyContent:'space-around',marginLeft:'160px'}}>
<div>
<img src={initoSmall} alt="inito"/>
</div>
<div>
               <Typography fontSize="12px" fontWeight="500" color="#869194">
               Copyright 2023, Inito Inc.
               </Typography>
               
</div>
</div>
</Box>
        </>
    )
}
export default Footer;