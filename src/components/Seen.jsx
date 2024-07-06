import { Typography, Box } from "@mui/material";
import React from "react";
import bloomberg from '../assets/svg/image 9.svg'
import forbes from '../assets/svg/image 10.svg'
import thisWeek from '../assets/svg/image 11.svg'
import washington from '../assets/svg/image 12.svg'
import entrepreneur from '../assets/svg/image 13.svg'
export const SeenComponent = ({width}) =>{
    return (
        <>
        {width > 600 ?
          <Box sx={{display: 'flex',justifyContent: 'center',alignItems:'center', flexDirection:'column',width:'100%',gap:'30px'}}>
            <Typography fontSize="17px" fontWeight="700" color="#C4C4C4">
                AS SEEN ON 
            </Typography>
            <Box sx={{display:'flex',gap:'70px',justifyContent:'cenetr',alignItems:'center'}}>
            <Box sx={{display:'flex'}}>
                <img src={bloomberg} alt="bloomberg"/>
                </Box>
                <Box sx={{display:'flex'}}>
                <img src={forbes} alt="bloomberg"/>
                </Box>
                <Box sx={{display:'flex'}}>
                <img src={thisWeek} alt="bloomberg"/>
                </Box>
                <Box sx={{display:'flex'}}>
                <img src={washington} alt="bloomberg"/>
                </Box>
                <Box sx={{display:'flex'}}>
                <img src={entrepreneur} alt="bloomberg"/>
                </Box>
            </Box>
          </Box>  

          :
          <>
          <Box sx={{display: 'flex',justifyContent: 'center',alignItems:'center', flexDirection:'column',width:'100%',gap:'30px',padding:'30px'}}>
          <Box sx={{display: 'flex',justifyContent: 'center',alignItems:'center', flexDirection:'column'}}>
            <Typography fontSize="10px" fontWeight="700" color="#C4C4C4">
                AS SEEN ON 
            </Typography>
            <Box sx={{display:'flex'}}>
                <img src={bloomberg} alt="bloomberg"/>
                </Box>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'10px'}}>
           
                <Box sx={{display:'flex',justifyContent:'space-between',gap:'30px'}}>
                <img  src={forbes} alt="bloomberg"/>
                <img src={thisWeek} alt="bloomberg"/>
                </Box>
                <Box sx={{display:'flex',gap:'30px',justifyContent:'space-between'}}>
                <img src={entrepreneur} alt="bloomberg"/>
                <img src={washington} alt="bloomberg"/>
                </Box>
            </Box>
          </Box>  
          </>
        }
        </>
    )
}
export default SeenComponent;