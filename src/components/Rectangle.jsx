import React from "react";
import rectangle from '../assets/svg/rectangle205.svg'
import { Box, Typography,Button } from "@mui/material";
import maskGroup from '../assets/svg/Mask group.svg';
import chartData from '../assets/svg/image 14 1.svg';
import greenTick from '../assets/svg/grren-tick.svg';
import blueTick from '../assets/svg/blue-tick.svg';
import purpleTick from '../assets/svg/purple-tick.svg';
import yellowTick from '../assets/svg/yellow-tick.svg';
const Rectangle = () => {
    return (
        <>
       
              <div style={{
                backgroundImage: `url(${rectangle})`,
               display: 'flex',
               backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
              alignItems:'center',
               justifyContent: 'center',
               padding:'40px'
               
            }}
            >
<Box sx={{display:'flex',flexDirection:'column',gap:'50px'}}>
            {/* First Overlay Component */}
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Box  sx={{display:'flex',justifyContent:'center',backgroundColor: '#B4E4F2',borderRadius:'20px'}} >
            <Box sx={{}}>
            <img src={maskGroup} alt="maskGroup"/>
            </Box>
            </Box>

            {/* Second Overlay Component */}
            <Box
               
            >
               <Box sx={{display: 'flex',flexDirection:'column',justifyContent:'center'}}>
               <Box sx={{padding:'4px'}}>
               <Typography fontSize="36px" fontWeight="700" color="#112D35">
               Predict and confirm
               </Typography>
               <Typography fontSize="36px" fontWeight="700" color="#112D35">
               your ovulation with
               </Typography>
               <Typography fontSize="36px" fontWeight="700" color="#112D35">
               actual data
               </Typography>
               </Box>
               <Box sx={{padding:'4px'}}>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               Unlike most ovulation tests that only give you "yes/no" results,
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               Inito provides <span style={{color:"#112D35",fontWeight:"700"}}>real numerical values</span> of your fertility
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
                hormones.
               </Typography>
               </Box>
               <Box sx={{padding:'4px'}}>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               If you have irregular cycles, actual data is necessary to know 
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               exactly when you ovulate, and when is the best time to try to conceive.
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               conceive.
               </Typography>
               </Box>
<Box sx={{padding:'4px'}}>
               <Button sx={{
                    
                    backgroundColor: '#1F94AA',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '17px'
                }}>
                    Get the Inito Kit
                </Button>
                </Box>
               </Box>
            </Box>
</div>
            {/* Third Overlay Component */}
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'20px'}}>
            <Box
               sx={{width:'50%'}}
               >
                  <Box sx={{display: 'flex',flexDirection:'column',justifyContent:'center',}}>
                  <Box sx={{padding:'4px'}}>
                  <Typography fontSize="36px" fontWeight="700" color="#112D35">
                  Never miss a day

                  </Typography>
                  <Typography fontSize="36px" fontWeight="700" color="#112D35">
                  again with Inito
                  </Typography>
                 
                  </Box>
                  <Box sx={{padding:'4px'}}>
                  <Typography fontSize="15px" fontWeight="500" color="#112D35">
                  Inito tracks up to 6 fertile days and confirms ovulation by 

                  </Typography>
                  <Typography fontSize="15px" fontWeight="500" color="#112D35">
                  measuring all 4 hormones in just 10 minutes:
                  </Typography>
                 
                  </Box>
                 
<Box sx={{padding:'4px',display:'flex',flexDirection:'column',}}>
<div style={{display:'flex',alignItems:'center'}}>
    <img src={greenTick} alt="tick"/>
    <Typography fontSize="15px" fontWeight="500" color="#112D35">
    Estrogen, which rises 3-4 days before ovulation
                  </Typography>
    </div>
    <div style={{display:'flex',alignItems:'center'}}>
    <img src={purpleTick} alt="tick"/>
    <Typography fontSize="15px" fontWeight="500" color="#112D35">
    LH, which surges 24-36 hours before ovulation
                  </Typography>
    </div>
    <div style={{display:'flex',alignItems:'center'}}>
    <img src={blueTick} alt="tick"/>
    <Typography fontSize="15px" fontWeight="500" color="#112D35">
    PdG, which rises after ovulation
                  </Typography>
    </div>
    <div style={{display:'flex',alignItems:'center'}}>
    <img src={yellowTick} alt="tick"/>
    <Typography fontSize="15px" fontWeight="500" color="#112D35">
    FSH, to track follicle growth
                  </Typography>
    </div>
</Box>
                  </Box>
               </Box>

            {/* Fourth Overlay Component */}
            <Box
               sx={{width:'50%'}}
            >
             <img style={{width:'95%'}}src={chartData} alt="chartData"/>
            </Box>
            </div>
</Box>
</div>
        </>
    )
}
export default Rectangle;