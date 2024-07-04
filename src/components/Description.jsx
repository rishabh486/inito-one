import { Typography ,Box} from "@mui/material";
import React from "react";

export const Description = () => {
    return (
        <>
<Box sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems:'center'}}>
    <Box sx={{width:'28%'}}>
        <Typography fontSize="36px" fontWeight="700" color="#112D35">
        The only fertility kit you will ever need
        </Typography>
    </Box>
    <Box sx={{width:'30%'}}>
        <Typography fontSize="15px" fontWeight="">
        Most ovulation tests predict your fertile days by tracking Estrogen and Luteinizing Hormone (LH), but fail to measure the hormone that actually confirms your ovulation and supports pregnancy: <span style={{color:"#112D35",fontWeight:"700"}}>Progesterone.</span>
        </Typography>
    </Box>
    <Box sx={{width:'29%'}}>
        <Typography fontSize="24px" fontWeight="700" color="#112D35">
        What makes Inito different?
        </Typography>
    </Box>
    <Box sx={{width:'29%'}}>
<Typography fontSize="15px" >
Inito is the only fertility monitor that measures all <span style={{color:"#112D35",fontWeight:"700"}}>4 hormones</span> on a <span style={{color:"#112D35",fontWeight:"700"}}>single test strip,</span> showing you a full picture of your cycles with results unique to your body.
</Typography>
    </Box>
</Box>
        </>
    )
}
export default Description;