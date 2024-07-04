import { Typography, Box } from "@mui/material";
import React from "react";
import bloomberg from '../assets/svg/image 9.svg'
import forbes from '../assets/svg/image 10.svg'
import thisWeek from '../assets/svg/image 11.svg'
import washington from '../assets/svg/image 12.svg'
import entrepreneur from '../assets/svg/image 13.svg'
export const SeenComponent = () =>{
    return (
        <>
          <Box sx={{display: 'flex',justifyContent: 'center',alignItems:'center', flexDirection:'column'}}>
            <Typography>
                AS SEEN ON 
            </Typography>
            <Box sx={{display:'flex',justifyContent: 'space-around'}}>
            <Box>
                <img src={bloomberg} alt="bloomberg"/>
                </Box>
                <Box>
                <img src={forbes} alt="bloomberg"/>
                </Box>
                <Box>
                <img src={thisWeek} alt="bloomberg"/>
                </Box>
                <Box>
                <img src={washington} alt="bloomberg"/>
                </Box>
                <Box>
                <img src={entrepreneur} alt="bloomberg"/>
                </Box>
            </Box>
          </Box>  
        </>
    )
}
export default SeenComponent;