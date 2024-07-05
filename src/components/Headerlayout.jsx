import React from "react";
import { Box,Typography, Button } from "@mui/material";
import backgroundImage from '../assets/svg/main-background.svg'
import iphoneImage from '../assets/svg/iPhone 13 Pro Mockup Vol 03 Floating iphone with inito 2.svg'
import zigzag from '../assets/svg/zigzag.svg';
import zigzag1 from '../assets/svg/zigzag1.svg';
export const HeaderLayout = () => {
    return (
        <>
        <Box  
        sx={{backgroundImage: `url(${backgroundImage})`,
                height: '100vh',
                width: '100vw',
              display:'flex',
               justifyContent: 'space-evenly',
               alignItems: 'center',
               overflow:'hidden'
              }}
               >

            <div style={{display:'flex',flexDirection:'column',padding:'50px'}}>
            <Box sx={{padding:'5px'}}>
            <Typography variant="h3" fontWeight="700" fontSize="48px" color="#112D35">
            Track your fertility 
                </Typography>
                <Typography variant="h3" fontWeight="700" fontSize="48px" color="#112D35">
             hormones at home, 
                </Typography>
                <Typography variant="h3" fontWeight="700" fontSize="48px" color="#112D35">
             in 10 minutes
                </Typography>
            </Box>
          <Box sx={{padding:'5px',marginTop:'20px'}}>
            <Typography variant="h3" fontWeight="500" fontSize="16px" >
            Get accurate results of 
            <span style={{color:"#112D35",fontWeight:"700"}}> Estrogen, LH, Progesterone</span>
                </Typography>
                <Typography variant="h3" fontWeight="500" fontSize="16px" >
            <span style={{color:"#112D35",fontWeight:"700"}}> metabolite PdG and FSH </span>with Inito, the all-in-one,
                </Typography>
                <Typography variant="h3" fontWeight="500" fontSize="16px" color="#112D35">
            FDA-registered fertility monitor.
                </Typography>
          </Box>
            <div style={{padding:'5px',marginTop:'20px'}}>
                <Button sx={{
                    color:'#fff',
                    backgroundColor: '#1F94AA',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '15px',
                margin:'5px'
                }}>
                    How does inito work?
                </Button>
            </div>
            </div>

            {/* Second Component */}
            <Box
               sx={{position:'relative',overflowY:'hidden'}}
            >
               <img src={iphoneImage} alt="iphone"/>
               <img style={{position:'absolute',top:'28%',left:'70%'}} src={zigzag} alt="zigzag"/>
               <img style={{position:'absolute',top:'12%',left:'23%'}}src={zigzag1} alt="zigzag"/>
            </Box>
</Box>    
        </>
    )
}
export default HeaderLayout