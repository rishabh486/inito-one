import React from "react";
import { Box, Typography } from "@mui/material";
import fb from '../assets/svg/Vector.svg'
import insta from '../assets/svg/Instagram - Negative.svg'
import lk from '../assets/svg/LinkedIn - Negative.svg'
import yt from '../assets/svg/YouTube - Negative.svg'
import initoSmall from '../assets/svg/Logo Inito Small.svg'
import arrow from "../assets/svg/arrow.svg"
const Footer = ({width}) => {
    return (
        <>
        {width > 600 ?
        <>
<Box sx={{backgroundColor:'#112D35',display:'flex',justifyContent:'center', alignItems: 'center',padding:'25px',width:'100%'}}>
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
<Box sx={{ backgroundColor:'#000000',width:'100%'}}>
<div style={{display:'flex',justifyContent:'space-between',marginLeft:'160px'}}>
<div style={{padding:'3px',marginRight:'40px'}}>
<img src={initoSmall} alt="inito"/>
</div>
<div style={{padding:'10px',marginRight:'40px'}}>
               <Typography fontSize="12px" fontWeight="500" color="#869194">
               Copyright 2023, Inito Inc.
               </Typography>
               
</div>
</div>
</Box>
</>
:
<>

<Box sx={{backgroundColor:'#112D35',display:'flex',flexDirection:'column', justifyContent:'center', alignItems: 'center',padding:'25px',width:'100%',gap:'30px'}}>
<Box sx={{display:'flex',justifyContent:'space-between',width:'50%'}}>
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

<Box sx={{display:'flex',justifyContent:'space-between',flexDirection:'column',gap:'50px',width:'60%'}}>
<Box sx={{display:'flex',justifyContent:'space-between'}}>
    <Typography fontSize="15px" fontWeight="500" color="#fff">
   Company
    </Typography>
    <img src={arrow} alt="arrow"/>
    </Box>
    <Box sx={{display:'flex',justifyContent:'space-between'}}>
    <Typography fontSize="15px" fontWeight="500" color="#fff">
   Support
    </Typography>
    <img src={arrow} alt="arrow"/>
    </Box>
    <Box sx={{display:'flex',justifyContent:'space-between'}}>
    <Typography fontSize="15px" fontWeight="500" color="#fff">
   Get in Touch
    </Typography>
    <img src={arrow} alt="arrow"/>
    </Box>
</Box>
</Box>
<Box sx={{ backgroundColor:'#000000',width:'100%',padding:'40px'}}>
<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
<div style={{padding:'3px'}}>
<img src={initoSmall} alt="inito"/>
</div>
<div style={{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
               <Typography fontSize="11px" fontWeight="500" color="#fff">
               Copyright 2019. Samplytics Technologies Private
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#fff">
                Limited. All Rights Reserved.
               </Typography>
               
</div>
</div>
</Box>
</>}
        </>
    )
}
export default Footer;