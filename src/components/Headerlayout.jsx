import React from "react";
import { Box,Typography, Button } from "@mui/material";
import backgroundImage from '../assets/svg/main-background.svg'
import iphoneImage from '../assets/svg/iPhone 13 Pro Mockup Vol 03 Floating iphone with inito 2.svg'
export const HeaderLayout = () => {
    return (
        <>
        <Box  
        sx={{backgroundImage: `url(${backgroundImage})`,
                height: '100vh',
                width: '100vw',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'}}
               >

            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'40%'}}>
            <Box sx={{margin :'40px'}}>
            <Typography variant="h3" fontWeight="700" fontSize="48px" color="#112D35">
            Track your fertility hormones at home, in 10 minutes
                </Typography>
          
            </Box>
          <Box sx={{marginLeft :'40px'}}>
            <Typography variant="h3" fontWeight="700" fontSize="16px" color="#112D35">
            Get accurate results of 
            <span>Estrogen, LH, Progesterone metabolite PdG and FSH </span>with Inito, the all-in-one, FDA-registered fertility monitor.
                </Typography>
          </Box>
            <div sx={{}}>
                <Button sx={{
                    
                    backgroundColor: '#1F94AA',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '17px'
                }}>
                    How does inito work?
                </Button>
            </div>
            </div>

            {/* Second Component */}
            <Box
               sx={{width:'60%'}}
            >
               <img src={iphoneImage} alt="iphone"/>
            </Box>
</Box>    
        </>
    )
}
export default HeaderLayout