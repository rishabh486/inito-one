import React from "react";
import { Box,Typography, Button } from "@mui/material";
import backgroundImage from '../assets/svg/main-background.svg'
import iphoneImage from '../assets/svg/iPhone 13 Pro Mockup Vol 03 Floating iphone with inito 2.svg'
import zigzag from '../assets/svg/zigzag.svg';
import zigzag1 from '../assets/svg/zigzag1.svg';
import smLayout from '../assets/svg/layout-sm.svg'
import mobileSm from '../assets/svg/1 mobile 1.svg';
import star from '../assets/svg/star.svg'
import initoDevice from '../assets/svg/inito-device 1.svg'
export const HeaderLayout = ({width}) => {
    return (
        <>
        {width >600 ?
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
            <img src={star} alt="star"/>
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
:
<>

<Box
sx={{
                backgroundImage: `url(${smLayout})`,
                height: '70vh',
                width: '100vw',
                
               position:'relative',
               backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
            }}
>
 <Box sx={{display:'flex',justifyContent:'flex-end',position:'absolute',top:'50%',left:'28%'}}>
          <img src={mobileSm} alt="mobileSm" />
         
                
          </Box>
          <Box sx={{display:'flex',justifyContent:'flex-end',position:'absolute',top:'50%',left:'-5%'}}>
 
 <img src={initoDevice} alt="initoDevice" />

       
 </Box>
  <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',padding:'20px'}}>
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'18px'}}>
  <img src={star} alt="star"/>
  <div style={{marginTop:'3px'}}>
  <Typography  fontWeight="700" fontSize="8px" color="#000000">
          TRUSTED BY 20,000+ COUPLES
                </Typography>
                </div>
                </div>
            <Box sx={{padding:'5px'}}>
            <Typography  fontWeight="700" fontSize="25px" color="#112D35">
            Track your fertility 
                </Typography>
                <Typography  fontWeight="700" fontSize="25px" color="#112D35">
             hormones at home, 
                </Typography>
                <Typography  fontWeight="700" fontSize="25px" color="#112D35">
             in 10 minutes
                </Typography>
            </Box>
          <Box sx={{display:'flex',flexDirection:'column',marginRight:'23px'}}>
            <Typography  fontWeight="500" fontSize="12px" >
                Get accurate results of 
            <span style={{color:"#112D35",fontWeight:"700"}}> Estrogen, LH,</span>
                </Typography>
                <Typography  fontWeight="500" fontSize="12px" >
                <span style={{color:"#112D35",fontWeight:"700"}}>Progesterone</span><span style={{color:"#112D35",fontWeight:"700"}}>(PdG) and FSH </span>with
                </Typography>
                <Typography  fontWeight="500" fontSize="12px" color="#112D35">
                Inito, the all-in-one, FDA-registered
                </Typography>
                <Typography  fontWeight="500" fontSize="12px" color="#112D35">
                fertility monitor.
                </Typography>
          </Box>
         
         
           
            </div>
            <div style={{padding:'5px',position:'absolute',top:'92%',zIndex:'1000000000',left:'35%'}}>
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
</Box>

</>}  
        </>
    )
}
export default HeaderLayout