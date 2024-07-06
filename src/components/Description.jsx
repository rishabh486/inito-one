import { Typography ,Box} from "@mui/material";
import React from "react";

export const Description = () => {
    return (
        <>
<Box sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems:'center', width:'100%',padding:'40px'}}>
<Box sx={{width:'70%'}}>
    <Box sx={{padding:'20px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Typography fontSize="36px" fontWeight="700" color="#112D35">
        The only fertility kit you will
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
        </>
    )
}
export default Description;