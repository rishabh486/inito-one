import React from "react";
import rectangle from '../assets/svg/Rectangle 205.svg'
import { Box, Typography,Button } from "@mui/material";
import maskGroup from '../assets/svg/Mask group.svg';
import chartData from '../assets/svg/image 14 1.svg'
const Rectangle = () => {
    return (
        <>
<Box sx={{display: 'flex',justifyContent:'center',height:'100vh',width:'100vw',overflow: 'hidden',
                position: 'relative',}}>
    <img  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
                src={rectangle} alt="rectangle"/>

            {/* First Overlay Component */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    color: 'white',
                }}
            >
            <Box sx={{backgroundColor: '#B4E4F2'}}>
            <img src={maskGroup} alt="maskGroup"/>
            </Box>
            </Box>

            {/* Second Overlay Component */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    color: 'white',
                }}
            >
               <Box sx={{display: 'flex',flexDirection:'column',width:'50%'}}>
               <Typography fontSize="36px" fontWeight="700" color="#112D35">
               Predict and confirm your ovulation with actual data
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               Unlike most ovulation tests that only give you "yes/no" results, Inito provides <span style={{color:"#112D35",fontWeight:"700"}}>real numerical values</span> of your fertility hormones.

               </Typography>

               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               If you have irregular cycles, actual data is necessary to know exactly when you ovulate, and when is the best time to try to conceive.
               </Typography>
               </Box>
            </Box>

            {/* Third Overlay Component */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '10%',
                    color: 'white',
                }}
            >
                 <Typography>
                hello
               </Typography>
            </Box>

            {/* Fourth Overlay Component */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    color: 'white',
                }}
            >
             <img src={chartData} alt="chartData"/>
            </Box>
</Box>
        </>
    )
}
export default Rectangle;