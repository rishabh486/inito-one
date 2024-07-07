import React from "react";
import { Typography, Box, Button } from "@mui/material";
import gif1 from "../assets/svg/ezgif 1.svg";
import gif2 from "../assets/svg/ezgif 2.svg";
import gif3 from '../assets/svg/ezgif 2 (1).svg';
import gif4 from '../assets/svg/ezgif 2 (2).svg'
import GifComponent from "./GifComponent";
import GifSm from "./GifSm";
import largeF from '../assets/svg/largef.svg';
const InfoKit = ({width}) => {
    return (
        <>
        {width > 600 ?
            <Box sx={{display:'flex', justifyContent:'center',alignItems:'center',padding:'30px'}}>
               <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
               <div style={{padding: '10px',position:'relative'}}>
               <Typography fontSize="36px" fontWeight="700" color="#112D35">
               A <span>fertility lab<span><img style={{position:'absolute',top:'41%',left:'11%'}} src={largeF} alt="large"/></span></span> at
               </Typography>
               <Typography fontSize="36px" fontWeight="700" color="#112D35">
               your fingertips
               </Typography>
               </div>
               <div style={{padding: '10px'}}>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               Easy-to-read fertility diagnostic results directly on your 
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               iPhone¹, in just 10 minutes.
               </Typography>
               </div>
               <div style={{padding: '10px'}}>
               <Button sx={{
                    width: '248px',
                    height: '50px',
                    backgroundColor: '#1F94AA',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '17px'
                }}>
                    Get the Inito Kit
                </Button>
                </div>
                <Typography fontSize="12px" fontWeight="500" color="#A0ABAE">
                * The Inito Fertility Monitor currently supports iPhone 7 and up. Android
               </Typography>
               <Typography fontSize="12px" fontWeight="500" color="#A0ABAE">
                phones are not supported at the moment.
               </Typography>
               </Box> 
               <Box sx={{display:'flex',flexDirection:'column',gap:'3px' }}>
               <Box sx={{display:'flex',alignItems:'center',justifyContent:'center' }}>
            <GifComponent src={gif1} text={1} description="Dip the test strip in urine for 15 seconds."/>
            <GifComponent src={gif2} text={2} description="Attach the Inito Fertility Monitor to your iPhone*."/>
           </Box>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <GifComponent src={gif3} text={3} description="Insert the test strip into the Inito Fertility Monitor."/>
            <GifComponent src={gif4} text={4} description="Get personalized results on our App in 10 minutes."/>
            </Box>
                                </Box>
                                </Box>

                                :<>
<Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                             <Box>
                             <Box sx={{display:'flex', flexDirection:'column'}}>
               <div style={{padding: '5px'}}>
               <Typography fontSize="20px" fontWeight="700" color="#112D35">
               A fertility lab at
               </Typography>
               <Typography fontSize="20px" fontWeight="700" color="#112D35">
               your fingertips
               </Typography>
               </div>
               <div style={{padding: '5px'}}>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               Easy-to-read fertility diagnostic 
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               results directly on your iPhone¹,
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               in just 10 minutes.
               </Typography>
               </div>
                             </Box> 
                             </Box>

                             <Box sx={{display:'flex',flexDirection:'column',gap:'20px',flexWrap:'wrap',justifyContent:'center',alignItems:'center' }}>
              
            <GifSm src={gif1} text={1} description="Dip the test strip in urine for 15 seconds."/>
            <GifSm src={gif2} text={2} description="Attach the Inito Fertility Monitor to your iPhone*."/>
          
            
            <GifSm src={gif3} text={3} description="Insert the test strip into the Inito Fertility Monitor."/>
            <GifSm src={gif4} text={4} description="Get personalized results on our App in 10 minutes."/>
            
                                </Box>
</Box>
                                </>}

                            </>
    )
}

export default InfoKit;