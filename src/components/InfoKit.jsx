import React from "react";
import { Typography, Box, Button } from "@mui/material";
const InfoKit = () => {
    return (
        <>
            <Box>
               <Box>
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
               <Box>

               </Box>
            </Box>
        </>
    )
}

export default InfoKit;