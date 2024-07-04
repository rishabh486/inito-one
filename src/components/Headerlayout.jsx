import React from "react";
import { Box,Typography, Button } from "@mui/material";
import backgroundImage from '../assets/svg/Header-bg-01 2.svg'
import iphoneImage from '../assets/svg/iPhone 13 Pro Mockup Vol 03 Floating iphone with inito 2.svg'
export const HeaderLayout = () => {
    return (
        <>
        <Box  sx={{height:'100vh',width:'100vw',overflow: 'hidden',
                position: 'relative',}}>
         <img
     
      src={backgroundImage}
      alt="img"
      style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
    />
  {/* First Component */}
  <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    color: 'white',
                }}
            >
            <Box sx={{width:'40%'}}>
            <Typography variant="h3" fontWeight="700" fontSize="48px" color="#112D35">
            Track your fertility hormones at home, in 10 minutes
                </Typography>
            </Box>
            <Box sx={{width:'40%'}}>
            <Typography variant="h3" fontWeight="700" fontSize="16px" color="#112D35">
            Get accurate results of 
            <span>Estrogen, LH, Progesterone metabolite PdG and FSH </span>with Inito, the all-in-one, FDA-registered fertility monitor.
                </Typography>
            </Box>
            <Box>
                <Button sx={{
                    width: '248px',
                    height: '50px',
                    backgroundColor: '#1F94AA',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '17px'
                }}>
                    How does inito work?
                </Button>
            </Box>
            </Box>

            {/* Second Component */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '11%',
                    left: '44%',
                }}
            >
               <img src={iphoneImage} alt="iphone"/>
            </Box>
</Box>    
        </>
    )
}
export default HeaderLayout