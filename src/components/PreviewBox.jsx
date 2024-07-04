import React from "react";
import { Box,TextField,Grid ,Typography} from "@mui/material";
import previewRectangle from '../assets/svg/rectangle.svg';
import ladyInito from "../assets/svg/lady-inito 1.svg";
import iphone from "../assets/svg/1- iPhone 12 Mockup - test required home screen 1.svg"
import { Button } from "@mui/material";
import chart from '../assets/svg/chart.svg'
const PreviewBox = () => {
    return (
        <>
       <Box
            sx={{
                backgroundImage: `url(${previewRectangle})`,
                height: '2140px',
                width: '100vw',
               marginTop: '155px',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',gap:'40px'
            }}
        >

       


                {/* First Overlay Component */}
                <Box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                   <Box sx={{width:'55%' ,backgroundColor: '#ffffff', borderRadius: '20px',padding:'30px',}}>
                   <Typography fontSize="15px" fontWeight="500" color="#1F94AA">
                   WHY MEASURE PROGESTERONE?
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
              <span> Anovulation</span> (having a menstrual cycle with no egg) is actually a common occurrence, affecting 1 in 10 women*.

               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               A sure way to confirm ovulation is a <span>rise in Progesterone level </span>after peak fertility. Progesterone also supports implantation and elevated levels of PdG during the 7-10 day window after ovulation correlates to higher chances of a successful pregnancy.
               </Typography>
               <Typography fontSize="12px" fontWeight="500" color="#A0ABAE">
               * Source: National Institutes of Health
               </Typography>
               <Typography fontSize="20px" fontWeight="700" color="#112D35">
               “Inito is all that you need to give you the best chance of conception."
               </Typography>




                   </Box>
                </Box>

                {/* Second Overlay Component */}
                <Box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width:'33%' }}>
               
                <Typography fontSize="36px" fontWeight="700" color="#112D35">
                Why Inito is the smarter way to get pregnant
               </Typography>
                </Box>

                {/* Third Overlay Component */}
                <Box sx={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center' ,borderRadius: '20px',backgroundColor: '#ffffff', width: '58%'}}>
                   <Box sx={{display:'flex', flexDirection:'column'}}>
                   <Typography fontSize="30px" fontWeight="700" color="#112D35">
                   Adapts to your
                   irregular cycle
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.
Every woman is unique, especially with a condition like PCOS or Thyroid which can influence hormone levels. Inito measures real values of your hormones to personalize results to the unique you.
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
Every woman is unique, especially with a condition like PCOS or Thyroid which can influence hormone levels. Inito measures real values of your hormones to personalize results to the unique you.
               </Typography>
                   </Box>
                   <Box>
                    <img style={{overflow: 'hidden',}} src={ladyInito} alt=""/>
                   </Box>
                </Box>

                {/* Fourth Overlay Component */}
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,borderRadius: '20px',backgroundColor: '#ffffff', width: '58%'}}>

                   <Box>
                    <img style={{overflow: 'hidden',}} src={iphone} alt="iphone"/>
                   </Box>
                   <Box sx={{display:'flex',flexDirection:'column'}}>
                   <Typography fontSize="30px" fontWeight="700" color="#112D35">
                   Adapts to your
                   irregular cycle
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.

               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
Every woman is unique, especially with a condition like PCOS or Thyroid which can influence hormone levels. Inito measures real values of your hormones to personalize results to the unique you.
               </Typography>
                   </Box>
                </Box>


                <Box sx={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center' ,borderRadius: '20px',backgroundColor: '#ffffff', width: '58%'}}>
                   <Box sx={{display:'flex',flexDirection:'column'}}>
                   <Typography fontSize="30px" fontWeight="700" color="#112D35">
                   Get charts and actual values of your hormones
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               Actual numerical values are necessary to know whether your PdG levels are sufficient enough to support a healthy pregnancy.
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               Studies show that PdG levels lower than 7.9ng/ml in serum (around 10ug/ml PdG) 6-8 days after ovulation are associated with lower pregnancy outcomes.
               </Typography>
                   </Box>
                   <Box>
                    <img style={{overflow: 'hidden',}} src={chart} alt="chart"/>
                   </Box>
                </Box>
            </Box>
        </>
    )
}
export default PreviewBox;