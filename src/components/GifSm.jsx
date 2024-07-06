import React from "react";
import { Typography, Box, Button } from "@mui/material";
import gif1 from "../assets/svg/ezgif 1.svg";
const GifSm = ({src, text, description}) => {
    return (
        <>
   <Box sx={{display:'flex',flexDirection:'column',gap:'3px',justifyContent:'center',alignItems:'center'}}>
               <Box sx={{position:'relative'}}>
               <Box sx={{backgroundColor:'#BDE0E6', width:'50px',height:'50px',borderRadius:'50%',position:'absolute',top:'-23px',left:'-21px'}}>
                    <div style={{display: 'flex', justifyContent: 'center',alignItems:'center',marginTop:'15px',color:'#fff'}}>{text}</div>
                    </Box>
                    <img src={src} alt="gif1"/>
                    </Box>
                    <Box sx={{display: 'flex',justifyContent:'center',  alignItems:'center',gap:'5px'}}>
                    
<div style={{width:'70%'}}>
                    <Typography fontSize="11px" fontWeight="500" color="#112D35">
                    {description}
                                </Typography>
                                </div>
                                </Box>

                                </Box>
        </>
    )
}
export default GifSm;