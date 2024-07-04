import React from "react";
import { Typography, Box, Button } from "@mui/material";
import gif1 from "../assets/svg/ezgif 1.svg";
import gif2 from "../assets/svg/ezgif 2.svg";
import gif3 from '../assets/svg/ezgif 2 (1).svg';
import gif4 from '../assets/svg/ezgif 2 (2).svg'
import GifComponent from "./GifComponent";
const InfoKit = () => {
    return (
        <>
            <Box sx={{display:'flex', justifyContent:'center'}}>
               <Box sx={{display:'flex', flexDirection:'column'}}>
               <Typography fontSize="36px" fontWeight="700" color="#112D35">
               A fertility lab at your fingertips
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               Easy-to-read fertility diagnostic results directly on your iPhone¹, in just 10 minutes.
               </Typography>
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
                <Typography fontSize="12px" fontWeight="500" color="#A0ABAE">
                * The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.
               </Typography>
               </Box> 
               <Box sx={{display:'grid',gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: 2, 
                padding: 2 }}>
            <GifComponent src={gif1} text={1} description="Dip the test strip in urine for 15 seconds."/>
            <GifComponent src={gif2} text={2} description="Dip the test strip in urine for 15 seconds."/>
           
            
            <GifComponent src={gif3} text={3} description="Dip the test strip in urine for 15 seconds."/>
            <GifComponent src={gif4} text={4} description="Dip the test strip in urine for 15 seconds."/>
            </Box>
                                </Box>
                            </>
    )
}

export default InfoKit;