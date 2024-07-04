import React from "react";
import { Typography, Box, Button } from "@mui/material";
import gif1 from "../assets/svg/ezgif 1.svg";
const GifComponent = ({src, text, description}) => {
    return (
        <>
   <Box sx={{display:'flex',flexDirection:'column'}}>
               <Box sx={{}}>
                    <img src={src} alt="gif1"/>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center',}}>
                    <Box sx={{backgroundColor:'#EEEEF5', width:'55px',height:'55px',borderRadius:'50%'}}>
                    <div style={{display: 'flex', justifyContent: 'center',alignItems:'center',marginTop:'20px'}}>{text}</div>
                    </Box>

                    <Typography fontSize="15px" fontWeight="500" color="#112D35">
                    {description}
                                </Typography>
                                </Box>

                                </Box>
        </>
    )
}
export default GifComponent;