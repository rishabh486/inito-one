import React from "react";
import { Box,TextField,Grid ,Typography} from "@mui/material";
import previewRectangle from '../assets/svg/rectangle.svg';
import ladyInito from "../assets/svg/lady-inito 1.svg";
import iphone from "../assets/svg/1- iPhone 12 Mockup - test required home screen 1.svg"
import { Button } from "@mui/material";
import round from '../assets/svg/round.svg';
import chart from '../assets/svg/chart.svg';
import doctor from '../assets/svg/doctor.svg';
import greenHeart from '../assets/svg/green-heart.svg';
import measureSm from '../assets/svg/measure-sm.svg'
const PreviewBox = ({width}) => {
    return (
        <>
        {width > 600 ?
       <Box
            sx={{
                backgroundImage: `url(${previewRectangle})`,
                height: '2140px',
                width: '100vw',
               marginTop: '250px',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',gap:'100px',
               position:'relative'
            }}
        >
                {/* First Overlay Component */}
                <Box sx={{position:'absolute',bottom:'90%'}}>
                <Box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,position:'relative',padding:'20px'}}>
                <img  style={{position:'absolute',left:"90%",bottom:'75%'}}src={round} alt="round"/>
                   <Box sx={{width:'93%' ,backgroundColor: '#ffffff', borderRadius: '20px',padding:'30px',}}>
                   <div style={{padding: '4px'}}>
                   <Typography fontSize="15px" fontWeight="500" color="#1F94AA">
                   WHY MEASURE PROGESTERONE?
               </Typography>
               </div>
               <div style={{padding: '4px'}}>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
              <span> Anovulation</span> (having a menstrual cycle with no egg) is actually a common occurrence,

               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
             affecting 1 in 10 women*.

               </Typography>
               </div>
               <div style={{padding: '4px'}}>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               A sure way to confirm ovulation is a <span>rise in Progesterone level </span>after peak fertility. Progesterone
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               also supports implantation and elevated levels of PdG during the 7-10 day window after
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
              ovulation correlates to higher chances of a successful pregnancy.
               </Typography>
               </div>
               <div style={{padding: '4px'}}>
               <Typography fontSize="12px" fontWeight="500" color="#A0ABAE">
               * Source: National Institutes of Health
               </Typography>
               </div>
               <div style={{padding: '4px'}}>
               <Typography fontSize="20px" fontWeight="700" color="#112D35">
               “Inito is all that you need to give you the best chance of conception."
               </Typography>
</div>
<div style={{padding:'12px',display:'flex',gap:'10px'}}>
    <img src={doctor}alt="doc"/>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}
>    <Typography fontSize="15px" fontWeight="700" color="#112D35">
    Dr. Rachel Wagner
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#94A0A4">
               MD
               </Typography>
               </div>
</div>
                   </Box>
                </Box>
                </Box>

                {/* Second Overlay Component */}
                <Box  sx={{ display: 'flex', flexDirection:'column',justifyContent: 'center', alignItems: 'center',padding:'20px' }}>
               
                <Typography fontSize="36px" fontWeight="700" color="#112D35">
                Why Inito is the smarter
               </Typography>
               <Typography fontSize="36px" fontWeight="700" color="#112D35">
                 way to get pregnant
               </Typography>
                </Box>

                {/* Third Overlay Component */}
                <Box sx={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center' ,borderRadius: '20px',backgroundColor: '#ffffff', width: '58%'}}>
                   <Box sx={{display:'flex', flexDirection:'column',marginLeft:'35px'}}>
                   <div style={{padding:'4px'}}>
                   <Typography fontSize="30px" fontWeight="700" color="#112D35">
                   Adapts to your
               </Typography>
               <Typography fontSize="30px" fontWeight="700" color="#112D35">
                   irregular cycle
               </Typography>
               </div>
               <div style={{padding:'4px'}}>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               Most ovulation kits have a set value or a 
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               threshold, making them likely to give a false
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
              read if your hormones fall outside the average 
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
             range.
               </Typography>
               </div>
               <div style={{padding:'4px'}}>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
Every woman is unique, especially with a
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
condition like PCOS or Thyroid which can
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
influence hormone levels. Inito measures real 
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
values of your hormones to personalize results 
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
to the unique you.
               </Typography>
               </div>
                   </Box>
                   <Box >
                    <img style={{overflow: 'hidden',}} src={ladyInito} alt=""/>
                    
                   </Box>
                </Box>

                {/* Fourth Overlay Component */}
                
                <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' ,borderRadius: '20px',backgroundColor: '#ffffff', width: '58%'}}>

                   <Box sx={{position:'relative'}}>
                    <img style={{overflow: 'hidden',}} src={iphone} alt="iphone"/>
                    <div style={{display:'flex',flexDirection:'column', position:'absolute',backgroundColor:'#D9ECDC',borderRadius:'20px',top:'20%',right:'-2%',padding:'10px',width:'100%'}}>
                    <div style={{display:'flex',padding:'10px',justifyContent:'center',gap:'5px'}}>
                        <img src={greenHeart} alt="greenHeart"/>
                        <Typography fontSize="13px" fontWeight="700" color="#112D35">
                  High Fertility
               </Typography>
                    </div>
                    <Typography fontSize="13px" fontWeight="700" color="#112D35">
                   Your fertility level is high. In this window
               </Typography>
               <Typography fontSize="13px" fontWeight="700" color="#112D35">
                  you should have sex every other day
               </Typography>
                    </div>
                   </Box>
                   <Box sx={{display:'flex',flexDirection:'column',}}>
                   <div style={{padding:'5px'}}>
                   <Typography fontSize="30px" fontWeight="700" color="#112D35">
                   Inito tracks everything
               </Typography>
               <Typography fontSize="30px" fontWeight="700" color="#112D35">
              so you don’t have to
               </Typography>
               </div>
               <div style={{padding:'5px'}}>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               The Inito Fertility Monitor comes with a free easy-
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               to-use App, so you can track your fertile days with 
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
                and know exactly when you ovulate.
               </Typography>
               </div>
               <div style={{padding:'5px'}}>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               Our App notifies you for everything:
               </Typography>
               </div>
               <div style={{padding:'5px'}}>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               • Your fertility levels
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               • When to test on the right days
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">  
               • When you’ve successfully ovulated
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               • And when to roll into bed!
               </Typography>
               </div>
                   </Box>
                </Box>


                <Box sx={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center' ,borderRadius: '20px',backgroundColor: '#ffffff', width: '58%'}}>
                   <Box sx={{display:'flex',flexDirection:'column',padding:'10px',justifyContent:'center',marginBottom:'20px',marginLeft:'25px'}}>
                   <Typography fontSize="30px" fontWeight="700" color="#112D35">
                   Get charts and actual values of your hormones
               </Typography>
               <Box sx={{marginTop:'10px'}}>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               Actual numerical values are necessary to know
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               whether your PdG levels are sufficient enough to 
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
                support a healthy pregnancy.
               </Typography>
               </Box>
               <Box sx={{marginTop:'10px'}}>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               Studies show that PdG levels lower than 7.9ng/
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               ml in serum (around 10ug/ml PdG) 6-8 days
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               after ovulation are associated with lower
               </Typography>
               <Typography fontSize="15px" fontWeight="500" color="#112D35">
               pregnancy outcomes.
               </Typography>
               </Box>
                   </Box>
                   <Box>
                    <img style={{overflow: 'hidden',}} src={chart} alt="chart"/>
                   </Box>
                </Box>
            </Box>


            : <>
            <Box>
            <Box sx={{}}>
            <Box
                sx={{
                backgroundImage: `url(${measureSm})`,
                height: '100vh',
                width: '100vw',
               marginTop: '250px',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',gap:'100px',
               position:'relative'
         
            }}>
                <Box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,padding:'20px',position:'absolute',top:'-30%'}}>
                   <Box sx={{ backgroundColor: '#ffffff', borderRadius: '20px',padding:'30px',}}>
                   <div style={{padding: '4px'}}>
                   <Typography fontSize="9px" fontWeight="500" color="#1F94AA">
                   WHY MEASURE PROGESTERONE?
               </Typography>
               </div>
               <div style={{padding: '4px'}}>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
              <span> Anovulation</span> (having a menstrual cycle

               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               with no egg) is actually a common

               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               occurence, affecting 1 in 10 women*.

               </Typography>
               </div>
               <div style={{padding: '4px'}}>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               A sure way to confirm ovulation is a 
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               <span>rise in Progesterone level </span>after peak 
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               fertility. Progesterone also supports
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               implantation and elevated levels of
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               PdG during the 7-10 day window after
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               ovulation correlates to higher chances of
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               a successful pregnancy.
               </Typography>
               </div>
               <div style={{padding: '4px'}}>
               <Typography fontSize="7px" fontWeight="500" color="#A0ABAE">
               * Source: National Institutes of Health
               </Typography>
               </div>
               <div style={{padding: '4px'}}>
               <Typography fontSize="15px" fontWeight="700" color="#112D35">
               “Inito is all that you need to
               </Typography>
               <Typography fontSize="15px" fontWeight="700" color="#112D35">
               give you the best chance of
               </Typography>
               <Typography fontSize="15px" fontWeight="700" color="#112D35">
               conception."
               </Typography>
</div>
<div style={{padding:'12px',display:'flex',gap:'10px'}}>
    <img src={doctor}alt="doc"/>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}
>    <Typography fontSize="10px" fontWeight="700" color="#112D35">
    Dr. Rachel Wagner
               </Typography>
               <Typography fontSize="10px" fontWeight="500" color="#94A0A4">
               MD
               </Typography>
               </div>
</div>
                   </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'150px'}}>
                   <div style={{padding:'4px'}}>
                   <Typography fontSize="20px" fontWeight="700" color="#112D35">
                   Adapts to your
               </Typography>
               <Typography fontSize="20px" fontWeight="700" color="#112D35">
                   irregular cycle
               </Typography>
               </div>
               <div style={{padding:'4px'}}>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               Most ovulation kits have a set value or a
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               threshold, making them likely to give a
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               false read if your hormones fall outside 
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               the average range.
               </Typography>
               </div>
               <div style={{padding:'4px'}}>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
Every woman is unique, especially with a
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
condition like PCOS or Thyroid which can
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
influence hormone levels. Inito measures
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               real values of your hormones  
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               to personalize results to the unique you.
               </Typography>
               </div>
                   </Box>
                </Box> 
               
            </Box>

           
                  
                   <Box sx={{width:'100%'}}>
                    <img style={{overflow: 'hidden',width:'100%'}} src={ladyInito} alt=""/>
                    
                   </Box>
                   </Box>
                   <Box sx={{display:'flex',flexDirection:'column',}}>
                   <div style={{padding:'5px'}}>
                   <Typography fontSize="18px" fontWeight="700" color="#112D35">
                   Inito tracks everything
               </Typography>
               <Typography fontSize="18px" fontWeight="700" color="#112D35">
              so you don’t have to
               </Typography>
               </div>
               <div style={{padding:'5px'}}>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               The Inito Fertility Monitor comes with a
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               free easy-to-use App, so you can track
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               your fertile days with ease and know
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               when you ovulate.
               </Typography>
               </div>
               <div style={{padding:'5px'}}>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               Our App notifies you for everything:
               </Typography>
               </div>
               <div style={{padding:'5px'}}>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               • Your fertility levels
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               • When to test on the right days
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">  
               • When you’ve successfully ovulated
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               • And when to roll into bed!
               </Typography>
               </div>
                   </Box>

                   <Box sx={{position:'relative'}}>
                    <img style={{overflow: 'hidden',}} src={iphone} alt="iphone"/>
                    <div style={{display:'flex',flexDirection:'column', position:'absolute',backgroundColor:'#D9ECDC',borderRadius:'20px',top:'20%',right:'-2%',padding:'10px',width:'100%'}}>
                    <div style={{display:'flex',padding:'10px',justifyContent:'center',gap:'5px'}}>
                        <img src={greenHeart} alt="greenHeart"/>
                        <Typography fontSize="13px" fontWeight="700" color="#112D35">
                  High Fertility
               </Typography>
                    </div>
                    <Typography fontSize="13px" fontWeight="700" color="#112D35">
                   Your fertility level is high. In this window
               </Typography>
               <Typography fontSize="13px" fontWeight="700" color="#112D35">
                  you should have sex every other day
               </Typography>
                    </div>
                   </Box>

                   <Box sx={{display:'flex',flexDirection:'column',padding:'10px',justifyContent:'center',marginBottom:'20px',marginLeft:'25px'}}>
                   <Typography fontSize="18px" fontWeight="700" color="#112D35">
                   Get charts and actual
               </Typography>
               <Typography fontSize="18px" fontWeight="700" color="#112D35">
                values of your hormones
               </Typography>
               <Box sx={{marginTop:'10px'}}>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               Actual numerical values are necessary to
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               know whether your PdG levels are 
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               sufficient enough to support a healthy pregnancy.
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               pregnancy.
               </Typography>
               </Box>
               <Box sx={{}}>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               Studies show that PdG levels lower than
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               7.9ng/ml in serum (around 10ug/ml PdG)
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               6-8 days after ovulation are associated
               </Typography>
               <Typography fontSize="11px" fontWeight="500" color="#112D35">
               with lower pregnancy outcomes.
               </Typography>
               </Box>
                   </Box>
                   <Box sx={{width:'100%'}}>
                    <img style={{overflow: 'hidden',width:'100%'}} src={chart} alt="chart"/>
                   </Box>

            </>
        }
        </>
    )
}
export default PreviewBox;