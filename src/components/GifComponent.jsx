import React from "react";
import { Typography, Box, Button } from "@mui/material";
import gif1 from "../assets/svg/ezgif 1.svg";
const GifComponent = ({src, text, description}) => {
    return (
        <>
   <Box sx={{display:'flex',flexDirection:'column',gap:'3px',justifyContent:'center'}}>
               <Box sx={{}}>
                    <img src={src} alt="gif1"/>
                    </Box>
                    <Box sx={{display: 'flex',  alignItems:'center',gap:'5px'}}>
                    <Box sx={{backgroundColor:'#EEEEF5', width:'50px',height:'50px',borderRadius:'50%'}}>
                    <div style={{display: 'flex', justifyContent: 'center',alignItems:'center',marginTop:'15px',}}>{text}</div>
                    </Box>
<div style={{width:'50%'}}>
                    <Typography fontSize="15px" fontWeight="500" color="#112D35">
                    {description}
                                </Typography>
                                </div>
                                </Box>

                                </Box>
        </>
    )
}
export default GifComponent;