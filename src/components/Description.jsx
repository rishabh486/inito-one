import { Typography ,Box} from "@mui/material";
import React from "react";
import smDescription from '../assets/svg/sm-description.svg';
import trust from '../assets/svg/trust.svg';
import tick from '../assets/svg/tick.svg';
import eligible from '../assets/svg/eligible.svg';
import dash from '../assets/svg/dash.svg';
export const Description = ({width}) => {
    return (
        <>
        {width>600?
<Box sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems:'center', width:'100%',padding:'40px',
}}>
<Box sx={{width:'70%',position:'relative'}}>

    <Box sx={{padding:'20px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    
        <Typography fontSize="36px" fontWeight="700" color="#112D35">
        The <span><span>only</span><span><img style={{position:'absolute',top:'17%',right:'60%'}}src={dash} alt="dash"/></span></span> fertility kit you will
        </Typography>
        <Typography fontSize="36px" fontWeight="700" color="#112D35">
         ever need
        </Typography>
    </Box>
    <Box sx={{marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div>
        <Typography fontSize="15px" fontWeight="">
        Most ovulation tests predict your fertile days by tracking Estrogen and
        </Typography>
        </div>
        <div>
        <Typography fontSize="15px" fontWeight="">
        Luteinizing Hormone (LH), but fail to measure the hormone that
        </Typography>
        </div>
        <div>
        <Typography fontSize="15px" fontWeight="">
        actually confirms your ovulation and supports pregnancy:
        </Typography>
        </div>
        <div>
        <Typography fontSize="15px" fontWeight="">
         <span style={{color:"#112D35",fontWeight:"700"}}>Progesterone.</span>
        </Typography>
        </div>
    </Box>
    <Box sx={{padding:'20px',display:'flex',justifyContent:'center'}}>
        <Typography fontSize="24px" fontWeight="700" color="#112D35">
        What makes Inito different?
        </Typography>
    </Box>
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
<Typography fontSize="15px" >
Inito is the only fertility monitor that measures all <span style={{color:"#112D35",fontWeight:"700"}}>4 hormones</span> on a
</Typography>
<Typography fontSize="15px" >
 <span style={{color:"#112D35",fontWeight:"700"}}>single test strip,</span> showing you a full picture of your cycles with results 
</Typography>
<Typography>unique to your body.</Typography>

    </Box>
</Box>
</Box>
:<>

<Box sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems:'center', width:'100%',padding:'30px',
backgroundImage: `url(${smDescription})`
}}>
<Box sx={{}}>
    <Box sx={{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Typography fontSize="36px" fontWeight="700" color="#112D35">
        The only fertility kit 
        </Typography>
        <Typography fontSize="36px" fontWeight="700" color="#112D35">
        you will ever need
        </Typography>
    </Box>
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div>
        <Typography fontSize="13px" fontWeight="" color="#112D35">
        Most ovulation tests predict your
        </Typography>
        </div>
        <div>
        <Typography fontSize="13px" fontWeight="" color="#112D35">
        fertile days by tracking Estrogen
        </Typography>
        </div>
        <div>
        <Typography fontSize="13px" fontWeight="500" color="#112D35">
        and Luteinizing Hormone (LH), but 
        </Typography>
        </div>
        <div>
        <Typography fontSize="13px" fontWeight="500" color="#112D35">
        fail to measure the hormone that 
        </Typography>
        </div>
        <div>
        <Typography fontSize="13px" fontWeight="500" color="#112D35">
        actually confirms your ovulation
        </Typography>
        </div>
        <div>
        <Typography fontSize="13px" fontWeight="500" color="#112D35">
        and supports pregnancy:
        </Typography>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Typography fontSize="13px" fontWeight="500">
         <span style={{color:"#112D35",fontWeight:"700"}}>Progesterone.</span>
        </Typography>
        </div>
    </Box>
    <Box sx={{padding:'20px',display:'flex',justifyContent:'center'}}>
        <Typography fontSize="14px" fontWeight="700" color="#112D35">
        What makes Inito different?
        </Typography>
    </Box>
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
<Typography fontSize="13px" >
Inito is the only fertility monitor
</Typography>
<Typography fontSize="13px" >
that measures all <span style={{color:"#112D35",fontWeight:"700"}}>4 hormones</span> on a
</Typography>
<Typography fontSize="13px" >
 <span style={{color:"#112D35",fontWeight:"700"}}>single test strip,</span> showing you a full
</Typography>
<Typography fontSize="13px" >
picture of your cycles with results 
</Typography>
<Typography fontSize="13px">unique to your body.</Typography>

    </Box>
</Box>

<Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'15px',gap:'5px'}}>
    <img src={trust} alt="trust"/>
    <Typography fontSize="9px" fontWeight="600" color="#112D35">
    TRUSTED BY
        </Typography>
        <Typography fontSize="9px" fontWeight="600" color="#112D35">
        20,000+ COUPLES
        </Typography>
</Box>
<Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'15px',gap:'5px'}}>
    <img src={tick} alt="trust"/>
    <Typography fontSize="9px" fontWeight="600" color="#112D35">
    FREE US SHIPPING
        </Typography>
      
</Box>
<Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'15px',gap:'5px'}}>
    <img src={eligible} alt="trust"/>
    <Typography fontSize="9px" fontWeight="600" color="#112D35">
    HSA/FSA ELIGIBLE
        </Typography>
       
</Box>
</Box>
</>}
        </>
    )
}
export default Description;